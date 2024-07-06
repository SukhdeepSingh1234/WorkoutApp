import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppButton from '../components/Button'


export default function Challenges() {


  return (
    <Screen style={{backgroundColor: colors.white}} >
      <View style={styles.container}>
        <View style={styles.imgContainer} >
          <Image
            source={require("../assets/gifs/chest/dumbell_fly.gif")} 
            style={styles.gif}
          />
        </View>
        <View style={{padding: 15}} >
        <View>
           <Text style={styles.text} > Next {1}/{14}  </Text>
        </View>
        <View style={{flexDirection:"row"}} >
           <Text style={[styles.text,{flex:1}]} > LEG RAISES </Text>
           <Text style={styles.text} >x16</Text>
        </View>
        </View>
        <View  style={{justifyContent:"center", alignItems:"center", paddingTop:30, paddingBottom:20}}>
          <View>
              <Text style={[styles.text, {fontSize:24}]}>REST</Text>
          </View>
          <View><Text style={[styles.text, {fontSize:50}]}>00:30</Text></View>
        </View>
        <View style={{paddingLeft:40, paddingRight:40}} >
          <AppButton title='+20 Seconds' bgcolor="white" color="blue"/>
          <AppButton title='Skip' bgcolor="white" color="blue"/>
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