# VATSIM Visualized

![](packages/frontend/public/logo.png)

A website to visualize VATSIM traffic, live statistics and historical statistics

## Structure

- `frontend`: the frontend, nextjs, hosted on cloudflare pages (for now)
- `data-ingestion`: cloudflare worker script, triggered every 30 minutes, saves a copy of the vatsim data to a R2 bucket, then calculates some stats to save in a D1 database
- `get-historic-stats`: api endpoint to get the historic stats from the D1 database
- `scripts`: some locally-run utility scripts