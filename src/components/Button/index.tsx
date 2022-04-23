import React from "react";
import { Button as RNButton, ButtonProps, View } from "react-native";
import { styles } from "./styles";

type Props = {
  children: string;
} & Omit<ButtonProps, "title" | "style">;

export default function Button({ children, ...props }: Props) {
  return (
    <View style={styles.button}>
      <RNButton title={children} {...props} />
    </View>
  );
}
