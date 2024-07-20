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
              summaries.map((summary, index)=>(
                <SummaryList key={index}  image={summary.image} title={summary.title} workoutTime={summary.workoutTime} kcal={summary.Kcal} time={summary.time} date={summary.date} />
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
