"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const PilotHomeAirportContinent: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.custom.pilotHomeAirportContinent);

  return (
    <PieChart types={types} title="Pilot home continent" description="Reported by pilots when connecting to the network" topNToShow={4} />
  );
};

export default PilotHomeAirportContinent;