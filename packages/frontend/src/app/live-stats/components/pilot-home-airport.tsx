"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import BarChart from "@/components/charts/bar-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const PilotHomeAirport: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => {
    const code = pilot.name.split(' ').at(-1);
    return code && code.length === 4 && code.toUpperCase() === code ? code : undefined;
  });
  
  return (
    <BarChart types={types} title="Pilot home pilot" description="Reported by pilots when connecting to the network" topNToShow={10} xAxisLabel="Home airport (Top 10, ICAO code)" yAxisLabel="# of pilots" />
  );
};

export default PilotHomeAirport;