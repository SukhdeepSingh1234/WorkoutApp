import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';

const Beginner = [
    {
      id:1,
      exerciseCount: 14,
      title: "ABS BEGINNER",
      time: 20,
      Kcal: 200,
      image: require("../assets/beginner/abs.webp"),
    },
    {
      id: 2,
      exerciseCount: 12,
      title: "CHEST BEGINNER",
      time: 23,
      Kcal: 150,
      image: require("../assets/beginner/chest.webp"),
    },
    {
      id:3,
      exerciseCount: 15,
      title: "ARM BEGINNER",
      time: 22,
      Kcal: 180,
      image: require("../assets/beginner/arms.webp"),
    },
    {
      id:4,
      exerciseCount: 12,
      title: "LEG BEGINNER",
      time: 26,
      Kcal: 250,
      image: require("../assets/beginner/legs.jpeg"),
    },
    {
      id:5,
      exerciseCount: 13,
      title: "SHOULDER & BACK BEGINNER",
      time: 17,
      Kcal: 190,
      image: require("../assets/beginner/sholdback.webp"),
    },
  ];
  
  const Intermediate = [
    {
      id:6,
      exerciseCount: 14,
      title: "ABS INTERMEDIATE",
      time: 30,
      Kcal: 218,
      image: require("../assets/intermediate/abs.jpg"),
    },
    {
      id: 7,
      exerciseCount: 12,
      title: "CHEST INTERMEDIATE",
      time: 35,
      Kcal: 223,
      image: require("../assets/intermediate/chest.png"),
    },
    {
      id:8,
      exerciseCount: 15,
      title: "ARM INTERMEDIATE",
      time: 30,
      Kcal: 230,
      image: require("../assets/intermediate/arms.jpg"),
    },
    {
      id:9,
      exerciseCount: 12,
      title: "LEG INTERMEDIATE",
      time: 30,
      Kcal: 300,
      image: require("../assets/intermediate/legs.jpg"),
    },
    {
      id:10,
      exerciseCount: 13,
      title: "SHOULDER & BACK INTERMEDIATE",
      time: 32,
      Kcal: 250,
      image: require("../assets/intermediate/sholdback.webp"),
    },
  ];
  
  const Advanced = [
    {
      id:11,
      exerciseCount: 14,
      title: "ABS ADVANCED",
      time: 40,
      Kcal: 320,
      image: require("../assets/advanced/abs.jpg"),
    },
    {
      id: 12,
      exerciseCount: 12,
      title: "CHEST ADVANCED",
      time: 35,
      Kcal: 270,
      image: require("../assets/advanced/chest.jpg"),
    },
    {
      id: 13,
      exerciseCount: 15,
      title: "ARM ADVANCED",
      time: 40,
      Kcal: 280,
      image: require("../assets/advanced/arms.png"),
    },
    {
      id: 14,
      exerciseCount: 12,
      title: "LEG ADVANCED",
      time: 40,
      Kcal: 350,
      image: require("../assets/advanced/legs.jpg"),
    },
    {
      id:15,
      exerciseCount: 13,
      title: "SHOULDER & BACK ADVANCED",
      time: 40,
      Kcal: 300,
      image: require("../assets/advanced/sholdback.webp"),
    },
  ];

export default function CategoryExercises({ heading, navigation }) {
    

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
