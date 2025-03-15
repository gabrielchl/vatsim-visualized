export type VatsimDataFeed = {
    general: {
        version: number;
        update_timestamp: number;
        connected_clients: number;
        unique_users: number;
    };
    pilots: {
        cid: number;
        name: string;
        callsign: string;
        server: string;
        pilot_rating: number;
        military_rating: number;
        latitude: number;
        longitude: number;
        altitude: number;
        groundspeed: number;
        transponder: string;
        heading: number;
        qnh_i_hg: number;
        qnh_mb: number;
        flight_plan?: {
            flight_rules: 'I' | 'V';
            aircraft: string;
            aircraft_faa: string;
            aircraft_short: string;
            departure: string;
            arrival: string;
            alternate: string;
            deptime: string;
            enroute_time: string;
            fuel_time: string;
            remarks: string;
            route: string;
            revision_id: string;
            assigned_transponder: string;
        };
        logon_time: string; // TODO: confirm type
        last_updated: string; // TODO: confirm type
    }[];
    // INCOMPLETE
}