"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  data: VatsimDataFeed;
}

export const flightRuleMapping: Record<string, string> = {
  I: 'IFR',
  V: 'VFR',
  S: 'Supervisor',
};

export const PlanFlightRule: FC<Props> = ({data}) => {
  const types = data.pilots.map((pilot) => pilot.custom.planFlightRule);

  return (
    <PieChart types={types} title="Flight rule" description="Reported by pilots in their flight plan, includes supervisors" />
  );
};

export default PlanFlightRule;