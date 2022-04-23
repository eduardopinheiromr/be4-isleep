import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Image, Pressable, View } from "react-native";
import { useUserStore } from "../../stores/user";
import { getAvatarImage } from "../../utils/getAvatarImage";

type ModalScreenProp = StackNavigationProp<RootStackParamList, "AvatarModal">;

export default function Avatar() {
  const navigation = useNavigation<ModalScreenProp>();
  const { user } = useUserStore();
  const [avatar, setAvatar] = useState("avatar(1).jpg");

  useEffect(() => {
    if (user.avatar) {
      setAvatar(user.avatar);
    }
  }, [user.avatar]);

  return (
    <View
      style={{
        height: 100,
        width: 100,
        overflow: "hidden",
        borderRadius: 50,
        marginLeft: "auto",
        marginRight: "auto",
        marginVertical: 15,
      }}
    >
      <Pressable onPress={() => navigation.navigate("AvatarModal")}>
        <Image
          style={{ height: 100, width: 100 }}
          source={getAvatarImage(avatar)}
        />
      </Pressable>
    </View>
  );
}
