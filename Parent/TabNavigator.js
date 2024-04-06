import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Settings, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
import HomePage from "./HomePage";
import ChildAccount from "./ChildAccount";
import MyProfile from "./MyProfile";
import Setting from "./Setting";
import { useState } from "react";

export default function TabNavigator({ navigation }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "HomePage") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "ChildAccount") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "MyProfile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Setting") {
            iconName = focused ? "settings-sharp" : "md-settings-outline";
            size = focused ? size + 8 : size + 5;
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#35C3FE",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#E5F3FF",
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="ChildAccount"
        component={ChildAccount}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
