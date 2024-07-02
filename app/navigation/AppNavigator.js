import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import { AntDesign } from '@expo/vector-icons';
import MainScreen from "../screens/MainScreen";
import Challenges from "../screens/Challenges";
import WorkoutProgrees from "../screens/WorkoutProgrees";
import UserProfile from "../screens/UserProfile";
import WorkoutNavigation from "./WorkoutNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }} >
    <Tab.Screen
      name="Workout"
      component={WorkoutNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Challenges"
      component={Challenges}
      options={({ navigation }) => ({
        // tabBarButton: () => (
        //   <NewListingButton
        //     onPress={() => navigation.navigate(routes.LISTING_EDIT)}
        //   />
        // ),
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sword-cross" size={size} color={color} />
        ),
      })}
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
);

export default AppNavigator;
