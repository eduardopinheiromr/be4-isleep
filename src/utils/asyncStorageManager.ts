import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLocalValue = async (field: string) => {
  const localValues = await AsyncStorage.getItem(field);

  console.log({ localValues });
  return localValues ? JSON.parse(localValues) : "";
};

export const setLocalValue = async (field: string, value: any) => {
  await AsyncStorage.setItem(field, JSON.stringify(value));
};
