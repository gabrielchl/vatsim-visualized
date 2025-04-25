"use client";
import { FC } from "react";
import { HistoricData } from "../../types";
import LineChart from "@/components/charts/line-chart";

interface Props {
  data: HistoricData;
}

export const TopAircraftTypes5: FC<Props> = ({data}) => {
  const chartData = data.top_aircraft_types.map(
    (row) => ({
      timestamp: row.timestamp,
      ...JSON.parse(row.details),
    })
  );

  if (chartData.length) {
    chartData[chartData.length - 1] = Object.fromEntries(Object.entries(chartData[chartData.length - 1]).slice(0, 6));
  }
  
  return (
    <LineChart data={chartData} title="Top aircraft types" description="Top 5 aircraft types on the network at a given time" yAxisLabel="# of connections" />
  );
};

export default TopAircraftTypes5;