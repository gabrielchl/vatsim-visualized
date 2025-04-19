"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const PilotRating: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.custom.pilotRating);

  return (
    <PieChart types={types} title="Pilot rating" description="Ratings of all connected pilots" />
  );
};

export default PilotRating;