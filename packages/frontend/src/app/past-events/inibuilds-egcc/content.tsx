"use client";
import LineChart from "@/components/charts/line-chart";
import chartData from "./data.json";
import { ReferenceArea, ReferenceLine } from "recharts";

const PageContent = () => {
  return (
    <main>
      <div className="px-6 pt-2 flex gap-2 flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl">Past Events: iniBuilds EGCC Scenery Release</h1>
          <p>On 26 Nov 2025 20:00 UTC, iniBuilds released the EGCC Scenery.</p>
          <p>VATSIM UK organized the Manchester Staff-Up event the day after.</p>
        </div>
      </div>

      <div className="px-6 pt-4">
        <LineChart
          data={chartData}
          title="Departures and arrivals at EGCC"
          description="Number of pilots on the network with a flight plan departing from or arriving to Manchester Airport"
          yAxisLabel="# of pilots"
          lineColorIndexes={{'departure': 1, 'arrival': 3}}
          lastNDays={99}
        >
          <ReferenceLine x={1764187200000} yAxisId="default" label={{ value: 'EGCC Released', position: 'insideTop', offset: 20 }} />
          <ReferenceArea x1={1764270000000} x2={1764279000000} yAxisId="default" label={{ value: 'VATSIM UK Manchester Staff-Up', position: 'insideTop', offset: 20 }} />
        </LineChart>
      </div>
    </main>
  );
}

export default PageContent;
