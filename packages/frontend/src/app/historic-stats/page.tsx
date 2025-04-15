"use client";

import { useEffect, useMemo, useState } from "react";
import { HistoricData } from "../types";
import PilotCount from "./components/pilot-count";
import ControllerCount from "./components/controller-count";
import TopAircraftTypes from "./components/top-aircraft-types";
import TopAircraftTypes5 from "./components/top-aircraft-types-5";
import PilotAndControllerCount from "./components/pilot-and-controller-count";

const HistoricStats = () => {
  const [rawData, setRawData] = useState<HistoricData | undefined>();
  
  useEffect(() => {
    const fetchData = async () => {
      const fetched = await fetch('https://api.vatsim-visualized.com/get-historic-stats');
      const decoded = await fetched.json();
      setRawData(decoded);
    };
    fetchData();
  }, []);

  const latestTimestamp = useMemo(() => {
    if (!rawData) {
      return undefined;
    }

    return Math.max(...Object.keys(rawData).flatMap((key) => rawData[key].map((item) => item.timestamp)));
  }, [rawData]);

  if (!rawData) {
    return null;
  }

  const gridClasses = 'grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(700px,1fr))] py-2 px-6 gap-2';

  return (
    <>
      <div className="px-6 pt-2 flex gap-2 flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl">Historic Stats</h1>
          <p>The data is updated every 30 minutes, but this page will not automatically refresh.</p>
          <p>Viewing on desktop is encouraged given the density of the data.</p>
        </div>
        <div className="text-sm">
          Last updated: {latestTimestamp ? new Date(latestTimestamp).toLocaleString() : 'Loading...'}
        </div>
      </div>
      <div className={gridClasses}>
        <PilotCount rawData={rawData} />
        <ControllerCount rawData={rawData} />
        <PilotAndControllerCount rawData={rawData} />
        <TopAircraftTypes rawData={rawData} />
        <TopAircraftTypes5 rawData={rawData} />
      </div>
    </>
  )
};

export default HistoricStats;