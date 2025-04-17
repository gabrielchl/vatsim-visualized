"use client";
import { mapStyle } from '@/consts/map-style';
import { useVatsimData } from '@/hooks/vatsim-data';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef, useState } from "react";
import { isGeoJsonSource, VatsimDataFeed } from './types';
import { LastUpdateIndicator } from '@/components/last-update-indicator';
import { Filters as FiltersType } from '@/components/filters/types';
import { Filters } from '@/components/filters';
import { filterPilot } from '@/utils';

const calculateMapData = (rawData: VatsimDataFeed | undefined, filters: FiltersType): GeoJSON.GeoJSON => {
  if (!rawData) {
    return {
      type: 'FeatureCollection',
      features: [],
    };
  }

  return {
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
        filter: filterPilot(rawData, pilot, filters),
      }
    })),
  }
};

const Home = () => {
  const rawData = useVatsimData();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [filters, setFilters] = useState<FiltersType>({});

  const rawDataRef = useRef<VatsimDataFeed | undefined>(rawData); // just for the first time
  useEffect(() => {rawDataRef.current = rawData}, [rawData]);
  const filtersRef = useRef<FiltersType>(filters);
  useEffect(() => {filtersRef.current = filters}, [filters]);

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
      canvasContextAttributes: {
        preserveDrawingBuffer: true,
      },
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

      const planeImage = await map.current.loadImage(`${window.location.origin}/plane.png`);
      map.current.addImage('plane', planeImage.data);
      const planeFadedImage = await map.current.loadImage(`${window.location.origin}/plane-faded.png`);
      map.current.addImage('plane-faded', planeFadedImage.data);
      map.current.addSource('aircraft',  {
        type: 'geojson',
        data: calculateMapData(rawDataRef.current, filtersRef.current),
      });
      map.current.addLayer({
        id: 'aircraft',
        type: 'symbol',
        source: 'aircraft',
        layout: {
          'icon-allow-overlap': true,
          'symbol-sort-key': ['case', ['get', 'filter'], 1, 0],
          'icon-image': ['case', ['get', 'filter'], 'plane', 'plane-faded'],
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
          'text-field': ['case', ['get', 'filter'], ['get', 'callsign'], ' '],
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

        if (e.features?.[0]?.geometry?.type === 'Point') {
          map.current.flyTo({
            center: e.features?.[0]?.geometry.coordinates as [number, number],
          });
        }
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
    if (!rawData || !map.current) {
      return;
    }

    const source = map.current.getSource("aircraft");
    if (!isGeoJsonSource(source)) {
      return;
    }
    source.setData(calculateMapData(rawData, filters));
    // console.log(map.current.getCanvas().toDataURL());
  }, [rawData, filters]);

  return (
    <main className="relative">
      <div ref={mapContainer} className="w-full h-[calc(100dvh-52px-28px)] dark:[&_canvas]:invert"></div>
      <div className={"absolute top-0 right-0 py-1 px-2 bg-white dark:bg-black rounded-bl-md"}>
        <LastUpdateIndicator rawData={rawData} />
      </div>
      {rawData ? (
        <div className="absolute top-0 left-0 p-2 bg-white dark:bg-black rounded-br-md">
          <Filters vatsimData={rawData} filters={filters} setFilters={setFilters} />
        </div>
      ) : null}
    </main>
  );
}

export default Home;
