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
import PilotRating from "./components/pilot-rating";
import ControllerRating from "./components/controller-rating";
import PlanFlightRules from "./components/plan-flight-rules";
import PlanDepartureAirport from "./components/plan-departure-airport";
import PlanArrivalAirport from "./components/plan-arrival-airport";
import PlanRoute from "./components/plan-route";
import PlanFlightDistance from "./components/plan-flight-distance";
import Counter from "@/components/counter";

const LiveStats = () => {
  const rawData = useVatsimData();

  if (!rawData) {
    return null;
  }

  const gridClasses = 'grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(600px,1fr))] py-2 px-6 gap-2 max-sm:px-0';

  return (
    <>
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
        <Counter count={rawData.pilots.length} title="Online pilots" description="Total number of connected pilots" />
        <PilotHomeAirport rawData={rawData} />
        <PilotHomeAirportCountry rawData={rawData} />
        <PilotHomeAirportContinent rawData={rawData} />
        <PilotRating rawData={rawData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Controllers</h2>
      <div className={gridClasses}>
        <Counter count={rawData.controllers.length} title="Online controllers" description="Total number of connected controllers" />
        <Counter count={rawData.controllers.filter((controller) => controller.rating > 1).length} title="Online controllers (C1 or above)" description="Total number of connected controllers, excluding inactive, suspected or observers" />
        <ControllerRating rawData={rawData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Flight plan</h2>
      <div className={gridClasses}>
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