import { FC } from "react";
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from '@/components/ui/select';
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useDayJs } from "@/hooks/use-day-js";
import { MEDIUM_DATE_TIME_FORMAT } from "@/consts/dates";

interface Props {
  historicDataKeys: string[];
  selectedHistoricDataKey: string | undefined;
  setSelectedHistoricDataKey: (key: string | undefined) => void;
}

export const HistoricDataSelector: FC<Props> = ({historicDataKeys, selectedHistoricDataKey, setSelectedHistoricDataKey}) => {
  const isFirst = selectedHistoricDataKey === historicDataKeys[0];
  const isLast = selectedHistoricDataKey === historicDataKeys[historicDataKeys.length - 1];
  const dayjs = useDayJs();

  const onClickPrev = () => {
    if (isFirst || !selectedHistoricDataKey) {
      return;
    }
    const currentIndex = historicDataKeys.indexOf(selectedHistoricDataKey);
    setSelectedHistoricDataKey(historicDataKeys[currentIndex - 1]);
  };

  const onClickNext = () => {
    if (isLast || !selectedHistoricDataKey) {
      return;
    }
    const currentIndex = historicDataKeys.indexOf(selectedHistoricDataKey);
    setSelectedHistoricDataKey(historicDataKeys[currentIndex + 1]);
  };

  const onClickClear = () => {
    setSelectedHistoricDataKey(undefined);
  };

  return (
    <div className="flex flex-row gap-1 items-center">
      <Button variant="outline" onClick={onClickPrev} disabled={isFirst || !selectedHistoricDataKey} className="size-8"><ChevronLeft /></Button>
      <Button variant="outline" onClick={onClickNext} disabled={isLast || !selectedHistoricDataKey} className="size-8"><ChevronRight /></Button>
      <Select onValueChange={(value) => setSelectedHistoricDataKey(value)} value={selectedHistoricDataKey || ''}>
        <SelectTrigger className="w-full min-w-[175px]" size="sm">
          <SelectValue placeholder="Select historic date" />
        </SelectTrigger>
        <SelectContent>
          {historicDataKeys.map((key) => (
            <SelectItem key={key} value={key} className="py-1 cursor-pointer">
              {dayjs(key).format(MEDIUM_DATE_TIME_FORMAT)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="outline" onClick={onClickClear} disabled={!selectedHistoricDataKey} className="size-8"><X /></Button>
    </div>
  )
};