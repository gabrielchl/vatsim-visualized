"use client";
import { FC, PropsWithChildren, useEffect, useState, createContext } from "react";

export const SettingsContext = createContext<{
  timezone?: 'utc' | 'local';
  setTimezone?: (timezone: 'utc' | 'local') => void;
}>({});

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [timezone, setTimezone] = useState<'utc' | 'local'>('local');
  
  useEffect(() => {
    const storedTimezone = localStorage.getItem('timezone');
    if (storedTimezone === 'utc' || storedTimezone === 'local') {
      setTimezone(storedTimezone);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timezone', timezone);
  }, [timezone]);

  return (
    <SettingsContext.Provider value={{ timezone, setTimezone }}>
      {children}
    </SettingsContext.Provider>
  );
};