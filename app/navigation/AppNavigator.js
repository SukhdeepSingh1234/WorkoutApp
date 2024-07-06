import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import MainScreen from "../screens/MainScreen";
import Challenges from "../screens/Challenges";
import WorkoutProgrees from "../screens/WorkoutProgrees";
import UserProfile from "../screens/UserProfile";
import WorkoutNavigation from "./WorkoutNavigation";

const Tab = createBottomTabNavigator();


const AppNavigator = () => {

  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
  
    if (routeName === "ExerciseListing" || routeName === "WorkoutProgress" || routeName === "WorkoutProgressStack") {
      return false; // Hide tabBar for ExerciseListing screen
    }
    
    return true; // Show tabBar for all other screens
  };
  
  return(
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Workout"
      component={WorkoutNavigation}
      options={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
        ),
        tabBarStyle: {
          display:
            getTabBarVisibility(route) === false ? "none" : "flex", // Hide tabBar only for ExerciseListing screen
        },
      })}
    />
    <Tab.Screen
      name="Challenges"
      component={Challenges}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="sword-cross" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Progress"
      component={WorkoutProgrees}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="barschart" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={UserProfile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
)};

export default AppNavigator;
