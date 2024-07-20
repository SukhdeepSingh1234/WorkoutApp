import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ExerciseListing from '../screens/ExerciseListing';
import MainScreen from '../screens/MainScreen';
import WorkoutProgressStack from './WorkoutProgressStack';

const Stack = createStackNavigator();

const WorkoutNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="ExerciseListing" component={ExerciseListing} />
      <Stack.Screen name="WorkoutProgressStack" component={WorkoutProgressStack} />
    </Stack.Navigator>
  );
};

export default WorkoutNavigation;
