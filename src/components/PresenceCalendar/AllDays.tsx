import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { formatDay } from "./../../utils/dateFormatters";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  calendar: TCalendar;
};

type ModalScreenProp = StackNavigationProp<
  RootStackParamList,
  "SelectedDayModal"
>;

export default function AllDays({ calendar }: Props) {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const navigation = useNavigation<ModalScreenProp>();

  const handlePressDay = ({ day, history }: TDay) => {
    setSelectedDay(day);
    navigation.navigate("SelectedDayModal", { day, history });
    console.log(day);
  };

  return (
    <View style={styles.weekGrid}>
      {calendar.days.map(({ day, history }, index) => {
        return (
          <Pressable
            key={index}
            style={
              new Date(day).getDate() === new Date(selectedDay).getDate()
                ? styles.currentDay
                : styles.day
            }
            onPress={() => handlePressDay({ day, history })}
          >
            <Text>{formatDay(day)}</Text>
            <View style={styles.icon}>
              {history.length === 0 ? (
                <Icon name="pluscircleo" size={30} />
              ) : (
                <Icon name="checkcircleo" />
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
