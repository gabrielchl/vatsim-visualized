import { VatsimDataFeed, VatsimDataFeedOriginal } from "@/app/types"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { FC } from "react";
import { Combobox } from "../combobox";
import { notEmpty } from "@/utils";
import { FilterKey, Filters as FiltersType } from "./types";
import { designatorToEngineCount, designatorToEngineType, designatorToManufacturer, designatorToWakeTurbulenceCategory } from "@/consts/aircraft-type-designators";
import { locationCodeToContinent, locationCodeToCountryName1, locationCodeToCountryName2, locationCodeToCountryName3 } from "@/consts/locations";
import { flightRuleMapping } from "@/app/live-stats/components/plan-flight-rule";

type FilterDefinition = {label: string, pilotFilterFunction: (pilot: VatsimDataFeedOriginal['pilots'][0], vatsimData: VatsimDataFeedOriginal) => string | undefined};


export const filterDefinitions: Record<FilterKey, FilterDefinition> = {
  aircraftType: {
    label: 'Aircraft type',
    pilotFilterFunction: (pilot) => pilot.flight_plan?.aircraft_short,
  },
  aircraftManufacturer: {
    label: 'Aircraft manufacturer',
    pilotFilterFunction: (pilot) => designatorToManufacturer[pilot.flight_plan?.aircraft_short || ''],
  },
  aircraftEngineType: {
    label: 'Aircraft engine type',
    pilotFilterFunction: (pilot) => designatorToEngineType[pilot.flight_plan?.aircraft_short || ''],
  },
  aircraftEngineCount: {
    label: 'Aircraft engine count',
    pilotFilterFunction: (pilot) => designatorToEngineCount[pilot.flight_plan?.aircraft_short || ''],
  },
  aircraftWakeTurbulenceCategory: {
    label: 'Aircraft wake turbulence category',
    pilotFilterFunction: (pilot) => designatorToWakeTurbulenceCategory[pilot.flight_plan?.aircraft_short || ''],
  },
  pilotHomeAirport: {
    label: 'Pilot home airport',
    pilotFilterFunction: (pilot) => {
      const code = pilot.name.split(' ').at(-1);
      return code && code.length === 4 && code.toUpperCase() === code ? code : undefined;
    },
  },
  pilotHomeAirportCountry: {
    label: 'Pilot home country / region',
    pilotFilterFunction: (pilot) => {
      let code = pilot.name.split(' ').at(-1);
      code = code && code.length === 4 && code.toUpperCase() === code ? code : undefined;

      if (!code || code === 'ZZZZ') {
        return undefined;
      }

      return locationCodeToCountryName1[code.slice(0, 1)] || locationCodeToCountryName2[code.slice(0, 2)] || locationCodeToCountryName3[code.slice(0, 1)];
    }
  },
  pilotHomeAirportContinent: {
    label: 'Pilot home continent',
    pilotFilterFunction: (pilot) => {
      let code = pilot.name.split(' ').at(-1);
      code = code && code.length === 4 && code.toUpperCase() === code ? code : undefined;

      if (!code || code === 'ZZZZ') {
        return undefined;
      }

      return locationCodeToContinent[code.slice(0, 1)] || 'Unknown';
    },
  },
  pilotRating: {
    label: 'Pilot rating',
    pilotFilterFunction: (pilot, vatsimData) => vatsimData.pilot_ratings.find((rating) => rating.id === pilot.pilot_rating)?.short_name,
  },
  planFlightRule: {
    label: 'Flight rule',
    pilotFilterFunction: (pilot) => flightRuleMapping[pilot.flight_plan?.flight_rules || ''],
  },
  planRoute: {
    label: 'Route',
    pilotFilterFunction: (pilot) => pilot.flight_plan?.departure && pilot.flight_plan?.arrival ? `${pilot.flight_plan?.departure}-${pilot.flight_plan?.arrival}` : undefined,
  },
  planDepartureAirport: {
    label: 'Departure airport',
    pilotFilterFunction: (pilot) => pilot.flight_plan?.departure,
  },
  planArrivalAirport: {
    label: 'Arrival airport',
    pilotFilterFunction: (pilot) => pilot.flight_plan?.arrival,
  },
};

interface Props {
  vatsimData: VatsimDataFeed;
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
}

export const Filters: FC<Props> = ({vatsimData, filters, setFilters}) => (
  <div className="flex flex-row flex-wrap gap-4 items-center">
    {Object.entries(filters).map(([key, values]) => (
      <div className="flex flex-row gap-1 items-center" key={key}>
        <span className="text-sm">{filterDefinitions[key as FilterKey].label}</span>
        <div className="flex flex-row gap-0.5 items-center">
          <Combobox options={[...new Set(vatsimData.pilots.map((pilot) => pilot.custom[key as FilterKey]))].filter(notEmpty)} values={values as string[]} setValues={(newValues) => {setFilters({...filters, [key]: newValues})}} />
          <Button variant="ghost" size="icon" onClick={() => setFilters(Object.fromEntries(Object.entries(filters).filter(([k]) => k !== key)))} className="size-6"><X /></Button>
        </div>
      </div>
    ))}
    <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="outline" size="sm"><Plus />Add filter</Button></DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {Object.entries(filterDefinitions).map(([key, filterDefinition]) => (
          <DropdownMenuItem key={key} onSelect={(() => setFilters({...filters, [key]: []}))} disabled={!!filters[key as FilterKey]} className="cursor-pointer">{filterDefinition.label}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);