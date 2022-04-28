import create from "zustand";
import { getLocalValue, setLocalValue } from "../utils/asyncStorageManager";
import { getCalendarName } from "../utils/calendar";

type CalendarStore = {
  calendar?: TCalendar;
  setCalendar: (calendar: TCalendar) => void;
  updateCalendar: (updatedDay: TDay) => void;
};

export const useCalendarStore = create<CalendarStore>(set => ({
  calendar: undefined,
  setCalendar: async (calendar: TCalendar) => {
    await setLocalValue("calendar", calendar);
    set(state => ({ ...state, calendar }));
  },
  updateCalendar: async (updatedDay: TDay) => {
    const { month, name, now, year } = getCalendarName();
    const localCalendar = (await getLocalValue(name)) as TCalendar;

    console.log({ name });
    const calendarUpdated = {
      year,
      month,
      days: localCalendar.days.map(({ day, history }) => {
        if (new Date(day).getDate() === new Date(updatedDay.day).getDate()) {
          return {
            ...updatedDay,
          };
        }
        return { day, history };
      }),
    };
    await setLocalValue(name, calendarUpdated);
    set(state => ({ ...state, calendar: calendarUpdated }));
  },
}));
