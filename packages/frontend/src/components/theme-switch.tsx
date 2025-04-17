"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>{resolvedTheme === 'light' ? <Moon /> : <Sun />}</Button>
  );
};