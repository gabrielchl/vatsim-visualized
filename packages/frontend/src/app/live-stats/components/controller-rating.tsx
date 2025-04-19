"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const ControllerRating: FC<Props> = ({rawData}) => {
  const ratings = Object.fromEntries(rawData.ratings.map(({id, short}) => [id, short]));

  const types = rawData.controllers.map(
    (controller) => ratings[controller.rating]
  );

  return (
    <PieChart types={types} title="Controller rating" description="Ratings of all connected controllers (including observers)" />
  );
};

export default ControllerRating;