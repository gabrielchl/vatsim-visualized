"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const AircraftType: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.custom.aircraftType);

  return (
    <PieChart types={types} title="Aircraft type" description="Based on the aircraft ICAO code reported by pilots" topNToShow={9} />
  );
};

export default AircraftType;