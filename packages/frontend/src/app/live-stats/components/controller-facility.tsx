"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  data: VatsimDataFeed;
}

export const ControllerFacility: FC<Props> = ({data}) => {
  const facilities = Object.fromEntries(data.facilities.map(({id, short}) => [id, short]));

  const types = data.controllers.map(
    (controller) => facilities[controller.facility]
  ).filter((type) => type !== 'OBS');

  return (
    <PieChart types={types} title="Controller facility type" description="Facility type of all connected controllers (excluding observers)" />
  );
};

export default ControllerFacility;