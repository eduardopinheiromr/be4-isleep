import { getLocalValue, setLocalValue } from "./asyncStorageManager";
import { getCalendarName, getDaysInMonthUTC } from "./calendar";

export const getCurrentCalendar = async (): Promise<TCalendar> => {
  const { month, name, now, year } = getCalendarName();

  const localCalendar = await getLocalValue(name);

  if (localCalendar) {
    return localCalendar;
  }

  const calendar = getDaysInMonthUTC(now.getMonth(), now.getFullYear());

  const currentCalendar = {
    year,
    month,
    days: calendar.map(day => ({
      day,
      history: {
        missions: [],
        about: "",
      },
    })),
  };

  await setLocalValue(`calendar-${year}-${month}`, currentCalendar);
  return currentCalendar;
};
