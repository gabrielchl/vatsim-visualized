"use client";
import { useVatsimData } from "@/hooks/vatsim-data";
import AircraftType from "./components/aircraft-type";
import { HomeAirport } from "./components/home-airport";

export const LiveStats = () => {
  const rawData = useVatsimData();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] py-2 px-6 gap-2">
      <AircraftType rawData={rawData} />
      <HomeAirport rawData={rawData} />
    </div>
  )
};

export default LiveStats;