import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import DailyMission from "../components/DailyMission";
import { styles } from "../components/shared/styles";
import { useMissionStore } from "../stores/mission";
import { formatDay } from "../utils/dateFormatters";

export default function SelectedDayModal() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "SelectedDayModal">>();
  const { missions } = useMissionStore();
  const { day, history } = route.params;
  const isToday = new Date(day).getDate() === new Date().getDate();
  const selectedDay = formatDay(day);

  // TODO - Adicionar as missões diárias no history
  // TODO - Adicionar uma descrição do dia opcional no history
  // TODO - Adicionar a possibilidade de ter missões exclusivas do dia no history
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Dia {selectedDay}</Text>
      <Text>
        {history?.missions?.length === 0
          ? `Você ainda não registrou nada para ${
              isToday ? "hoje" : `o dia ${selectedDay}`
            }`
          : ""}
      </Text>
      {missions &&
        missions.map(mission => (
          <DailyMission
            key={mission.name}
            day={{ day, history }}
            mission={mission}
          />
        ))}
      <Button onPress={() => navigation.goBack()} title="Voltar" />
    </View>
  );
}
