"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import BarChart from "@/components/charts/bar-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const PlanRoute: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map((pilot) => pilot.custom.planRoute);

  return (
    <BarChart
      types={types}
      title="Route"
      description="Reported by pilots in their flight plan"
      topNToShow={10}
      yAxisLabel="# of flights"
      xAxisProps={{angle: 25, dy: 8, label: {value: 'Departure & arrival airport pair (ICAO code)', position: 'bottom', offset: 10}}}
      margin={{bottom: 22}}
    />
  );
};

export default PlanRoute;