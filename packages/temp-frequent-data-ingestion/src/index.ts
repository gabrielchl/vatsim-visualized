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
	},
} satisfies ExportedHandler<Env>;
