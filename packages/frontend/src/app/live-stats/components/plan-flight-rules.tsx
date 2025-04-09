"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";

interface Props {
  rawData: VatsimDataFeed;
}

const mapping: Record<string, string> = {
  I: 'IFR',
  V: 'VFR',
  S: 'Supervisor',
};

export const PlanFlightRules: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map(
    (pilot) => mapping[pilot.flight_plan?.flight_rules || '']
  );
  
  return (
    <PieChart types={types} title="Flight rules" description="Reported by pilots in their flight plan, includes supervisors" />
  );
};

export default PlanFlightRules;