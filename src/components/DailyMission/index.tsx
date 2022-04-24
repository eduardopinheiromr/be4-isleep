import React from "react";
import { Text, View } from "react-native";
import { useMissionStore } from "../../stores/mission";
import Checkbox from "../Checkbox";
import { styles } from "./styles";

type Props = {
  mission: TMission;
};

export default function DailyMission({ mission }: Props) {
  const { updateCalendar } = useMissionStore();
  return (
    <View style={styles.container}>
      <Checkbox
        isChecked={mission.completed ?? false}
        onChange={event => {
          console.log({ event });
          updateCalendar({ ...mission, completed: event.value });
        }}
      />
      <Text style={styles.name}>{mission.name}</Text>
    </View>
  );
}
