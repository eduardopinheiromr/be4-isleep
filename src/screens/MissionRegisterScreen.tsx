import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import MissionRow from "../components/MissionRow";
import { styles } from "../components/shared/styles";
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
      <Avatar />
      <Text style={styles.centeredText}>Missões diárias registradas</Text>
      {missions.map(mission => (
        <MissionRow key={mission.name} mission={mission} />
      ))}
      <Button onPress={() => navigation.navigate("NewMissionModal")}>
        Adicionar nova missão
      </Button>
    </View>
  );
}
