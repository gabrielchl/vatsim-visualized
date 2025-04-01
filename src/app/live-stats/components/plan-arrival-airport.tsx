"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import BarChart from "@/components/charts/bar-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const PlanArrivalAirport: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.flight_plan?.arrival);
  
  return (
    <BarChart types={types} title="Arrival airport" description="Reported by pilots in their flight plan" topNToShow={10} xAxisLabel="Arrival airport (ICAO code)" yAxisLabel="# of flights" />
  );
};

export default PlanArrivalAirport;