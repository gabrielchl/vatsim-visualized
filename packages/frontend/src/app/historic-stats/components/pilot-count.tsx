"use client";
import { FC } from "react";
import { HistoricData } from "../../types";
import LineChart from "@/components/charts/line-chart";

interface Props {
  data: HistoricData;
}

export const PilotCount: FC<Props> = ({data}) => {
  const chartData = data.pilot_count.map(
    (row) => ({
      timestamp: row.timestamp,
      count: Number(row.details),
    })
  );
  
  return (
    <LineChart data={chartData} title="Pilot count" description="Number of pilots on the network at a given time" yAxisLabel="# of pilots" />
  );
};

export default PilotCount;