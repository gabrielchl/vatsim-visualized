"use client";
import { VatsimDataFeed, VatsimDataFeedOriginal } from "@/app/types";
import { filterDefinitions } from "@/components/filters/index";
import { FilterKey } from "@/components/filters/types";
import { useEffect, useState } from "react";

const addCustomData = (data: VatsimDataFeedOriginal): VatsimDataFeed => {
  return {
    ...data,
    pilots: data.pilots.map((pilot) => ({
      ...pilot,
      custom: Object.fromEntries(Object.entries(filterDefinitions).map(([key, filterDefinition]) => [key, filterDefinition.pilotFilterFunction(pilot, data)])) as Record<FilterKey, string | undefined>,
    }))
  };
};

export const useVatsimData = () => {
  const [liveData, setLiveData] = useState<VatsimDataFeed | undefined>();
  const [historicDataKeys, setHistoricDataKeys] = useState<string[]>([]);
  const [selectedHistoricDataKey, setSelectedHistoricDataKey] = useState<string | undefined>(undefined);
  const [historicData, setHistoricData] = useState<VatsimDataFeed | undefined>(undefined);

  useEffect(() => {
    const updateData = async () => {
      const fetched = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
      const data = await fetched.json() as VatsimDataFeedOriginal;
      setLiveData(addCustomData(data));
    };
    updateData();
    const timeout = setInterval(updateData, 16000);
    return () => clearInterval(timeout);
  }, []);
  
  useEffect(() => {
    const fetchHistoricDataKeys = async () => {
      const response = await fetch('https://api.vatsim-visualized.com/get-historic-data');
      const data = await response.json();
      setHistoricDataKeys(data);
    };
    fetchHistoricDataKeys();
  }, []);

  useEffect(() => {
    if (!selectedHistoricDataKey) {
      return;
    }

    const fetchHistoricData = async () => {
      const response = await fetch(`https://api.vatsim-visualized.com/get-historic-data?timestamp=${selectedHistoricDataKey}`);
      const data = await response.json();
      setHistoricData(addCustomData(data));
    };
    fetchHistoricData();
  }, [selectedHistoricDataKey]);

  const finalData = selectedHistoricDataKey && historicData ? historicData : liveData;

  return {data: finalData, isHistoricData: !!(selectedHistoricDataKey && historicData), historicDataKeys, selectedHistoricDataKey, setSelectedHistoricDataKey};
};