import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CalendarScreen } from "../../screens/CalendarScreen";
import SelectedDayModal from "../../screens/SelectedDayModal";
import MissionRegisterScreen from "../../screens/MissionRegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import NewMissionModal from "../../screens/NewMissionModal";

const { Navigator, Screen } =
  createBottomTabNavigator<RootNavigationParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const BottomNavigation = () => {
  return (
    <Navigator initialRouteName="Calendar">
      <Screen name="Calendar" component={CalendarScreen} />
      <Screen name="MissionRegister" component={MissionRegisterScreen} />
    </Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={BottomNavigation}
        />
        <RootStack.Screen
          name="SelectedDayModal"
          component={SelectedDayModal}
        />
        <RootStack.Screen name="NewMissionModal" component={NewMissionModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
