import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';

export default function CategoryExercises({ heading, navigation }) {
    const Beginner = [
        {
            id: 1,
            title: "ABS BEGINNER",
            time: 20,
            exerciseCount: 16,
            image: require("../assets/beginner/abs.webp"),
        },
        {
            id: 2,
            title: "CHEST BEGINNER",
            time: 11,
            exerciseCount: 11,
            image: require("../assets/beginner/chest.webp"),
        },
        {
            id: 3,
            title: "ARM BEGINNER",
            time: 17,
            exerciseCount: 19,
            image: require("../assets/beginner/arms.webp"),
        },
        {
            id: 4,
            title: "LEG BEGINNER",
            time: 26,
            exerciseCount: 23,
            image: require("../assets/beginner/legs.jpeg"),
        },
        {
            id: 5,
            title: "SHOULDER & BACK BEGINNER",
            time: 17,
            exerciseCount: 17,
            image: require("../assets/beginner/sholdback.webp"),
        },
    ];

    const Intermediate = [
        {
            id: 1,
            title: "ABS INTERMEDIATE",
            time: 25,
            exerciseCount: 18,
            image: require("../assets/intermediate/abs.jpg"),
        },
        {
            id: 2,
            title: "CHEST INTERMEDIATE",
            time: 15,
            exerciseCount: 13,
            image: require("../assets/intermediate/chest.png"),
        },
        {
            id: 3,
            title: "ARM INTERMEDIATE",
            time: 20,
            exerciseCount: 21,
            image: require("../assets/intermediate/arms.jpg"),
        },
        {
            id: 4,
            title: "LEG INTERMEDIATE",
            time: 30,
            exerciseCount: 25,
            image: require("../assets/intermediate/legs.jpg"),
        },
        {
            id: 5,
            title: "SHOULDER & BACK INTERMEDIATE",
            time: 22,
            exerciseCount: 19,
            image: require("../assets/intermediate/sholdback.webp"),
        },
    ];

    const Advanced = [
        {
            id: 1,
            title: "ABS ADVANCED",
            time: 30,
            exerciseCount: 20,
            image: require("../assets/advanced/abs.jpg"),
        },
        {
            id: 2,
            title: "CHEST ADVANCED",
            time: 20,
            exerciseCount: 15,
            image: require("../assets/advanced/chest.jpg"),
        },
        {
            id: 3,
            title: "ARM ADVANCED",
            time: 25,
            exerciseCount: 23,
            image: require("../assets/advanced/arms.png"),
        },
        {
            id: 4,
            title: "LEG ADVANCED",
            time: 35,
            exerciseCount: 27,
            image: require("../assets/advanced/legs.jpg"),
        },
        {
            id: 5,
            title: "SHOULDER & BACK ADVANCED",
            time: 27,
            exerciseCount: 21,
            image: require("../assets/advanced/sholdback.webp"),
        },
    ];

    let exercises;
    switch (heading) {
        case 'Beginner':
            exercises = Beginner;
            break;
        case 'Intermediate':
            exercises = Intermediate;
            break;
        case 'Advanced':
            exercises = Advanced;
            break;
        default:
            exercises = [];
    }
    return (
        <>
            <View>
                <Text style={{ fontWeight: '900', fontSize: 20, marginBottom: 10 }}>{heading}</Text>
                {exercises.map((exercise) => (
                    <Card
                        key={exercise.id}
                        id={exercise.id}
                        title={exercise.title}
                        exerciseCount={exercise.exerciseCount}
                        time={exercise.time}
                        image={exercise.image}
                        onPress={() => navigation.navigate("ExerciseListing",exercise)}
                    />
                ))}
            </View>
        </>
    );
}

const styles = StyleSheet.create({});
