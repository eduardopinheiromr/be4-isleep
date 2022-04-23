import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CalendarScreen } from "../../screens/CalendarScreen";
import SelectedDayModal from "../../screens/SelectedDayModal";
import MissionRegisterScreen from "../../screens/MissionRegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import NewMissionModal from "../../screens/NewMissionModal";
import AntIcon from "react-native-vector-icons/AntDesign";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AvatarModal from "../../screens/AvatarModal";

const { Navigator, Screen } =
  createBottomTabNavigator<RootNavigationParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const BottomNavigation = () => {
  return (
    <Navigator initialRouteName="Calendar">
      <Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: "Calendário",
          tabBarIcon: props => <AntIcon {...props} name="calendar" />,
        }}
      />
      <Screen
        name="MissionRegister"
        component={MissionRegisterScreen}
        options={{
          title: "Missões",
          tabBarIcon: props => <MatIcon {...props} name="podium-gold" />,
        }}
      />
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
        <RootStack.Screen name="AvatarModal" component={AvatarModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
