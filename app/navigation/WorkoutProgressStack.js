import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WorkoutProgress from "../screens/WorkoutProgress";
import RestScreen from "../screens/RestScreen";
import WorkoutCompletion from "../screens/WorkoutCompletion";

const Stack = createStackNavigator();

export default function WorkoutProgressStack({ route }) {
  const { workouts ,workoutDet } = route.params;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {workouts.map((workout, index) => (
        <Stack.Screen
          key={index}
          name={`WorkoutProgress_${index}`}
          component={WorkoutProgress}
          initialParams={{ workout, index, total: workouts.length, workouts }}
        />
      ))}
      <Stack.Screen name="RestScreen" component={RestScreen} />
      <Stack.Screen name="WorkoutCompletion" component={WorkoutCompletion} initialParams={{ workoutDet }} />
    </Stack.Navigator>
  );
}
