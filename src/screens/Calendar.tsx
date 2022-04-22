import React, { useCallback, useMemo, useState } from "react";
import { Text } from "react-native";
import { Calendar, CalendarProps } from "react-native-calendars";

const INITIAL_DATE = "2020-02-02";

export const CalendarScreen = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);

  const onDayPress: CalendarProps["onDayPress"] = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "orange",
        selectedTextColor: "red",
      },
    };
  }, [selected]);

  return (
    <>
      <Text>Calendar with selectable date</Text>
      <Calendar
        enableSwipeMonths
        current={INITIAL_DATE}
        onDayPress={onDayPress}
        markedDates={marked}
      />
    </>
  );
};
