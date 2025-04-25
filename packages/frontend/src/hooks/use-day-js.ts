import { SettingsContext } from "@/contexts/settings-context";
import { useContext } from "react";
import dayjs from 'dayjs';
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const useDayJs = (): (val?: dayjs.ConfigType) => dayjs.Dayjs => {
  const { timezone } = useContext(SettingsContext);
  return timezone === 'utc' ? (val) => dayjs(val).utc() : dayjs;
}