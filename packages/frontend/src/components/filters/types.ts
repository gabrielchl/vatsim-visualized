export type FilterKey = 'aircraftType' | 'aircraftManufacturer' | 'aircraftEngineType' | 'aircraftEngineCount' | 'aircraftWakeTurbulenceCategory' | 'pilotHomeAirport' | 'pilotHomeAirportCountry' | 'pilotHomeAirportContinent' | 'pilotRating' | 'planFlightRule' | 'planRoute' | 'planDepartureAirport' | 'planArrivalAirport';

export type Filters = Partial<Record<FilterKey, string[]>>;
