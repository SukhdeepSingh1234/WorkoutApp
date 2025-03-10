import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'

export default function LoginScreen({promptAsync}) {
  return (
    <Screen style={styles.container} >
      <View style={styles.logoCont} >
      <Image style={styles.logo} source={require('../assets/logo.webp')} />
      <Text style={styles.text} >The More The Pain</Text>
      <Text style={[styles.text,{ color:'#0101ff'} ]} >The More You Gain</Text>
      </View>
      <TouchableOpacity onPress={() => promptAsync()}  >
        <View style={styles.googleCont} >
          <Image style={styles.googleLogo} source={require("../assets/google.png")} />
          <Text style={styles.heading} >Sign in with Google</Text>
        </View>
      </TouchableOpacity>
        
    </Screen> 
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      googleLogo:{
        width:25,
        height:25,
        borderRadius: 10,
        marginRight:10
      },
      googleCont:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: "space-between",
        borderColor: colors.black,
        borderCurve: "circular",
        borderRadius: 50,
        borderWidth: 1.5,
        padding:10
      },
      heading:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    logo:{
        width:200,
        height:200,
    },
    logoCont:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    text:{
        color: 'red',
        fontSize: 22,
        fontWeight: 'bold',
    }
})