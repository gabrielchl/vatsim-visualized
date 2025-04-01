"use client";
import { useVatsimData } from "@/hooks/vatsim-data";
import AircraftType from "./components/aircraft-type";
import PilotHomeAirport from "./components/pilot-home-airport";
import AircraftManufacturer from "./components/aircraft-manufacturer";
import AircraftEngineType from "./components/aircraft-engine-type";
import AircraftEngineCount from "./components/aircraft-engine-count";
import AircraftWakeTurbulenceCategory from "./components/aircraft-wake-turbulence-category";
import PilotHomeAirportCountry from "./components/pilot-home-airport-country";
import PilotHomeAirportContinent from "./components/pilot-home-airport-continent";
import RatingPilot from "./components/rating-pilot";
import RatingController from "./components/rating-controller";
import PlanFlightRules from "./components/plan-flight-rules";
import PlanDepartureAirport from "./components/plan-departure-airport";
import PlanArrivalAirport from "./components/plan-arrival-airport";
import PlanRoute from "./components/plan-route";
import PlanFlightDistance from "./components/plan-flight-distance";

export const LiveStats = () => {
  const rawData = useVatsimData();

  if (!rawData) {
    return null;
  }

  return (
    <>
      <h2 className="px-6 pt-4 text-lg">Aircraft</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] py-2 px-6 gap-2">
        <AircraftType rawData={rawData} />
        <AircraftManufacturer rawData={rawData} />
        <AircraftEngineType rawData={rawData} />
        <AircraftEngineCount rawData={rawData} />
        <AircraftWakeTurbulenceCategory rawData={rawData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Pilots</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] py-2 px-6 gap-2">
        <PilotHomeAirport rawData={rawData} />
        <PilotHomeAirportCountry rawData={rawData} />
        <PilotHomeAirportContinent rawData={rawData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Ratings</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] py-2 px-6 gap-2">
        <RatingPilot rawData={rawData} />
        <RatingController rawData={rawData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Flight plan</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(600px,1fr))] py-2 px-6 gap-2">
        <PlanFlightRules rawData={rawData} />
        <PlanRoute rawData={rawData} />
        <PlanDepartureAirport rawData={rawData} />
        <PlanArrivalAirport rawData={rawData} />
        <PlanFlightDistance rawData={rawData} />
      </div>
    </>
  )
};

export default LiveStats;