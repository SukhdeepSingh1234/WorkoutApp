import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppButton from '../components/Button'
import WorkoutDoneCard from '../components/WorkoutDoneCard'

export default function WorkoutCompletion({ navigation }) {
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
          onPress={() => navigation.navigate("MainScreen")} 
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