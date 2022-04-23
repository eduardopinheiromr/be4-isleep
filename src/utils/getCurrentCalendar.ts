import { getLocalValue, setLocalValue } from "./asyncStorageManager";
import { getDaysInMonthUTC } from "./calendar";
import { formatMonthName } from "./dateFormatters";

export const getCurrentCalendar = async (): Promise<TCalendar> => {
  const now = new Date();
  const month = formatMonthName(now);
  const year = now.getFullYear();

  const localCalendar = await getLocalValue(`calendar-${year}-${month}`);

  if (localCalendar) {
    return localCalendar;
  }

  const calendar = getDaysInMonthUTC(now.getMonth(), now.getFullYear());

  const currentCalendar = {
    year,
    month,
    days: calendar.map(day => ({ day, history: [] })),
  };

  await setLocalValue(`calendar-${year}-${month}`, currentCalendar);
  return currentCalendar;
};
