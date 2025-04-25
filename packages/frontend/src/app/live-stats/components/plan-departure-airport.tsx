"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import BarChart from "@/components/charts/bar-chart";

interface Props {
  data: VatsimDataFeed;
}

export const PlanDepartureAirport: FC<Props> = ({data}) => {
  const types = data.pilots.map((pilot) => pilot.custom.planDepartureAirport);

  return (
    <BarChart types={types} title="Departure airport" description="Reported by pilots in their flight plan" topNToShow={10} xAxisLabel="Departure airport (ICAO code)" yAxisLabel="# of flights" />
  );
};

export default PlanDepartureAirport;