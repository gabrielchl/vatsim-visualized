"use client";
import { FC } from "react";
import { HistoricData } from "../../types";
import LineChart from "@/components/charts/line-chart";

interface Props {
  rawData: HistoricData;
}

export const TopAircraftTypes5: FC<Props> = ({rawData}) => {
  const data = rawData.top_aircraft_types.map(
    (row) => ({
      timestamp: row.timestamp,
      ...JSON.parse(row.details),
    })
  );

  if (data.length) {
    data[data.length - 1] = Object.fromEntries(Object.entries(data[data.length - 1]).slice(0, 6));
  }
  
  return (
    <LineChart data={data} title="Top aircraft types" description="Top 5 aircraft types on the network at a given time" yAxisLabel="# of connections" legend />
  );
};

export default TopAircraftTypes5;