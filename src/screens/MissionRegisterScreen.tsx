import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import { useMissionStore } from "../stores/mission";
import { getMissions } from "../utils/mission";

type ModalScreenProp = StackNavigationProp<
  RootStackParamList,
  "NewMissionModal"
>;

export default function MissionRegisterScreen() {
  const { missions, setMissions } = useMissionStore();
  const navigation = useNavigation<ModalScreenProp>();

  useEffect(() => {
    getMissions().then(missions => setMissions(missions));
  }, []);

  return (
    <View>
      <Text>Missões diárias registradas</Text>
      {missions.map(mission => (
        <View key={mission.name}>
          <Text>{mission.name}</Text>
        </View>
      ))}
      <Button onPress={() => navigation.navigate("NewMissionModal")}>
        Adicionar nova missão
      </Button>
    </View>
  );
}
