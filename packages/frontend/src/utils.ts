import { VatsimDataFeed } from "./app/types";
import { filterDefinitions } from "./components/filters/index";
import { Filters, FilterKey } from "./components/filters/types";

export const notEmpty = <TValue>(value: TValue | null | undefined): value is TValue => {
  return value !== null && value !== undefined;
};

export const filterVatsimData = (vatsimData: VatsimDataFeed, filters: Filters) => ({
  ...vatsimData,
  pilots: vatsimData.pilots.filter((pilot) => filterPilot(vatsimData, pilot, filters)),
});

export const filterPilot = (vatsimData: VatsimDataFeed, pilot: VatsimDataFeed['pilots'][number], filters: Filters) => {
  return Object.entries(filters).every(([key, values]) => {
    if (values.length === 0) return true;
    const filterDefinition = filterDefinitions[key as FilterKey];
    if (!filterDefinition) return true;
    const pilotValue = filterDefinition.pilotFilterFunction(pilot, vatsimData);
    return pilotValue && values.includes(pilotValue);
  });
}
