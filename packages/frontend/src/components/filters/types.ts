export type FilterKey = 'aircraftType' | 'aircraftManufacturer' | 'aircraftEngineType' | 'aircraftEngineCount' | 'pilotHomeAirport' | 'pilotHomeAirportCountry' | 'pilotHomeAirportContinent' | 'pilotRating' | 'planFlightRule' | 'planRoute' | 'planDepartureAirport' | 'planArrivalAirport';

export type Filters = Partial<Record<FilterKey, string[]>>;
