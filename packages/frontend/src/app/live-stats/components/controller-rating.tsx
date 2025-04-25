"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  data: VatsimDataFeed;
}

export const ControllerRating: FC<Props> = ({data}) => {
  const ratings = Object.fromEntries(data.ratings.map(({id, short}) => [id, short]));

  const types = data.controllers.map(
    (controller) => ratings[controller.rating]
  );

  return (
    <PieChart types={types} title="Controller rating" description="Ratings of all connected controllers (including observers)" />
  );
};

export default ControllerRating;