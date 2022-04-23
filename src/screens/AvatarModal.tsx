import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useUserStore } from "../stores/user";
import { avatarNames, getAllImages } from "../utils/getAllImages";

export default function AvatarModal() {
  const navigation = useNavigation();
  const { setUser } = useUserStore();
  const images = useMemo(() => getAllImages(), []);
  return (
    <View>
      <Text>AvatarModal</Text>
      <View style={{ display: "flex", flexWrap: "wrap" }}>
        {images.map((image, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setUser({ avatar: avatarNames[index] });
              navigation.goBack();
            }}
          >
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
              <Image style={{ height: 100, width: 100 }} source={image} />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
