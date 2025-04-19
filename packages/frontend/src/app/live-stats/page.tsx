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
import PlanFlightRule from "./components/plan-flight-rule";
import PlanDepartureAirport from "./components/plan-departure-airport";
import PlanArrivalAirport from "./components/plan-arrival-airport";
import PlanRoute from "./components/plan-route";
import PlanFlightDistance from "./components/plan-flight-distance";
import Counter from "@/components/counter";
import { LastUpdateIndicator } from "@/components/last-update-indicator";
import { Filters } from "@/components/filters";
import { Filters as FiltersType } from "@/components/filters/types";
import { useState } from "react";
import { filterVatsimData } from "@/utils";
import ControllerFacility from "./components/controller-facility";

const LiveStats = () => {
  const rawData = useVatsimData();
  const [filters, setFilters] = useState<FiltersType>({});

  if (!rawData) {
    return null;
  }

  const filteredData = filterVatsimData(rawData, filters);

  const gridClasses = 'grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(600px,1fr))] py-2 px-6 gap-2 max-sm:px-0';

  return (
    <main>
      <div className="px-6 pt-2 flex gap-2 flex-col md:flex-row justify-between items-start">
        <div>
          <h1 className="text-2xl">Live Stats</h1>
          <p>The data on this page automatically refreshes every 16 seconds.</p>
          <p>Viewing on desktop is encouraged given the density of the data.</p>
        </div>
        <LastUpdateIndicator rawData={filteredData} />
      </div>
      <div className="px-6 pt-2">
        <Filters vatsimData={rawData} filters={filters} setFilters={setFilters} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Aircraft</h2>
      <div className={gridClasses}>
        <AircraftType rawData={filteredData} />
        <AircraftManufacturer rawData={filteredData} />
        <AircraftEngineType rawData={filteredData} />
        <AircraftEngineCount rawData={filteredData} />
        <AircraftWakeTurbulenceCategory rawData={filteredData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Pilots</h2>
      <div className={gridClasses}>
        <Counter count={filteredData.pilots.length} title="Online pilots" description="Total number of connected pilots" />
        <PilotHomeAirport rawData={filteredData} />
        <PilotHomeAirportCountry rawData={filteredData} />
        <PilotHomeAirportContinent rawData={filteredData} />
        <PilotRating rawData={filteredData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Controllers</h2>
      <div className={gridClasses}>
        <Counter count={filteredData.controllers.length} title="Online controllers" description="Total number of connected controllers" />
        <Counter count={filteredData.controllers.filter((controller) => controller.rating > 1).length} title="Online controllers (C1 or above)" description="Total number of connected controllers (excluding inactive, suspended or observers)" />
        <ControllerRating rawData={filteredData} />
        <ControllerFacility rawData={filteredData} />
      </div>
      <h2 className="px-6 pt-4 text-lg">Flight plan</h2>
      <div className={gridClasses}>
        <PlanFlightRule rawData={filteredData} />
        <PlanRoute rawData={filteredData} />
        <PlanDepartureAirport rawData={filteredData} />
        <PlanArrivalAirport rawData={filteredData} />
        <PlanFlightDistance rawData={filteredData} />
      </div>
    </main>
  )
};

export default LiveStats;