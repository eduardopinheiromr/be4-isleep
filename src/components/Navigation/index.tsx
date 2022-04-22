import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CalendarScreen } from "../../screens/Calendar";

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Calendar">
        <Screen name="Calendar" component={CalendarScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
