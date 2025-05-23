"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import BarChart from "@/components/charts/bar-chart";

interface Props {
  data: VatsimDataFeed;
}

export const PlanArrivalAirport: FC<Props> = ({data}) => {
  const types = data.pilots.map((pilot) => pilot.custom.planArrivalAirport);

  return (
    <BarChart types={types} title="Arrival airport" description="Reported by pilots in their flight plan" topNToShow={10} xAxisLabel="Arrival airport (ICAO code)" yAxisLabel="# of flights" />
  );
};

export default PlanArrivalAirport;