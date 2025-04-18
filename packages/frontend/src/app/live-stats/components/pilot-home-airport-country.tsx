"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const PilotHomeAirportCountry: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.custom.pilotHomeAirportCountry);
  
  return (
    <PieChart types={types} title="Pilot home country / region" description="Reported by pilots when connecting to the network" topNToShow={9} />
  );
};

export default PilotHomeAirportCountry;