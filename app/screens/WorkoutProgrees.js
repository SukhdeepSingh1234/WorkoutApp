import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import Screen from "../components/Screen";
import WorkoutDetails from "../components/WorkoutDetails";
import { Calendar } from "react-native-calendars";
import { useUser } from '../context/UserContext'
import StreakBar from "../components/StreakBar";
import SummaryList from "../components/SummaryList";

export default function WorkoutProgrees() {
  const { progress } = useUser();
  const workoutDetails = [
    {
      title: "ABS BEGINNER",
      workoutTime: 20,
      Kcal: 200,
      image: require("../assets/beginner/abs.webp"),
    },
    {
      title: "CHEST BEGINNER",
      workoutTime: 11,
      Kcal: 150,
      image: require("../assets/beginner/chest.webp"),
    },
    {
      title: "ARM BEGINNER",
      workoutTime: 17,
      Kcal: 180,
      image: require("../assets/beginner/arms.webp"),
    },
    {
      title: "LEG BEGINNER",
      workoutTime: 26,
      Kcal: 250,
      image: require("../assets/beginner/legs.jpeg"),
    },
    {
      title: "SHOULDER & BACK BEGINNER",
      workoutTime: 17,
      Kcal: 190,
      image: require("../assets/beginner/sholdback.webp"),
    },
    {
      title: "ABS INTERMEDIATE",
      workoutTime: 25,
      Kcal: 218,
      image: require("../assets/intermediate/abs.jpg"),
    },
    {
      title: "CHEST INTERMEDIATE",
      workoutTime: 15,
      Kcal: 223,
      image: require("../assets/intermediate/chest.png"),
    },
    {
      title: "ARM INTERMEDIATE",
      workoutTime: 20,
      Kcal: 230,
      image: require("../assets/intermediate/arms.jpg"),
    },
    {
      title: "LEG INTERMEDIATE",
      workoutTime: 30,
      Kcal: 300,
      image: require("../assets/intermediate/legs.jpg"),
    },
    {
      title: "SHOULDER & BACK INTERMEDIATE",
      workoutTime: 22,
      Kcal: 250,
      image: require("../assets/intermediate/sholdback.webp"),
    },
    {
      title: "ABS ADVANCED",
      workoutTime: 30,
      Kcal: 320,
      image: require("../assets/advanced/abs.jpg"),
    },
    {
      title: "CHEST ADVANCED",
      workoutTime: 20,
      Kcal: 270,
      image: require("../assets/advanced/chest.jpg"),
    },
    {
      title: "ARM ADVANCED",
      workoutTime: 25,
      Kcal: 280,
      image: require("../assets/advanced/arms.png"),
    },
    {
      title: "LEG ADVANCED",
      workoutTime: 35,
      Kcal: 350,
      image: require("../assets/advanced/legs.jpg"),
    },
    {
      title: "SHOULDER & BACK ADVANCED",
      workoutTime: 27,
      Kcal: 300,
      image: require("../assets/advanced/sholdback.webp"),
    },
  ];
  
  const scrollView= useRef()

  // Transform history array to markedDates object
  const markedDates = progress.history.reduce((acc, date) => {
    acc[date] = { selected: true };
    return acc;
  }, {});

  // Match fetched summaries with predefined workout details
  const summaries = progress.summary?.map((summary, index) => {
    const details = workoutDetails.find(detail => detail.title === summary.title);
    return {
      id: index,
      title: summary.title,
      workoutTime: details ? details.workoutTime : "N/A",
      Kcal: details ? details.Kcal : "N/A",
      date: new Date(summary.time.seconds * 1000).toLocaleDateString(),
      time: new Date(summary.time.seconds * 1000).toLocaleTimeString(),
      image: details ? details.image : null,
    };
  }) || [];

  return (
    <Screen>
      <View style={styles.heading}>
        <Text style={styles.heading}>Progress</Text>
      </View>
      <ScrollView ref={scrollView} >
        <View style={styles.WorkoutDetails}>
        <WorkoutDetails workouts={progress.workouts} kcal={progress.kcal} time={progress.time}/>
        </View>
        <View style={styles.streakDetails} >
            <StreakBar streak={progress.streak} best_streak={progress.best_streak} />
        </View>
        <View style={styles.heading}>
          <Text style={[styles.heading,{marginTop:0}]}>History</Text>
        </View>
        <View style={styles.calendarCont} >
          <Calendar style={styles.calendar}
          
          minDate="2024-06-01"
          hideExtraDays={true}
          // markingType="period"
          markedDates={markedDates}
          />
        </View>
        <View style={styles.heading}>
          <Text style={[styles.heading,{marginBottom:0}]}>Workout  Summary</Text>
        </View>
        <View style={styles.summary} >
            {
              summaries.map((summary)=>(
                <SummaryList image={summary.image} title={summary.title} workoutTime={summary.workoutTime} kcal={summary.Kcal} time={summary.time} date={summary.date} />
              ))
            }
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "900",
    margin: 10,
  },
  WorkoutDetails: {
    padding: 13,
  },
  streakDetails: {
    padding: 15,
  },
  calendar:{
    elevation:4,
    borderRadius: 15,
    overflow: "hidden"

  },
  calendarCont:{
    padding: 15,
  },
  summary:{
    padding: 15,
  }
  
  
});
