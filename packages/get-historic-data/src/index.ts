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

		const date = new Date();
		const paramsIndex = request.url.indexOf('?');
		const requestDate = new URLSearchParams(request.url.slice(paramsIndex + 1)).get('timestamp');

		if (requestDate) {
			const validTimestamp = new RegExp(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{1,7})?Z$/).test(requestDate);

			if (!validTimestamp) {
				return Response.json({error: 'invalid timestamp format'}, {status: 400});
			}

			const twoDaysAgo = new Date(date);
			twoDaysAgo.setDate(date.getDate() - 2);
			const within2Days = new Date(requestDate).getTime() > twoDaysAgo.getTime();
			
			if (!within2Days) {
				return Response.json({error: 'timestamp is more than 24 hour ago'}, {status: 400});
			}

			const object = await env.RAW_DATA.get(`${requestDate}.json`);
			const data = await object?.json();

			const response = Response.json(data);
			response.headers.set('Access-Control-Allow-Origin', origin);
			return response;
		} else {
			const yesterday = new Date(date);
			yesterday.setDate(date.getDate() - 1);

			const prefixes = [yesterday.toISOString().split('T')[0], date.toISOString().split('T')[0]];

			const results = await Promise.all(
				prefixes.map((prefix) => env.RAW_DATA.list({
					prefix,
					startAfter: yesterday.toISOString(),
				}))
			);

			const keys = results.flatMap((result) => result.objects.map((object) => object.key.replace('.json', '')));
			
			const response = Response.json(keys);
			response.headers.set('Access-Control-Allow-Origin', origin);
			return response;
		}
	},
} satisfies ExportedHandler<Env>;
