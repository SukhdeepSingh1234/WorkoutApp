import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function () {
  return (
    <View style={styles.card}>
        <View style={{padding:10, justifyContent:"center", alignItems:"center"}} >
            <Text style={{color:colors.medium ,fontWeight:"600",padding:8}} >Exercises</Text>
            <Text style={{color:colors.blue, fontWeight:"900",fontSize:20}} >8</Text>
        </View>
        <View style={styles.separator} ></View>
        <View style={{padding:10, justifyContent:"center", alignItems:"center"}}>
        <Text style={{color:colors.medium ,fontWeight:"600",padding:8}}>Calories</Text>
        <Text style={{color:colors.blue, fontWeight:"900",fontSize:20}}>8</Text>
        </View>
        <View style={styles.separator} ></View>
        <View style={{padding:10, justifyContent:"center", alignItems:"center"}}>
        <Text style={{color:colors.medium ,fontWeight:"600",padding:8}}>Time</Text>
        <Text style={{color:colors.blue, fontWeight:"900",fontSize:20 }}>8</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
        padding:10,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-evenly",
      },
  separator: {
    backgroundColor: colors.light,
    height: "80%",
    width: 2,
  },
  
})