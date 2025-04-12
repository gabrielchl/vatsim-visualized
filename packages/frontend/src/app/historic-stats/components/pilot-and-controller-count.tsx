"use client";
import { FC } from "react";
import { HistoricData } from "../../types";
import LineChart from "@/components/charts/line-chart";
import { notEmpty } from "@/utils";


interface Props {
  rawData: HistoricData;
}

export const PilotAndControllerCount: FC<Props> = ({rawData}) => {
  const indexedControllerCount = Object.fromEntries(rawData.controller_count.map(({timestamp, details}) => [timestamp, details]));
  const data = rawData.pilot_count.map((row) => {
    const controllerCount = indexedControllerCount[row.timestamp];
    if (!controllerCount) {
      return undefined;
    }
    return {
      timestamp: row.timestamp,
      'pilots': Number(row.details),
      'controllers': Number(controllerCount),
      'ratio': Number(row.details) / Number(controllerCount),
    }
  }).filter(notEmpty);

  return (
    <LineChart
      data={data}
      title="Pilot and controller count"
      description="Number of pilots and controllers on the network at a given time, as well as the ratio between them"
      yAxisLabel="count"
      secondYAxisLines={['ratio']}
      secondYAxisLabel="ratio"
      lineColorIndexes={{'pilots': 1, 'controllers': 3, 'ratio': 5}}
    />
  );
};

export default PilotAndControllerCount;