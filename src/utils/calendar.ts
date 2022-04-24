import { formatMonthName } from "./dateFormatters";

export function getDaysInMonthUTC(month: number, year: number) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

export function getCalendarName() {
  const now = new Date();
  const month = formatMonthName(now);
  const year = now.getFullYear();

  return { now, month, year, name: `calendar-${year}-${month}` };
}
