import React, { useState } from "react";
import { Text, View } from "react-native";
import { useMissionStore } from "../../stores/mission";
import Checkbox from "../Checkbox";
import { styles } from "./styles";
import { useCalendarStore } from "./../../stores/calendar";
import CheckBox from "expo-checkbox";

type Props = {
  day: TDay;
  mission: TMission;
};

export default function DailyMission({ day, mission }: Props) {
  const { updateCalendar } = useCalendarStore();

  const missionHistory = day.history.missions?.filter(
    historyMission => historyMission.name === mission.name
  );

  return (
    <View style={styles.container}>
      <CheckBox
        value={(missionHistory && missionHistory[0].completed) ?? false}
        onValueChange={value => {
          const updatedDay: TDay = {
            ...day,
            history: {
              ...day.history,
              missions: [
                ...day.history.missions,
                { ...mission, completed: value },
              ],
            },
          };
          updateCalendar(updatedDay);
        }}
      />
      <Text style={styles.name}>{mission.name}</Text>
    </View>
  );
}
