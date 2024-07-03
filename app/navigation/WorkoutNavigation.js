import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ExerciseListing from '../screens/ExerciseListing';
import MainScreen from '../screens/MainScreen';
import WorkoutProgress from '../screens/WorkoutProgress';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();


const WorkoutNavigation = ({ navigation, route }) => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="ExerciseListing" component={ExerciseListing} />
      <Stack.Screen name="WorkoutProgress" component={WorkoutProgress} />
    </Stack.Navigator>
  );
};

export default WorkoutNavigation;
