import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'


export default function Challenges() {
  return (
    <Screen>
      <View style={styles.container}>
      <Image
        source={require("../assets/gifs/chest/dumbell_fly.gif")} 
        style={styles.gif}
      />
    </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor:"orange",
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    width: 200,
    height: 200,
    backgroundColor: "purple",
  },
})