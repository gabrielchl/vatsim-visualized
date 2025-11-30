import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import fs from 'fs';

const FROM_DATETIME = '2025-11-20T00:00:00.0000000Z.json'; // including this date, if it exists
const TO_DATETIME = '2025-11-30T23:59:59.0000000Z.json'; // including this date, if it exists

type Pilot = { flight_plan?: { departure?: string; arrival?: string } };
type VatData = { general: { update_timestamp: string }, pilots: Pilot[] };

const main = async () => {
  const r2ReadKeyId = process.env.R2_RAW_DATA_READ_KEY_ID as string;
  const r2ReadKey = process.env.R2_RAW_DATA_READ_KEY as string;
  const account_id = process.env.CF_ACCOUNT_ID as string;

  const s3Client = new S3Client({
    endpoint: `https://${account_id}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: r2ReadKeyId,
      secretAccessKey: r2ReadKey,
    },
    region: 'auto',
  });

  const commonPrefix = (() => {
    let prefix = '';
    for (let i = 0; i < Math.min(FROM_DATETIME.length, TO_DATETIME.length); i++) {
      if (FROM_DATETIME[i] === TO_DATETIME[i]) {
        prefix += FROM_DATETIME[i];
      } else {
        break;
      }
    }
    return prefix;
  })();

  // Helper to list all objects for a given prefix using pagination
  const listAllObjects = async (client: S3Client, bucket: string, prefix?: string) => {
    const allObjects = [] as ({ Key?: string } | undefined)[];
    let continuationToken: string | undefined = undefined;

    do {
      const params: any = { Bucket: bucket, Prefix: prefix };
      if (continuationToken) params.ContinuationToken = continuationToken;
      // request up to the max page size (1000)
      params.MaxKeys = 1000;

      const res = await client.send(new ListObjectsV2Command(params));
      if (res.Contents && res.Contents.length) {
        allObjects.push(...res.Contents);
      }
      continuationToken = res.NextContinuationToken;
      // continue while S3 reports there are more results
    } while (continuationToken);

    return allObjects;
  };

  const listedContents = await listAllObjects(s3Client, 'vatsim-visualized-raw-data', commonPrefix);

  const filenames = listedContents
    .map(obj => obj?.Key)
    .filter((key) => key ? key >= FROM_DATETIME && key < TO_DATETIME : false) as string[];

  if (!filenames?.length) {
    throw Error('no files found');
  }

  console.log(`Found ${filenames.length} files between ${FROM_DATETIME} and ${TO_DATETIME}`);

  const rows: {timestamp: number, departure: number, arrival: number}[] = [];
  for (const filename of filenames) {
    const getObject = await s3Client.send(new GetObjectCommand({
      Bucket: 'vatsim-visualized-raw-data',
      Key: filename,
    }));

    const content = await getObject.Body?.transformToString()

    if (!content) {
      throw Error('no content in file: ' + filename);
    }

    const data = JSON.parse(content) as VatData;

    const timestamp = data.general.update_timestamp;
    const numeralTimestamp = (new Date(timestamp)).getTime();

    const departureCount = data.pilots.filter((pilot) => pilot.flight_plan?.departure === 'EGCC').length;
    const arrivalCount = data.pilots.filter((pilot) => pilot.flight_plan?.arrival === 'EGCC').length;

    rows.push({timestamp: numeralTimestamp, departure: departureCount, arrival: arrivalCount});
  }

  console.log(JSON.stringify(rows, null, 2));
  // save rows to a JSON file
  const path = 'output.json';
  fs.writeFileSync(path, JSON.stringify(rows, null));
  console.log(`Saved data to ${path}`);
};

main();
