import create from "zustand";
import { getLocalValue, setLocalValue } from "../utils/asyncStorageManager";
import { getCalendarName } from "../utils/calendar";

type MissionStore = {
  missions: TMission[];
  setMissions: (missions: TMission[]) => void;
  updateCalendar: (missions: TMission) => void;
};

export const useMissionStore = create<MissionStore>(set => ({
  missions: [],
  setMissions: async (missions: TMission[]) => {
    await setLocalValue("missions", missions);
    set(state => ({ ...state, missions }));
  },
  updateCalendar: async (mission: TMission) => {
    const { month, name, now, year } = getCalendarName();
    const localCalendar = (await getLocalValue(name)) as TCalendar;

    const calendarUpdated = localCalendar.days.map(({ day, history }) => {
      if (new Date(day).getDate() === now.getDate()) {
        return {
          day,
          history: { missions: [mission] },
        };
      }
      return { day, history };
    });
    await setLocalValue(name, calendarUpdated);
  },
}));
