import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

type Props = {
  mission: TMission;
};

export default function MissionRow({ mission }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{mission.name}</Text>
      <Text style={styles.score}>Recompensa: {mission.score}pts</Text>
    </View>
  );
}
