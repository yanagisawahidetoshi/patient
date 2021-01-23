import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopScreen from "./screens/TopScreen";
import RecordsScreen from "./screens/RecordsScreen";

const Tab = createBottomTabNavigator();

const headerOption = () => {
  return {
    title: "The Patient",
    headerStyle: {
      backgroundColor: "#3da9fc",
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fffffe",
    },
  };
};

const RecordsStack = createStackNavigator();
function RecordsStackScreen() {
  return (
    <RecordsStack.Navigator>
      <RecordsStack.Screen
        name="Top"
        component={RecordsScreen}
        options={headerOption}
      />
    </RecordsStack.Navigator>
  );
}
const TopStack = createStackNavigator();
function TopStackScreen() {
  return (
    <TopStack.Navigator>
      <TopStack.Screen
        name="Top"
        component={TopScreen}
        options={headerOption}
      />
    </TopStack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Top" component={TopStackScreen} />
        <Tab.Screen name="Recoreds" component={RecordsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
