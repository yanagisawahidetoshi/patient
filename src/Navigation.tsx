import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopScreen from "./screens/TopScreen";
import RecordsScreen from "./screens/RecordsScreen";
import Icon from "react-native-vector-icons/FontAwesome";

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
        name="Records"
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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "HOME") {
              return (
                <Icon
                  name="home"
                  size={20}
                  color={focused ? "#3da9fc" : "#5f6c7b"}
                />
              );
            } else if (route.name === "我慢したリスト") {
              return (
                <Icon
                  name="list"
                  size={20}
                  color={focused ? "#3da9fc" : "#5f6c7b"}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#3da9fc",
          inactiveTintColor: "#5f6c7b",
        }}
      >
        <Tab.Screen name="HOME" component={TopStackScreen} />
        <Tab.Screen name="我慢したリスト" component={RecordsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
