import { VatsimDataFeed } from "@/app/types";
import { cx } from "class-variance-authority";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  rawData?: VatsimDataFeed;
}

export const LastUpdateIndicator: FC<Props> = ({rawData}) => {
  const lastUpdate = useRef('');
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!rawData?.general?.update_timestamp) {
      return;
    }

    const newTimestamp = rawData.general.update_timestamp;
    if (newTimestamp !== lastUpdate.current) {
      lastUpdate.current = newTimestamp;
      setUpdated(true);

      setTimeout(() => {
        setUpdated(false);
      }, 300);
    }
  }, [rawData]);

  return (
    <div className={cx(["flex flex-row gap-2 items-center text-sm transition-colors duration-300", {'text-lime-600': updated}, {'text-lime-700': !updated}])}>
      Last updated: {rawData?.general?.update_timestamp ? new Date(rawData.general?.update_timestamp).toLocaleString() : 'Loading...'}
      <span className="relative flex size-3 items-center justify-center">
        <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-lime-700 opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-lime-700"></span>
      </span>
    </div>
  )
};