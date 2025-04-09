"use client";

import { useEffect, useState } from "react";
import { HistoricData } from "../types";
import PilotCount from "./components/pilot-count";
import ControllerCount from "./components/controller-count";
import TopAircraftTypes from "./components/top-aircraft-types";

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

  if (!rawData) {
    return null;
  }

  const gridClasses = 'grid grid-cols-1 @min-[750px]:grid-cols-[repeat(auto-fill,minmax(700px,1fr))] py-2 px-6 gap-2';

  return (
    <div className="@container">
      <div className={gridClasses}>
        <PilotCount rawData={rawData} />
        <ControllerCount rawData={rawData} />
        <TopAircraftTypes rawData={rawData} />
      </div>
    </div>
  )
};

export default HistoricStats;