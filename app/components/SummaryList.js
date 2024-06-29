import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SummaryList({image, title,workoutTime, kcal,time,date}) {
  return (
    <View style={styles.summary} >
      <View style={styles.summaryDet} >
          <View style={styles.imageCont} >
              <Image resizeMode="contain" style={styles.image} source={image} />
          </View>
          <View style={styles.details} >
              <View>
                <Text style={{fontWeight:"500"}} >{date},{time}</Text>
              </View>
              <View>
                <Text style={{fontWeight:"900", fontSize:15, marginBottom:5, marginTop:5}}  >{title}</Text>
                </View>
              <View style={{flexDirection:"row"}} >
                 <Text><Fontisto name="stopwatch" size={24} color="#318CE7" /> {workoutTime} </Text>
                 <Text> <MaterialCommunityIcons name="fire" size={24} color="orange" /> {kcal} </Text>
              </View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  summary:{
    backgroundColor: colors.white,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    margin:5
  },
  summaryDet:{
    flexDirection:'row',
    alignItems: 'center',
  },
  image:{
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "cover"
  },
  imageCont:{
    overflow: 'hidden',
    borderRadius: 20,
    height: 90,
    width: 90,
  },
  details:{
    flex:1,
    marginLeft:10,
  }

})