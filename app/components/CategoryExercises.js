import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Card from './Card';

const Beginner = [
    {
      title: "ABS BEGINNER",
      time: 20,
      Kcal: 200,
      image: require("../assets/beginner/abs.webp"),
    },
    {
      title: "CHEST BEGINNER",
      time: 11,
      Kcal: 150,
      image: require("../assets/beginner/chest.webp"),
    },
    {
      title: "ARM BEGINNER",
      time: 17,
      Kcal: 180,
      image: require("../assets/beginner/arms.webp"),
    },
    {
      title: "LEG BEGINNER",
      time: 26,
      Kcal: 250,
      image: require("../assets/beginner/legs.jpeg"),
    },
    {
      title: "SHOULDER & BACK BEGINNER",
      time: 17,
      Kcal: 190,
      image: require("../assets/beginner/sholdback.webp"),
    },
  ];
  
  const Intermediate = [
    {
      title: "ABS INTERMEDIATE",
      time: 25,
      Kcal: 218,
      image: require("../assets/intermediate/abs.jpg"),
    },
    {
      title: "CHEST INTERMEDIATE",
      time: 15,
      Kcal: 223,
      image: require("../assets/intermediate/chest.png"),
    },
    {
      title: "ARM INTERMEDIATE",
      time: 20,
      Kcal: 230,
      image: require("../assets/intermediate/arms.jpg"),
    },
    {
      title: "LEG INTERMEDIATE",
      time: 30,
      Kcal: 300,
      image: require("../assets/intermediate/legs.jpg"),
    },
    {
      title: "SHOULDER & BACK INTERMEDIATE",
      time: 22,
      Kcal: 250,
      image: require("../assets/intermediate/sholdback.webp"),
    },
  ];
  
  const Advanced = [
    {
      title: "ABS ADVANCED",
      time: 30,
      Kcal: 320,
      image: require("../assets/advanced/abs.jpg"),
    },
    {
      title: "CHEST ADVANCED",
      time: 20,
      Kcal: 270,
      image: require("../assets/advanced/chest.jpg"),
    },
    {
      title: "ARM ADVANCED",
      time: 25,
      Kcal: 280,
      image: require("../assets/advanced/arms.png"),
    },
    {
      title: "LEG ADVANCED",
      time: 35,
      Kcal: 350,
      image: require("../assets/advanced/legs.jpg"),
    },
    {
      title: "SHOULDER & BACK ADVANCED",
      time: 27,
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
