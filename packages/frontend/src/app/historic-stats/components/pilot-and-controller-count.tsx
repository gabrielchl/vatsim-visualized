"use client";
import { FC } from "react";
import { HistoricData } from "../../types";
import LineChart from "@/components/charts/line-chart";
import { notEmpty } from "@/utils";


interface Props {
  data: HistoricData;
}

export const PilotAndControllerCount: FC<Props> = ({data}) => {
  const indexedControllerCount = Object.fromEntries(data.controller_count.map(({timestamp, details}) => [timestamp, details]));
  const chartData = data.pilot_count.map((row) => {
    const controllerCount = indexedControllerCount[row.timestamp];
    if (!controllerCount) {
      return undefined;
    }
    return {
      timestamp: row.timestamp,
      'Pilots': Number(row.details),
      'Controllers': Number(controllerCount),
      'Ratio': Number(row.details) / Number(controllerCount),
    }
  }).filter(notEmpty);

  return (
    <LineChart
      data={chartData}
      title="Pilot and controller count"
      description="Number of pilots and controllers on the network at a given time, as well as the ratio between them"
      yAxisLabel="Count"
      secondYAxisLines={['Ratio']}
      secondYAxisLabel="Ratio"
      lineColorIndexes={{'Pilots': 1, 'Controllers': 3, 'Ratio': 5}}
    />
  );
};

export default PilotAndControllerCount;