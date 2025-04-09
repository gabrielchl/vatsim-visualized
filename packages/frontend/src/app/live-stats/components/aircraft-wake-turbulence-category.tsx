"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import { designatorToWakeTurbulenceCategory } from "@/consts/aircraft-type-designators";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const AircraftWakeTurbulenceCategory: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map(
    (pilot) => pilot.flight_plan?.aircraft_short
      ? designatorToWakeTurbulenceCategory[pilot.flight_plan.aircraft_short] || 'Unknown'
      : 'Unknown'
  );
  
    return (
      <PieChart types={types} title="Aircraft wake turbulence category" description="Based on DOC8643 from ICAO" />
    );
};

export default AircraftWakeTurbulenceCategory;