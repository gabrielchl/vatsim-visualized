"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  data: VatsimDataFeed;
}

export const AircraftManufacturer: FC<Props> = ({data}) => {
  const types = data.pilots.map((pilot) => pilot.custom.aircraftManufacturer);

  return (
    <PieChart types={types} title="Aircraft manufacturer" description="Based on DOC8643 from ICAO" topNToShow={4} />
  );
};

export default AircraftManufacturer;