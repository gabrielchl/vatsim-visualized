"use client";
import { FC } from "react";
import { HistoricData } from "../../types";
import LineChart from "@/components/charts/line-chart";

interface Props {
  data: HistoricData;
}

export const ControllerCount: FC<Props> = ({data}) => {
  const chartData = data.controller_count.map(
    (row) => ({
      timestamp: row.timestamp,
      Count: Number(row.details),
    })
  );
  
  return (
    <LineChart
      data={chartData}
      title="Controller count"
      description="Number of controllers on the network at a given time (excl. observers)"
      yAxisLabel="# of controllers"
      lineColorIndexes={{Count: 3, CountLastWeek: 3}}
      lastNDays={7}
      showLastWeekLine
    />
  );
};

export default ControllerCount;