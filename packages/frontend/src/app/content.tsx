"use client";
import { mapStyle } from '@/consts/map-style';
import { useVatsimData } from '@/hooks/use-vatsim-data';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useContext, useEffect, useRef, useState } from "react";
import { isGeoJsonSource, VatsimDataFeed } from './types';
import { LastUpdateIndicator } from '@/components/last-update-indicator';
import { Filters as FiltersType } from '@/components/filters/types';
import { Filters } from '@/components/filters';
import { filterPilot } from '@/utils';
import { HistoricDataSelector } from '@/components/historic-data-selector';
import { SettingsContext } from '@/contexts/settings-context';
import { Metadata } from 'next';

const calculateMapData = (data: VatsimDataFeed | undefined, filters: FiltersType, mapShowCallsign?: boolean): GeoJSON.GeoJSON => {
  if (!data) {
    return {
      type: 'FeatureCollection',
      features: [],
    };
  }

  return {
    type: "FeatureCollection",
    features: data.pilots.map((pilot) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [pilot.longitude, pilot.latitude],
      },
      properties: {
        heading: pilot.heading,
        callsign: mapShowCallsign ? pilot.callsign : '',
        filter: filterPilot(data, pilot, filters),
      }
    })),
  }
};

export const metadata: Metadata = {
  title: 'Map',
};

const HomeContent = () => {
  const {data, isHistoricData, historicDataKeys, selectedHistoricDataKey, setSelectedHistoricDataKey} = useVatsimData();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [filters, setFilters] = useState<FiltersType>({});
  const { mapShowCallsign } = useContext(SettingsContext);

  const dataRef = useRef<VatsimDataFeed | undefined>(data); // just for the first time
  useEffect(() => {dataRef.current = data}, [data]);
  const filtersRef = useRef<FiltersType>(filters);
  useEffect(() => {filtersRef.current = filters}, [filters]);
  const mapShowCallsignRef = useRef<boolean>(mapShowCallsign);
  useEffect(() => {mapShowCallsignRef.current = mapShowCallsign}, [mapShowCallsign]);

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
        data: calculateMapData(dataRef.current, filtersRef.current, mapShowCallsignRef.current),
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
    if (!data || !map.current) {
      return;
    }

    const source = map.current.getSource("aircraft");
    if (!isGeoJsonSource(source)) {
      return;
    }
    source.setData(calculateMapData(data, filters, mapShowCallsign));
  }, [data, filters, mapShowCallsign]);

  return (
    <main className="relative">
      <div ref={mapContainer} className="w-full h-[calc(100dvh-52px-28px)] dark:[&_canvas]:invert"></div>
      <div className={"absolute top-0 right-0 p-2 bg-white dark:bg-black rounded-bl-md flex flex-col gap-1 items-end"}>
        <LastUpdateIndicator
          data={data}
          isHistoricData={isHistoricData}
        />
        <HistoricDataSelector
          historicDataKeys={historicDataKeys}
          selectedHistoricDataKey={selectedHistoricDataKey}
          setSelectedHistoricDataKey={setSelectedHistoricDataKey}
        />
      </div>
      {data ? (
        <div className="absolute top-0 left-0 p-2 bg-white dark:bg-black rounded-br-md">
          <Filters vatsimData={data} filters={filters} setFilters={setFilters} />
        </div>
      ) : null}
    </main>
  );
}

export default HomeContent;
