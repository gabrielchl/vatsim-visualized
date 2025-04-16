"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

export const flightRuleMapping: Record<string, string> = {
  I: 'IFR',
  V: 'VFR',
  S: 'Supervisor',
};

export const PlanFlightRule: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map(
    (pilot) => flightRuleMapping[pilot.flight_plan?.flight_rules || '']
  );
  
  return (
    <PieChart types={types} title="Flight rule" description="Reported by pilots in their flight plan, includes supervisors" />
  );
};

export default PlanFlightRule;