"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import { airportCodeToDetails } from "@/consts/airports";
import {distance, point} from '@turf/turf';
import BarChart from "@/components/charts/bar-chart";

interface Props {
  data: VatsimDataFeed;
}

export const PlanFlightDistance: FC<Props> = ({data}) => {
  const types = data.pilots.map(
    (pilot) => {
      if (!pilot.flight_plan) return undefined;
      const from = airportCodeToDetails[pilot.flight_plan.departure];
      const to = airportCodeToDetails[pilot.flight_plan.arrival];
      if (!from || !to) return undefined;

      const dist = distance(point([from.latitude, from.longitude]), point([to.latitude, to.longitude]), {units: 'kilometers'})
      if (dist < 500) {
        return '<500';
      } else if (dist < 1000) {
        return '<1000';
      } else if (dist < 1500) {
        return '<1500';
      } else if (dist < 2000) {
        return '<2000';
      } else if (dist < 3000) {
        return '<3000';
      } else if (dist < 4000) {
        return '<4000';
      } else if (dist < 6000) {
        return '<6000';
      } else if (dist < 8000) {
        return '<8000';
      } else if (dist < 10000) {
        return '<10000';
      } else {
        return '10000+';
      }
    }
  );

  return (
    <BarChart
      types={types}
      title="Flight length in km"
      description="Based on the reported departure and arrival airport"
      xAxisLabel="Distance range (km)"
      yAxisLabel="# of flights"
      xAxisTicks={['<500', '<1000', '<1500', '<2000', '<3000', '<4000', '<6000', '<8000', '<10000', '10000+']}
    />
  );
};

export default PlanFlightDistance;