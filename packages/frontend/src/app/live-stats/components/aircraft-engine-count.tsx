"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const AircraftEngineCount: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.custom.aircraftEngineCount);
  
    return (
      <PieChart types={types} title="Aircraft engine count" description="Based on DOC8643 from ICAO" />
    );
};

export default AircraftEngineCount;