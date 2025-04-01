"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const RatingPilot: FC<Props> = ({rawData}) => {
  const ratings = Object.fromEntries(rawData.pilot_ratings.map(({id, short_name}) => [id, short_name]));

  const types = rawData.pilots.map(
    (pilot) => ratings[pilot.pilot_rating]
  );
  
  return (
    <PieChart types={types} title="Pilot ratings" description="Ratings of all connected pilots" />
  );
};

export default RatingPilot;