"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import { designatorToEngineType } from "@/consts/aircraft-type-designators";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const AircraftEngineType: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map(
    (pilot) => (pilot.flight_plan?.aircraft_short || '') in designatorToEngineType ? designatorToEngineType[pilot.flight_plan?.aircraft_short || ''] || 'Unknown' : 'Unknown'
  );
  
    return (
      <PieChart types={types} title="Aircraft engine type" description="Based on DOC8643 from ICAO" />
    );
};

export default AircraftEngineType;