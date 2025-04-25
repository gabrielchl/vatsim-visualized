"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import BarChart from "@/components/charts/bar-chart";

interface Props {
  data: VatsimDataFeed;
}

export const PilotHomeAirport: FC<Props> = ({data}) => {
  const types = data.pilots.map((pilot) => pilot.custom.pilotHomeAirport);

  return (
    <BarChart types={types} title="Pilot home airport" description="Reported by pilots when connecting to the network" topNToShow={10} xAxisLabel="Home airport (Top 10, ICAO code)" yAxisLabel="# of pilots" />
  );
};

export default PilotHomeAirport;