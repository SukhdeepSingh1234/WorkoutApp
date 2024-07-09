import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'

export default function LoginScreen({promptAsync}) {
  return (
    <Screen style={styles.container} >
      <TouchableOpacity onPress={() => promptAsync()}  >
        <View style={styles.logoCont} >
          <Image style={styles.logo} source={require("../assets/google.png")} />
          <Text style={styles.heading} >Sign in with Google</Text>
        </View>
      </TouchableOpacity>
        
    </Screen> 
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightgrey,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo:{
        width:25,
        height:25,
        borderRadius: 10,
        marginRight:10
      },
      logoCont:{
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
})