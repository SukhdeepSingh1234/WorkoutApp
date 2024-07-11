import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppButton from '../components/Button'
import WorkoutDoneCard from '../components/WorkoutDoneCard'
import { useUser } from '../context/UserContext';
import { db } from '../../firebaseConfig'; 
import { doc, updateDoc, Timestamp } from 'firebase/firestore';

export default function WorkoutCompletion({ navigation, route }) {

  const { user, progress } = useUser(); // Assuming you have a context for user data
  const {workoutDet}= route.params

  const handleWorkoutCompletion = async () => {
      try {
        const userRef = doc(db, 'workoutprogress', user.uid);
         // Get current date
        const currentDate = new Date();
        const currentDateString = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD

       // Ensure  progress and  progress.history are defined
        const history =  progress.history || [];
        const streak =  progress.streak || 0;
        const bestStreak =  progress.best_streak || 0;

        // Calculate new streak
        const lastWorkoutDate = history.length > 0 ? new Date(history[history.length - 1]) : null;
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const newStreak = lastWorkoutDate && lastWorkoutDate.toDateString() === yesterday.toDateString() ? streak + 1 : 1;
        
        // Update best streak if new streak is greater
        const newBestStreak = Math.max(bestStreak, newStreak);

        await updateDoc(userRef, {
          workouts: ( progress.workouts || 0) + 1,
          time: ( progress.time || 0) + workoutDet.time,
          kcal: ( progress.kcal || 0) + workoutDet.Kcal,
          history: [...history, currentDateString],
          summary: [...( progress.summary || []), { time: Timestamp.now(), title: workoutDet.title }],
          streak: newStreak,
          best_streak: newBestStreak
        });
        navigation.navigate('MainScreen');
      } catch (error) {
        console.error('Error updating workouts:', error);
        // Handle error as needed
      }

  };

  return (

    <View style={styles.container} >
      <View style={styles.imgContainer} >
        <Image style={styles.image} source={require("../assets/congo.png")} />
      </View>
      <View style={styles.cardCont} >
        <WorkoutDoneCard/>
      </View>
      <View style={{justifyContent:"center", alignItems:"center"}} >
        <Text style={styles.text} >" The More The Pain</Text>
        <Text style={styles.text}>  The More The Gain"</Text>
      </View>
      <View style={styles.buttonCont}>
        <AppButton   title="Feeling Great" 
          onPress={handleWorkoutCompletion}
          bgcolor="blue" 
          color="white"  />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgrey,
    flex:1
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill",

  },
  imgContainer:{
    height: 400,
    width: "100%",
  },
  text:{
    fontSize: 24,
    color: colors.black,
    fontWeight: "800",
    marginBottom: 5
  },
  cardCont:{
    margin:20,
    marginBottom: 8
  },
  buttonCont: {
    margin: 20
  }
})