"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useContext } from "react";
import { SettingsContext } from "@/contexts/settings-context";

export const SettingsDialog = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const { timezone, setTimezone } = useContext(SettingsContext);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon"><Settings /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>
            Your preferences will be saved in your browser and automatically applied across the site.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between gap-2">
            Color theme
            <ToggleGroup type="single" value={theme} onValueChange={setTheme}>
              <ToggleGroupItem value="light">Light</ToggleGroupItem>
              <ToggleGroupItem value="system">System{systemTheme ? ` (${systemTheme})` : ''}</ToggleGroupItem>
              <ToggleGroupItem value="dark">Dark</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            Timezone
            <ToggleGroup type="single" value={timezone} onValueChange={setTimezone}>
              <ToggleGroupItem value="utc">UTC</ToggleGroupItem>
              <ToggleGroupItem value="local"><span>Local time</span></ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};