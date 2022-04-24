import React from "react";
import CheckBox, { CheckboxProps } from "expo-checkbox";

type Props = { isChecked: boolean } & Omit<CheckboxProps, "value">;

export default function Checkbox({ onChange, isChecked, ...props }: Props) {
  return <CheckBox value={isChecked} {...props} />;
}
