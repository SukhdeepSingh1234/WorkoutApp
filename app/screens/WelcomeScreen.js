import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoCont} >
      <Image style={styles.logo} source={require('../assets/logo.webp')} />
      <Text style={styles.text} >The More The Pain</Text>
      <Text style={[styles.text,{ color:'#0101ff'} ]} >The More You Gain</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width:200,
        height:200,
    },
    logoCont:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
    }
})