/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

type VatsimDataFeed = {
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
	controllers: {
		cid: number;
		name: string;
		callsign: string;
		frequency: string;
		facility: number;
		rating: number;
		server: string;
		visual_range: number;
		text_atis: string[];
		last_updated: string; // TODO: confirm type
		logon_time: string; // TODO: confrim type
	}[];
	ratings: {
		id: number;
		short: string;
		long: string;
	}[];
	pilot_ratings: {
		id: number;
		short_name: string;
		long_name: string;
	}[];
	// INCOMPLETE
}

export default {
	async scheduled(controller, env, ctx) {
		const req = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
		const data = await req.json() as VatsimDataFeed;
		const timestamp = data.general.update_timestamp;
		const numeralTimestamp = (new Date(timestamp)).getTime();

		if (!(numeralTimestamp > 0)) {
			throw Error(`invalid timesamp: ${timestamp}`)
		}

		await env.RAW_DATA.put(`${timestamp}.json`, JSON.stringify(data), {
			httpMetadata: {
				  contentType: 'application/json',
			},
		});

		const pilotCount = data.pilots.length;
		const controllerCount = data.controllers.filter((controller) => controller.rating > 1).length; // -1 = inactive, 0 = suspended, 1 = observer

		const aircraftTypes = data.pilots.reduce((prev, pilot) => {
			const type = pilot.flight_plan?.aircraft_short || 'Unknown';
			return {...prev, [type]: (prev[type] || 0) + 1};
		}, {} as Record<string, number>);
		const topAircraftTypes = Object.fromEntries(Object.entries(aircraftTypes).sort((a, b) => b[1] - a[1]).slice(0, 10));
		
		const stats = [
			{
				type: 'pilot_count',
				details: pilotCount.toString(),
			},
			{
				type: 'controller_count',
				details: controllerCount.toString(),
			},
			{
				type: 'top_aircraft_types',
				details: JSON.stringify(topAircraftTypes),
			},
		];
		const statement = env.STATS.prepare("INSERT INTO stats (id, timestamp, type, details) VALUES (?, ?, ?, ?)");
		const batchResult = await env.STATS.batch(stats.map((stat) => statement.bind(`${numeralTimestamp}_${stat.type}`, numeralTimestamp, stat.type, stat.details)));

		if (batchResult.some((result) => !result.success)) {
			throw Error(`failed to insert stats: ${JSON.stringify(batchResult)}`);
		}
	},
} satisfies ExportedHandler<Env>;
