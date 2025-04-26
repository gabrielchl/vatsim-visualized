"use client";
import { FC, PropsWithChildren, useEffect, useState, createContext } from "react";

export const SettingsContext = createContext<{
  timezone?: 'utc' | 'local';
  setTimezone?: (timezone: 'utc' | 'local') => void;
  mapShowCallsign?: boolean;
  setMapShowCallsign?: (mapShowCallsign: boolean) => void;
}>({});

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [timezone, setTimezone] = useState<'utc' | 'local'>('local');
  const [mapShowCallsign, setMapShowCallsign] = useState<boolean>(true);
  
  useEffect(() => {
    const storedTimezone = localStorage.getItem('timezone');
    if (storedTimezone === 'utc' || storedTimezone === 'local') {
      setTimezone(storedTimezone);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timezone', timezone);
  }, [timezone]);

  useEffect(() => {
    const storedMapShowCallsign = localStorage.getItem('mapShowCallsign');
    if (storedMapShowCallsign === 'true' || storedMapShowCallsign === 'false') {
      setMapShowCallsign(storedMapShowCallsign === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mapShowCallsign', String(mapShowCallsign));
  }, [mapShowCallsign]);

  return (
    <SettingsContext.Provider value={{ timezone, setTimezone, mapShowCallsign, setMapShowCallsign }}>
      {children}
    </SettingsContext.Provider>
  );
};