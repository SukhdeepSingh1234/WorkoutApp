import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import Screen from "../components/Screen";
import WorkoutDetails from "../components/WorkoutDetails";
import { Calendar } from "react-native-calendars";
import colors from "../config/colors";
import Icon from "../components/Icon";
import StreakBar from "../components/StreakBar";
import SummaryList from "../components/SummaryList";

export default function WorkoutProgrees() {

  const summaries= [
    {
      id: 1,
      title: "ABS INTERMEDIATE",
      workoutTime: 25,
      Kcal: 218,
      date: "Jun 27",
      time: "10:18 pm",
      image: require("../assets/intermediate/abs.jpg"),
  },
  {
      id: 2,
      title: "CHEST INTERMEDIATE",
      workoutTime: 15,
      Kcal: 223,
      date: "Jun 28",
      time: "19:18 pm",
      image: require("../assets/intermediate/chest.png"),
  }
  ]
  const scrollView= useRef()
  return (
    <Screen>
      <View style={styles.heading}>
        <Text style={styles.heading}>Progress</Text>
      </View>
      <ScrollView ref={scrollView} >
        <View style={styles.WorkoutDetails}>
          <WorkoutDetails />
        </View>
        <View style={styles.streakDetails} >
            <StreakBar/>
        </View>
        <View style={styles.heading}>
          <Text style={[styles.heading,{marginTop:0}]}>History</Text>
        </View>
        <View style={styles.calendarCont} >
          <Calendar style={styles.calendar}
          
          minDate="2024-06-01"
          hideExtraDays={true}
          // markingType="period"
          markedDates={{
            "2024-06-24": { selected:true},
            "2024-06-25": { selected:true}
          
          }}
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
