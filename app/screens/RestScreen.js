import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppButton from '../components/Button'
import { useFocusEffect } from "@react-navigation/native";

export default function RestScreen({ route, navigation }) {
  const { currentWorkoutIndex, totalWorkouts, nextWorkout } = route.params;
  console.log(nextWorkout)
  const [timer, setTimer] = useState(30);
  

  useFocusEffect(
    React.useCallback(() => {
      setTimer(30); // Reset timer to 30 seconds when screen is focused

      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(interval);
    }, [])
  );

  useEffect(() => {
    if (timer === 0) {
      handleNext();
    }
  }, [timer]);

  const addTwentySeconds = () => {
    setTimer((prev) => prev + 20);
  };

  const handleNext = () => {
    console.log("CWI -> " +currentWorkoutIndex)
    console.log("TW -> " + totalWorkouts-1)
    if (currentWorkoutIndex <= totalWorkouts - 1) {
      console.log("TW -> " + totalWorkouts-1)
      setTimer(30);
      navigation.navigate(`WorkoutProgress_${currentWorkoutIndex}`);
    } else {
      navigation.navigate("WorkoutCompletion");
    }
  
  };
  return (
    <Screen style={{backgroundColor: colors.white}} >
      <View style={styles.container}>
        <View style={styles.imgContainer} >
          <Image
            source={nextWorkout.gif} 
            style={styles.gif}
          />
        </View>
        <View style={{padding: 15}} >
        <View>
           <Text style={styles.text} > Next {currentWorkoutIndex}/{totalWorkouts}  </Text>
        </View>
        <View style={{flexDirection:"row"}} >
           <Text style={[styles.text,{flex:1}]} > {nextWorkout.title} </Text>
           <Text style={styles.text} >{nextWorkout.exerciseCount}</Text>
        </View>
        </View>
        <View  style={{justifyContent:"center", alignItems:"center", paddingTop:30, paddingBottom:20}}>
          <View>
              <Text style={[styles.text, {fontSize:34}]}>REST</Text>
          </View>
          <View><Text style={[styles.text, { fontSize: 50 }]}>{timer}</Text></View>
        </View>
        <View style={{paddingLeft:40, paddingRight:40}} >
          <AppButton title='+20 Seconds'onPress={addTwentySeconds} bgcolor="white" color="blue"/>
          <AppButton title='Skip' onPress={handleNext} bgcolor="white" color="blue"/>
        </View>
        
    </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex:1
      },
      gif: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
      },
      imgContainer:{
        backgroundColor: colors.white,
        height: 290,
        width: "100%",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    
      },
      text:{
        fontSize: 18,
        color: colors.white,
        fontWeight: "800",
        marginBottom: 5
      }
})