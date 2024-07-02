import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseListing from '../screens/ExerciseListing';
import MainScreen from '../screens/MainScreen';

export default function WorkoutNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="ExerciseListing" component={ExerciseListing} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
