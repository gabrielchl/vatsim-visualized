"use client";
import { FC } from "react";
import { HistoricData } from "../../types";
import LineChart from "@/components/charts/line-chart";

interface Props {
  data: HistoricData;
}

export const TopAircraftTypes: FC<Props> = ({data}) => {
  const lastKeys = Object.keys(JSON.parse(data.top_aircraft_types.at(-1)?.details || '{}'));
  const chartData = data.top_aircraft_types.map(
    (row) => ({
      timestamp: row.timestamp,
      ...Object.fromEntries(
        Object.entries(JSON.parse(row.details)).filter(([key]) => lastKeys.includes(key))
      )
    })
  );
  
  return (
    <LineChart data={chartData} title="Top aircraft types" description="Top 10 aircraft types on the network at a given time" yAxisLabel="# of connections" />
  );
};

export default TopAircraftTypes;