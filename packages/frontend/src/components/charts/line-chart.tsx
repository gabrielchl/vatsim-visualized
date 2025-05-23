"use client";
import { FC, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart as LineChartRecharts, XAxis, YAxis } from "recharts"
import { DataKey } from "recharts/types/util/types";
import { useDayJs } from "@/hooks/use-day-js";
import { MEDIUM_DATE_TIME_FORMAT } from "@/consts/dates";

type Row = {timestamp: number} & Record<string, number>;

type Props = {
  data: Row[];
  title: string;
  description: string;
  yAxisLabel: string;
  legend?: boolean;
  secondYAxisLines?: string[];
  secondYAxisLabel?: string;
  lineColorIndexes?: Record<string, number>;
};


export const LineChart: FC<Props> = ({data, title, description, yAxisLabel, secondYAxisLines, secondYAxisLabel, lineColorIndexes}) => {
  const keys = Object.keys(data.at(-1) || {});
  const index = keys.indexOf('timestamp');
  if (index > -1) {
    keys.splice(index, 1);
  }
  const chartConfig = Object.fromEntries(keys.map((key, i) => [key.replace(/[^A-Za-z0-9]/g, ""), {label: key, color: `var(--chart-${lineColorIndexes ? lineColorIndexes[key] : (i % 5) + 1})`}]));
  const [hoveredLine, setHoveredLine] = useState<DataKey<any> | null>(null);
  const [clickedLines, setClickedLines] = useState<DataKey<any>[]>([]);
  const dayjs = useDayJs();

  return (
    <Card className="flex flex-col relative shadow-none max-sm:border-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 px-3 pb-0 flex items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[450px] max-h-full max-w-full w-full"
        >
          <LineChartRecharts accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              type="number"
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              domain={['dataMin', 'dataMax']}
              tickFormatter={(time) => dayjs(time).format(MEDIUM_DATE_TIME_FORMAT)}
            />
            <YAxis label={{value: yAxisLabel, angle: -90, position: 'insideLeft'}} tickLine={false} axisLine={false} yAxisId="default" />
            {secondYAxisLines ? (
              <YAxis label={{value: secondYAxisLabel || 'count', angle: -90, position: 'insideRight'}} tickLine={false} axisLine={false} yAxisId="second" orientation="right" />
            ) : null}
            {keys.map((key) => key === 'timestamp' ? null : (
              <Line
                key={key}
                dataKey={key}
                type="natural"
                isAnimationActive={false}
                stroke={`var(--color-${key.replace(/[^A-Za-z0-9]/g, "")})`}
                strokeWidth={2}
                dot={false}
                yAxisId={secondYAxisLines?.includes(key) ? 'second' : 'default'}
                strokeDasharray={secondYAxisLines?.includes(key) ? '6 3' : undefined}
                opacity={hoveredLine || clickedLines.length ? (key === hoveredLine || clickedLines.includes(key) ? 1 : 0.3) : 1}
              />
            ))}
            <ChartTooltip content={<ChartTooltipContent cursor={false} labelFormatter={(time) => dayjs(time).format(MEDIUM_DATE_TIME_FORMAT)} />} />
            {keys.length > 2 ? (
              <ChartLegend
                content={<ChartLegendContent />}
                layout="vertical"
                verticalAlign="middle"
                align="right"
                onClick={({dataKey}) => {
                  if (!dataKey) return;
                  setClickedLines(clickedLines.includes(dataKey) ? clickedLines.filter((line) => line !== dataKey) : [...clickedLines, dataKey])}
                }
                onMouseEnter={({dataKey}) => {
                  if (!dataKey) return;
                  setHoveredLine(dataKey);
                }}
                onMouseLeave={({dataKey}) => {
                  if (!dataKey) return;
                  setHoveredLine(null);
                }}
              />
            ) : null}
          </LineChartRecharts>
        </ChartContainer>
      </CardContent>
      <div className="absolute bottom-3 right-4 text-gray-300 dark:text-gray-700 text-xs">vatsim-visualized.com</div>
    </Card>
  );
};

export default LineChart;