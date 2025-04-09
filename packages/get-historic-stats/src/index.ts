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

type Row = {
	id: string;
	timestamp: number;
	type: string;
	details: string;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const origin = request.headers.get('Origin');

		if (!origin) {
			return Response.json({error: 'missing origin'}, {status: 403});
		}

		const url = new URL(origin);
		const hostname = url.hostname;

		if (hostname !== 'vatsim-visualized.com' && hostname !== 'localhost') {
			return Response.json({error: 'invalid origin'}, {status: 403});
		}

		const timeNow = Date.now();
		const timeThen = timeNow - 1000 * 60 * 60 * 24 * 7; // one week ago

		const statement = env.STATS.prepare("SELECT * FROM stats WHERE timestamp > ? ORDER BY timestamp ASC").bind(timeThen);
		const result = await statement.run<Row>();

		if (!result.success) {
			return Response.json({error: 'failed to run query'}, {status: 500})
		}

		const grouped = result.results.reduce((prev, row) => {
			prev[row.type] = [...(prev[row.type] || []), {timestamp: row.timestamp, details: row.details}];
			return prev;
		}, {} as Record<string, {timestamp: number, details: string}[]>)

		const response = Response.json(grouped);
		response.headers.set('Access-Control-Allow-Origin', origin);
		return response;
	},
} satisfies ExportedHandler<Env>;
