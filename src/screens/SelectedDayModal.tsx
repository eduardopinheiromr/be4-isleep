import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { formatDay } from "../utils/dateFormatters";

export default function SelectedDayModal() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "SelectedDayModal">>();

  const { day, history } = route.params;
  const isToday = new Date(day).getDate() === new Date().getDate();
  const selectedDay = formatDay(day);
  console.log(route.params);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Dia {selectedDay}</Text>
      <Text>
        {history.length === 0
          ? `Você ainda não registrou nada para ${
              isToday ? "hoje" : `o dia ${selectedDay}`
            }`
          : ""}
      </Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
