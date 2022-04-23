import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  calendar: TCalendar;
};

export default function MonthDisplay({ calendar }: Props) {
  return (
    <View style={styles.monthDisplay}>
      <Text style={styles.monthString}>{calendar?.month}</Text>
    </View>
  );
}
