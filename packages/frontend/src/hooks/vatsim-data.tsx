"use client";
import { VatsimDataFeed } from "@/app/types";
import { useEffect, useState } from "react";

export const useVatsimData = () => {
  const [rawData, setRawData] = useState<VatsimDataFeed | undefined>();

  useEffect(() => {
    const updateData = async () => {
      const fetched = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
      const decoded = await fetched.json();
      setRawData(decoded);
    };
    updateData();
    const timeout = setInterval(updateData, 16000);
    return () => clearInterval(timeout);
  }, []);

  return rawData;
};