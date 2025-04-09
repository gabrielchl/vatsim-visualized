import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import Cloudflare from 'cloudflare';

const BEFORE_DATETIME = '2025-04-08T16:30:00.0000000Z.json'; // it'll get all documents BEFORE this date, excluding this date

const main = async () => {
    const r2ReadKeyId = process.env.R2_RAW_DATA_READ_KEY_ID as string;
    const r2ReadKey = process.env.R2_RAW_DATA_READ_KEY as string;
    const d1EditToken = process.env.D1_STATS_EDIT_TOKEN as string;
    const d1DbId = process.env.D1_DB_ID as string;
    const account_id = process.env.CF_ACCOUNT_ID as string;

    const s3Client = new S3Client({
        endpoint: `https://${account_id}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: r2ReadKeyId,
            secretAccessKey: r2ReadKey,
        },
        region: 'auto',
    });

    const listObjectsResult = await s3Client.send(new ListObjectsV2Command({
        Bucket: 'vatsim-visualized-raw-data',
    }));

    if (listObjectsResult.IsTruncated) {
        throw Error('list objects response is truncated');
    }

    const filenames = listObjectsResult.Contents?.map(obj => obj.Key)?.filter((key) => key ? key < BEFORE_DATETIME : false);

    if (!filenames?.length) {
        throw Error('no files found');
    }

    const rows: {timestamp: number, details: string}[] = [];
    for (const filename of filenames) {
        const getObject = await s3Client.send(new GetObjectCommand({
            Bucket: 'vatsim-visualized-raw-data',
            Key: filename,
        }));

        const content = await getObject.Body?.transformToString()

        if (!content) {
            throw Error('no content in file: ' + filename);
        }

        const data = JSON.parse(content);
        
		const timestamp = data.general.update_timestamp;
		const numeralTimestamp = (new Date(timestamp)).getTime();

        const aircraftTypes = data.pilots.reduce((prev, pilot) => {
			const type = pilot.flight_plan?.aircraft_short || 'Unknown';
			return {...prev, [type]: (prev[type] || 0) + 1};
		}, {} as Record<string, number>);
		const topAircraftTypes = Object.fromEntries(Object.entries(aircraftTypes).sort((a, b) => b[1] - a[1]).slice(0, 10));

        rows.push({timestamp: numeralTimestamp, details: JSON.stringify(topAircraftTypes)});
    }

    const cfClient = new Cloudflare({
        apiKey: d1EditToken,
    });

    const type = 'top_aircraft_types';

    console.log(`INSERT INTO stats (id, timestamp, type, details) VALUES ${rows.map((row) => `("${`${row.timestamp}_${type}`}", ${row.timestamp}, "${type}", '${row.details}')`).join(', ')};`);
    const queryResult = cfClient.d1.database.query(d1DbId, {
        account_id: account_id,
        sql: `INSERT INTO stats (id, timestamp, type, details) VALUES ${rows.map((row) => `("${`${row.timestamp}_${type}`}", ${row.timestamp}, "${type}", '${row.details}')`).join(', ')};`,
    });

    console.log(queryResult);
};

main();
