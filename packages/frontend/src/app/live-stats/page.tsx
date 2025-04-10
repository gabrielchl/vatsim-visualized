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

const LiveStats = () => {
  const rawData = useVatsimData();

  if (!rawData) {
    return null;
  }

  const gridClasses = 'grid grid-cols-1 @min-[650px]:grid-cols-[repeat(auto-fill,minmax(600px,1fr))] py-2 px-6 gap-2';

  return (
    <div className="@container">
      <h1 className="px-6 pt-2 text-2xl">Live Stats</h1>
      <p className="px-6">The data on this page automatically refreshes every 5 seconds.</p>
      <p className="px-6">Viewing on desktop is encouraged given the density of the data.</p>
      <h2 className="px-6 pt-4 text-lg">Aircraft</h2>
      <div className={gridClasses}>
        <AircraftType rawData={rawData} />
        <AircraftManufacturer rawData={rawData} />
        <AircraftEngineType rawData={rawData} />
        <AircraftEngineCount rawData={rawData} />
        <AircraftWakeTurbulenceCategory rawData={rawData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Pilots</h2>
      <div className={gridClasses}>
        <PilotHomeAirport rawData={rawData} />
        <PilotHomeAirportCountry rawData={rawData} />
        <PilotHomeAirportContinent rawData={rawData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Ratings</h2>
      <div className={gridClasses}>
        <RatingPilot rawData={rawData} />
        <RatingController rawData={rawData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Flight plan</h2>
      <div className={gridClasses}>
        <PlanFlightRules rawData={rawData} />
        <PlanRoute rawData={rawData} />
        <PlanDepartureAirport rawData={rawData} />
        <PlanArrivalAirport rawData={rawData} />
        <PlanFlightDistance rawData={rawData} />
      </div>
    </div>
  )
};

export default LiveStats;