"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  data: VatsimDataFeed;
}

export const PilotHomeAirportContinent: FC<Props> = ({data}) => {
  const types = data.pilots.map((pilot) => pilot.custom.pilotHomeAirportContinent);

  return (
    <PieChart types={types} title="Pilot home continent" description="Reported by pilots when connecting to the network" topNToShow={9} />
  );
};

export default PilotHomeAirportContinent;