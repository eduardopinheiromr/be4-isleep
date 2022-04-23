import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { getCurrentCalendar } from "../../utils/getCurrentCalendar";
import { styles } from "./styles";

export default function PresenceCalendar() {
  const { now, calendar, currentMonth, monthString } = getCurrentCalendar();

  const [selectedDay, setSelectedDay] = useState(now);

  const handlePressDay = (day: Date) => {
    setSelectedDay(day);
    console.log(day);
  };

  return (
    <>
      <View style={styles.month}>
        <Text>{monthString}</Text>
      </View>
      <View style={styles.weekGrid}>
        {calendar.slice(0, 7).map((day, index) => (
          <Text key={index} style={styles.weekDay}>
            {day.toLocaleString("default", { weekday: "short" })}
          </Text>
        ))}
      </View>
      <View style={styles.weekGrid}>
        {calendar.map((day, index) => {
          return (
            <Pressable
              key={index}
              style={styles.day}
              onPress={() => handlePressDay(day)}
            >
              <Text
                style={
                  day.getDate() === selectedDay.getDate()
                    ? styles.currentDay
                    : undefined
                }
              >
                {day.toLocaleDateString().split("/")[0]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </>
  );
}
