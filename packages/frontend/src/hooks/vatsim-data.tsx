"use client";
import { VatsimDataFeed, VatsimDataFeedOriginal } from "@/app/types";
import { filterDefinitions } from "@/components/filters/index";
import { FilterKey } from "@/components/filters/types";
import { useEffect, useState } from "react";

export const useVatsimData = () => {
  const [rawData, setRawData] = useState<VatsimDataFeed | undefined>();

  useEffect(() => {
    const updateData = async () => {
      const fetched = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
      const decoded = await fetched.json() as VatsimDataFeedOriginal;

      const calculated: VatsimDataFeed = {
        ...decoded,
        pilots: decoded.pilots.map((pilot) => ({
          ...pilot,
          custom: Object.fromEntries(Object.entries(filterDefinitions).map(([key, filterDefinition]) => [key, filterDefinition.pilotFilterFunction(pilot, decoded)])) as Record<FilterKey, string | undefined>,
        }))
      }
      setRawData(calculated);
    };
    updateData();
    const timeout = setInterval(updateData, 16000);
    return () => clearInterval(timeout);
  }, []);

  return rawData;
};