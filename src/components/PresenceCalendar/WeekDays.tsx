import React from "react";
import { Text, View } from "react-native";
import { formatWeekDay } from "../../utils/dateFormatters";
import { styles } from "./styles";

type Props = {
  calendar: TCalendar;
};

export default function WeekDays({ calendar }: Props) {
  return (
    <View style={styles.weekGrid}>
      {calendar?.days?.slice(0, 7).map(({ day }, index) => (
        <View key={index} style={styles.weekDay}>
          <Text>{formatWeekDay(day)}</Text>
        </View>
      ))}
    </View>
  );
}
