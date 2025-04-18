"use client";
import { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  count: number;
  title: string;
  description: string;
}

export const Counter: FC<Props> = ({count, title, description}) => {
  return (
    <Card className="flex flex-col relative shadow-none max-sm:border-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 px-0 pb-0 flex items-center justify-center text-5xl my-6">
        {Intl.NumberFormat().format(count)}
      </CardContent>
      <div className="absolute bottom-3 right-4 text-gray-300 dark:text-gray-700 text-xs">vatsim-visualized.com</div>
    </Card>
  );
};

export default Counter;