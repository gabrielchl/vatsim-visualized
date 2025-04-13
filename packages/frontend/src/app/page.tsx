"use client";
import { mapStyle } from '@/consts/map-style';
import { useVatsimData } from '@/hooks/vatsim-data';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef } from "react";

const Home = () => {
  const rawData = useVatsimData();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) {
      return;
    }

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [9, 48],
      zoom: 3,
      maxZoom: 18,
    });

    // disable map rotation using right click + drag
    map.current.dragRotate.disable();

    // disable map rotation using keyboard
    map.current.keyboard.disable();

    // disable map rotation using touch rotation gesture
    map.current.touchZoomRotate.disableRotation();

    map.current?.on('load', async () => {
      if (!map.current) {
        return;
      }

      const image = await map.current.loadImage(`${window.location.origin}/plane.png`);
      map.current.addImage('plane', image.data);
      map.current.addSource('aircraft',  {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });
      map.current.addLayer({
        id: 'aircraft',
        type: 'symbol',
        source: 'aircraft',
        layout: {
          'icon-allow-overlap': true,
          'icon-image': 'plane',
          'icon-size': [
            'interpolate',
            ['linear'],
            ['zoom'],
            0,
            0.15,
            18,
            0.3
          ],
          'icon-rotate': ['get', 'heading'],
          'text-field': ['get', 'callsign'],
          'text-font': ['Noto Sans Regular'],
          'text-optional': true,
          'text-anchor': 'top',
          'text-offset': [0, 1],
          'text-size': 12,
        }
      });
      // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
      map.current.on('click', 'aircraft', (e) => {
        if (!map.current) {
          return;
        }

        map.current.flyTo({
            center: (e.features?.[0]?.geometry as any).coordinates
        });
      });

      // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
      map.current.on('mouseenter', 'aircraft', () => {
        if (!map.current) {
          return;
        }

        map.current.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.current.on('mouseleave', 'aircraft', () => {
        if (!map.current) {
          return;
        }

        map.current.getCanvas().style.cursor = '';
      });
    });
  }, []);

  useEffect(() => {
    if (!rawData) {
      return;
    }

    (map.current?.getSource("aircraft") as any)?.setData({
      type: "FeatureCollection",
      features: rawData.pilots.map((pilot) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [pilot.longitude, pilot.latitude],
        },
        properties: {
          heading: pilot.heading,
          callsign: pilot.callsign,
        }
      })),
    });
  }, [rawData]);

  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <div ref={mapContainer} className="w-full h-[calc(100vh-52px-28px)]"></div>
    </main>
  );
}

export default Home;
