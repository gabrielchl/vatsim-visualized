"use client";
import { FC } from "react";
import { VatsimDataFeed } from "../../types";
import PieChart from "@/components/charts/pie-chart";
import { locationCodeToCountryName1, locationCodeToCountryName2, locationCodeToCountryName3 } from "@/consts/locations";

interface Props {
  rawData: VatsimDataFeed;
}

export const PilotHomeAirportCountry: FC<Props> = ({rawData}) => {
  const types = rawData.pilots.map(
    (pilot) => {
      let code = pilot.name.split(' ').at(-1);
      code = code && code.length === 4 && code.toUpperCase() === code ? code : undefined;

      if (!code || code === 'ZZZZ') {
        return undefined;
      }

      return locationCodeToCountryName1[code.slice(0, 1)] || locationCodeToCountryName2[code.slice(0, 2)] || locationCodeToCountryName3[code.slice(0, 1)] || 'Unknown';
    }
  ).filter((el) => el) as string[];
  
    return (
      <PieChart types={types} title="Pilot home country / region" description="Reported by pilots when connecting to the network" topNToShow={9} />
    );
};

export default PilotHomeAirportCountry;