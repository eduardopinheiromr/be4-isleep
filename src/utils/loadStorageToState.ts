import { useCalendarStore } from "../stores/calendar";
import { useMissionStore } from "../stores/mission";
import { useUserStore } from "../stores/user";
import { getLocalValue } from "./asyncStorageManager";
import { getCalendarName } from "./calendar";

export const loadStorageToState = async () => {
  const { setMissions } = useMissionStore.getState();
  const { setUser } = useUserStore.getState();
  const { setCalendar } = useCalendarStore.getState();
  const { name } = getCalendarName();

  const missions = await getLocalValue("missions");
  const user = await getLocalValue("user");
  const calendar = await getLocalValue(name);
  if (missions) {
    setMissions(missions);
  }
  if (user) {
    setUser(user);
  }
  if (calendar) {
    setCalendar(calendar);
  }
};
