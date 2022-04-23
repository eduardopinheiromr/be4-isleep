import { getLocalValue, setLocalValue } from "./asyncStorageManager";
import uuid from "react-native-uuid";
import { useMissionStore } from "../stores/mission";

export const getMissions = async () => {
  const missions = await getLocalValue("missions");
  return missions || [];
};

export const addMission = async (mission: TMission) => {
  const { setMissions } = useMissionStore.getState();

  const newMission = {
    id: uuid.v4(),
    ...mission,
  };

  const newMissions = [...(await getMissions()), newMission];
  await setMissions(newMissions);
};
