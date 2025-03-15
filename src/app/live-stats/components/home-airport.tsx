"use client";
import { FC, useMemo, useState } from "react";
import { VatsimDataFeed } from "../../types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, Pie, PieChart, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { ChartPie, Table } from "lucide-react";
import { DataTable } from "@/components/data-table";

interface Props {
  rawData: VatsimDataFeed | undefined;
}

type Row = {type: string, count: number};

export enum DataDisplayMode {
  CHART = 'chart',
  TABLE = 'table',
}

export const HomeAirport: FC<Props> = ({rawData}) => {
  const [mode, setMode] = useState<DataDisplayMode>(DataDisplayMode.CHART);

  const {chartData, tableData}: {chartData?: Row[], tableData?: Row[]} = useMemo(() => {
    if (!rawData) {
      return {};
    }

    const typeCounts = rawData.pilots
      .map((pilot) => {
        const code = pilot.name.split(' ').at(-1);
        return code && code.length === 4 && code.toUpperCase() === code ? code : undefined;
      })
      .reduce((obj: Record<string, number>, type) => type ? ({...obj, [type]: (obj[type] || 0) + 1}) : obj, {});

    const sorted = Object.entries(typeCounts).toSorted((a, b) => b[1] - a[1]);

    return {
      chartData: [
        ...sorted.slice(0, 10).map(([type, count]) => ({
          type,
          count,
          fill: `var(--color-${type})`,
        })),
        // {type: 'Others', count: sorted.slice(9).reduce((sum, [_, count]) => sum + count, 0), fill: 'var(--color-Others)'}
      ].toSorted((a, b) => b.count - a.count),
      tableData: sorted.map(([type, count]) => ({type, count})),
    };
  }, [rawData]);

  const chartConfig = chartData ? Object.fromEntries(chartData.map((row, i) => [row.type, {label: row.type, color: `var(--chart-${(i % 5) + 1})`}])) : undefined;

  if (!chartData || !chartConfig || !tableData) {
    return;
  }

  return (
    <Card className="flex flex-col">
      <div className="grid grid-cols-[1fr_max-content_1fr]">
        <div />
        <CardHeader className="items-center pb-0">
          <CardTitle>Home airport</CardTitle>
          <CardDescription>Reported by pilots when connecting to the network</CardDescription>
        </CardHeader>
        <div className="flex flex-row gap-1 justify-end items-center pr-2">
          <Button variant={mode === DataDisplayMode.CHART ? 'default' : 'secondary'} onClick={() => setMode(DataDisplayMode.CHART)}><ChartPie /></Button>
          <Button variant={mode === DataDisplayMode.TABLE ? 'default' : 'secondary'} onClick={() => setMode(DataDisplayMode.TABLE)}><Table /></Button>
        </div>
      </div>
      <CardContent className="flex-1 pb-0 flex items-center">
        {mode === DataDisplayMode.CHART ? (
          <ChartContainer
            config={chartConfig}
            className="mx-auto h-[450px] max-h-full max-w-full"
          >
            <BarChart accessibilityLayer data={chartData}>
              <ChartTooltip content={<ChartTooltipContent hideLabel nameKey="type" />} />
              <CartesianGrid vertical={false} />
              <XAxis dataKey="type" label={{value: "Home airport (Top 10, ICAO code)", position: 'bottom', offset: -7}} tickLine={false} axisLine={false} />
              <YAxis label={{value: "# of pilots", angle: -90}} tickLine={false} axisLine={false}/>
              <Bar dataKey="count" isAnimationActive={false} radius={8}>
                <LabelList position="top" />
              </Bar>
            </BarChart>
          </ChartContainer>
        ): null}
        {mode === DataDisplayMode.TABLE ? (
          <DataTable<Row, unknown> columns={[
            {
              accessorKey: 'type',
              header: 'Type',
            },
            {
              accessorKey: 'count',
              header: 'Count',
            }
          ]} data={tableData} />
        ) : null}
      </CardContent>
    </Card>
  );
};

export default HomeAirport;