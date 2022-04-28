import create from "zustand";
import { getLocalValue, setLocalValue } from "../utils/asyncStorageManager";
import { getCalendarName } from "../utils/calendar";

type MissionStore = {
  missions: TMission[];
  setMissions: (missions: TMission[]) => void;
};

export const useMissionStore = create<MissionStore>(set => ({
  missions: [],
  setMissions: async (missions: TMission[]) => {
    await setLocalValue("missions", missions);
    set(state => ({ ...state, missions }));
  },
}));
