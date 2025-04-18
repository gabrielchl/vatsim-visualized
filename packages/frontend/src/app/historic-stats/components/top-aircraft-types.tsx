"use client";
import { FC } from "react";
import { HistoricData } from "../../types";
import LineChart from "@/components/charts/line-chart";

interface Props {
  rawData: HistoricData;
}

export const TopAircraftTypes: FC<Props> = ({rawData}) => {
  const data = rawData.top_aircraft_types.map(
    (row) => ({
      timestamp: row.timestamp,
      ...JSON.parse(row.details),
    })
  );
  
  return (
    <LineChart data={data} title="Top aircraft types" description="Top 10 aircraft types on the network at a given time" yAxisLabel="# of connections" />
  );
};

export default TopAircraftTypes;