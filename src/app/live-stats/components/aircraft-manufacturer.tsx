"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import { designatorToManufacturer } from "@/consts/aircraft-type-designators";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const AircraftManufacturer: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map(
    (pilot) => (pilot.flight_plan?.aircraft_short || '') in designatorToManufacturer ? designatorToManufacturer[pilot.flight_plan?.aircraft_short || ''] || 'Unknown' : 'Unknown'
  );
  
    return (
      <PieChart types={types} title="Aircraft manufacturer" description="Based on DOC8643 from ICAO" topNToShow={4} />
    );
};

export default AircraftManufacturer;