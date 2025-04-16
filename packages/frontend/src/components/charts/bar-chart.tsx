"use client";
import { ComponentProps, FC, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart as BarChartRecharts, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { Table } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

type Props = {
  types: (string | undefined)[];
  title: string;
  description: string;
  topNToShow?: number;
  includeOthers?: boolean;
  xAxisLabel?: string;
  yAxisLabel: string;
  xAxisTicks?: string[];
  xAxisProps?: Partial<XAxis['props']>;
} & Partial<ComponentProps<(typeof BarChartRecharts)>>;

type Row = {type: string, count: number};

export const BarChart: FC<Props> = ({types, title, description, topNToShow, includeOthers, xAxisLabel, yAxisLabel, xAxisTicks, xAxisProps, ...props}) => {
  const {chartData, tableData}: {chartData?: Row[], tableData?: Row[]} = useMemo(() => {
    const typeCounts = types.reduce((obj: Record<string, number>, type) => type ? ({...obj, [type]: (obj[type] || 0) + 1}) : obj, {});

    const sorted = Object.entries(typeCounts).toSorted((a, b) => xAxisTicks ? xAxisTicks.indexOf(a[0]) - xAxisTicks.indexOf(b[0]) : b[1] - a[1]);

    const showOthers = topNToShow && sorted.length > topNToShow && includeOthers;

    const unsortedChartData = [
      ...(topNToShow ? sorted.slice(0, showOthers ? topNToShow - 1 : topNToShow) : sorted).map(([type, count]) => ({
        type,
        count,
        fill: `var(--color-${type.replace('+', 'plus').replace(/[^A-Za-z0-9]/g, "")})`,
      })),
      ...((showOthers)
        ? [{type: 'Others', count: sorted.slice(topNToShow - 1).reduce((sum, [, count]) => sum + count, 0), fill: 'var(--color-Others)'}]
        : []
      ),
    ];

    return {
      chartData: xAxisTicks ? unsortedChartData : unsortedChartData.toSorted((a, b) => b.count - a.count),
      tableData: sorted.map(([type, count]) => ({type, count})),
    };
  }, [types, topNToShow, includeOthers, xAxisTicks]);

  const chartConfig = chartData ? Object.fromEntries(chartData.map((row, i) => [row.type.replace('+', 'plus').replace(/[^A-Za-z0-9]/g, ""), {label: row.type, color: `var(--chart-${(i % 5) + 1})`}])) : undefined;

  if (!chartData || !chartConfig || !tableData) {
    return;
  }

  return (
    <Card className="flex flex-col relative shadow-none max-sm:border-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="absolute top-2 right-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary"><Table /></Button>
          </DialogTrigger>
          <DialogContent className="h-[calc(100vh-40px)] flex flex-col">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <DataTable<Row, unknown>
              columns={[
                {
                  accessorKey: 'type',
                  header: 'Type',
                },
                {
                  accessorKey: 'count',
                  header: 'Count',
                }
              ]}
              data={tableData}
            />
          </DialogContent>
        </Dialog>
      </div>
      <CardContent className="flex-1 px-3 pb-0 flex items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[450px] max-h-full max-w-full w-full"
        >
          <BarChartRecharts accessibilityLayer data={chartData} {...props}>
            <ChartTooltip content={<ChartTooltipContent />} />
            <CartesianGrid vertical={false} />
            <XAxis dataKey="type" label={{value: xAxisLabel, position: 'bottom', offset: -7}} tickLine={false} axisLine={false} {...xAxisProps} />
            <YAxis label={{value: yAxisLabel, angle: -90, position: 'insideLeft'}} tickLine={false} axisLine={false} />
            <Bar dataKey="count" isAnimationActive={false} radius={8}>
              <LabelList position="top" />
            </Bar>
          </BarChartRecharts>
        </ChartContainer>
      </CardContent>
      <div className="absolute bottom-3 right-4 text-gray-300 text-xs">vatsim-visualized.com</div>
    </Card>
  );
};

export default BarChart;