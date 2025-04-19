"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const AircraftEngineType: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.custom.aircraftEngineType);

  return (
    <PieChart types={types} title="Aircraft engine type" description="Based on DOC8643 from ICAO" />
  );
};

export default AircraftEngineType;