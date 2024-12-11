import { DataPoint } from "./types";

export const getDayOfWeekAverage = (data: DataPoint[]): number => {
  const today = new Date();
  const todayDayOfWeek = today.getDay();
  const sameDayData = data.filter(
    (d) => new Date(d.date).getDay() === todayDayOfWeek
  );
  return (
    sameDayData.reduce((sum, d) => sum + d.value, 0) / (sameDayData.length || 1)
  );
};

export const calculatePercentageDifference = (
  current: number,
  yesterday: number
): number => {
  return yesterday !== 0 ? ((current - yesterday) / yesterday) * 100 : 0;
};
