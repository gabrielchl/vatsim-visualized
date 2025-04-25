import { VatsimDataFeed } from "@/app/types";
import { LONG_DATE_TIME_FORMAT } from "@/consts/dates";
import { useDayJs } from "@/hooks/use-day-js";
import { cx } from "class-variance-authority";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  data?: VatsimDataFeed;
  isHistoricData?: boolean;
}

export const LastUpdateIndicator: FC<Props> = ({data, isHistoricData}) => {
  const lastUpdate = useRef('');
  const [updated, setUpdated] = useState(false);
  const dayjs = useDayJs();

  useEffect(() => {
    if (!data?.general?.update_timestamp) {
      return;
    }

    const newTimestamp = data.general.update_timestamp;
    if (newTimestamp !== lastUpdate.current) {
      lastUpdate.current = newTimestamp;
      setUpdated(true);

      setTimeout(() => {
        setUpdated(false);
      }, 300);
    }
  }, [data]);

  return (
    <div className={cx(["flex flex-row gap-2 items-center text-sm transition-colors duration-300", isHistoricData ? 'text-gray-700 dark:text-gray-400' : (updated ? 'text-lime-600' : 'text-lime-700')])}>
      {isHistoricData ? 'Historic data' : 'Last updated'}: {data?.general?.update_timestamp ? dayjs(data.general.update_timestamp).format(LONG_DATE_TIME_FORMAT) : 'Loading...'}
      <span className="relative flex size-3 items-center justify-center">
        {isHistoricData ? null : <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-lime-700 opacity-75"></span>}
        <span className={cx(["relative inline-flex size-2 rounded-full", isHistoricData ? 'bg-gray-700 dark:bg-gray-400' : 'bg-lime-700'])}></span>
      </span>
    </div>
  )
};