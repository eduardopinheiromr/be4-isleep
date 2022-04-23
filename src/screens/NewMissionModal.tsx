import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { formatDay } from "../utils/dateFormatters";
import { addMission } from "../utils/mission";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default function NewMissionModal() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, "NewMissionModal">>();

  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const handleAddMission = async () => {
    await addMission({ name, score });
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Input
        onChangeText={name => setName(name)}
        placeholder="Digite o nome da missão"
      />
      <Input
        onChangeText={score => setScore(Number(score))}
        keyboardType="numeric"
        placeholder="Quantos pontos ela rende?"
      />
      <Button onPress={handleAddMission}>Adicionar</Button>
      <Button onPress={() => navigation.goBack()}>Cancelar</Button>
    </View>
  );
}
