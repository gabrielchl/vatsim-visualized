"use client";

import { useEffect, useMemo, useState } from "react";
import { HistoricData } from "../types";
import PilotCount from "./components/pilot-count";
import ControllerCount from "./components/controller-count";
import TopAircraftTypes from "./components/top-aircraft-types";
import TopAircraftTypes5 from "./components/top-aircraft-types-5";
import PilotAndControllerCount from "./components/pilot-and-controller-count";
import { useDayJs } from "@/hooks/use-day-js";
import { LONG_DATE_TIME_FORMAT } from "@/consts/dates";

const HistoricStats = () => {
  const [data, setData] = useState<HistoricData | undefined>();
  const dayjs = useDayJs();
  
  useEffect(() => {
    const fetchData = async () => {
      const fetched = await fetch('https://api.vatsim-visualized.com/get-historic-stats');
      const decoded = await fetched.json();
      setData(decoded);
    };
    fetchData();
  }, []);

  const latestTimestamp = useMemo(() => {
    if (!data) {
      return undefined;
    }

    return Math.max(...Object.keys(data).flatMap((key) => data[key].map((item) => item.timestamp)));
  }, [data]);

  if (!data) {
    return null;
  }

  const gridClasses = 'grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(700px,1fr))] py-2 px-6 gap-2';

  return (
    <main>
      <div className="px-6 pt-2 flex gap-2 flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl">Historic Stats</h1>
          <p>The data is updated every 30 minutes, but this page will not automatically refresh.</p>
          <p>Viewing on desktop is encouraged given the density of the data.</p>
        </div>
        <div className="text-sm">
          Last updated: {latestTimestamp ? dayjs(latestTimestamp).format(LONG_DATE_TIME_FORMAT) : 'Loading...'}
        </div>
      </div>
      <div className={gridClasses}>
        <PilotCount data={data} />
        <ControllerCount data={data} />
        <PilotAndControllerCount data={data} />
        <TopAircraftTypes data={data} />
        <TopAircraftTypes5 data={data} />
      </div>
    </main>
  )
};

export default HistoricStats;