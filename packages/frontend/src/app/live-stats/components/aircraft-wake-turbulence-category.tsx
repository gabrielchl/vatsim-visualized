"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const AircraftWakeTurbulenceCategory: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.custom.aircraftWakeTurbulenceCategory);

  return (
    <PieChart types={types} title="Aircraft wake turbulence category" description="Based on DOC8643 from ICAO" />
  );
};

export default AircraftWakeTurbulenceCategory;