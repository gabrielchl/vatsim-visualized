"use client";
import { FC, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Pie, PieChart as PieChartRecharts } from "recharts";
import { Button } from "@/components/ui/button";
import { Table } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface Props {
  types: (string | undefined)[];
  title: string;
  description: string;
  topNToShow?: number;
}

type Row = {type: string, count: number};

export const PieChart: FC<Props> = ({types, title, description, topNToShow}) => {
  const {chartData, tableData}: {chartData?: Row[], tableData?: Row[]} = useMemo(() => {
    const typeCounts = types.reduce((obj: Record<string, number>, type) => type ? ({...obj, [type]: (obj[type] || 0) + 1}) : obj, {});

    const sorted = Object.entries(typeCounts).toSorted((a, b) => b[1] - a[1]);

    return {
      chartData: [
        ...(topNToShow ? sorted.slice(0, topNToShow) : sorted).map(([type, count]) => ({
          type,
          count,
          fill: `var(--color-${type.replace(/[^A-Za-z0-9]/g, "")})`,
        })),
        ...((topNToShow && sorted.length > topNToShow)
          ? [{type: 'Others', count: sorted.slice(topNToShow).reduce((sum, [, count]) => sum + count, 0), fill: 'var(--color-Others)'}]
          : []
        ),
      ].toSorted((a, b) => b.count - a.count),
      tableData: sorted.map(([type, count]) => ({type, count})),
    };
  }, [types, topNToShow]);

  const chartConfig = chartData ? Object.fromEntries(chartData.map((row, i) => [row.type.replace(/[^A-Za-z0-9]/g, ""), {label: row.type, color: `var(--chart-${(i % 5) + 1})`}])) : undefined;

  if (!chartData || !chartConfig || !tableData) {
    return;
  }

  return (
    <Card className="flex flex-col relative shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="absolute top-4 right-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary"><Table /></Button>
          </DialogTrigger>
          <DialogContent className="h-[calc(100vh-20px)] flex flex-col">
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
      <CardContent className="flex-1 px-0 pb-0 flex items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[450px] max-h-full max-w-full w-full"
        >
          <PieChartRecharts margin={{ right: 70, left: 70 }}>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie data={chartData} dataKey="count" label={(entry) => `${entry.type}: ${entry.count}`} nameKey="type" isAnimationActive={false} />
          </PieChartRecharts>
        </ChartContainer>
      </CardContent>
      <div className="absolute bottom-3 right-4 text-gray-300 text-xs">vatsim-visualized.com</div>
    </Card>
  );
};

export default PieChart;