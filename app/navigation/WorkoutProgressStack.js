// WorkoutProgressStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutProgress from "../screens/WorkoutProgress";
import RestScreen from "../screens/RestScreen";

const Stack = createStackNavigator();

export default function WorkoutProgressStack({ route }) {
  const { workouts } = route.params;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {workouts.map((workout, index) => (
        <Stack.Screen
          key={index}
          name={`WorkoutProgress_${index}`}
          component={WorkoutProgress}
          initialParams={{ workout, index:  index + 1, total: workouts.length, workouts }}
        />
      ))}
      <Stack.Screen name="RestScreen" component={RestScreen} />
    </Stack.Navigator>
  );
}
