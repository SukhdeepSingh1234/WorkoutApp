import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import Icon from './Icon'

export default function ({workouts, kcal, time}) {
  return (
    <View style={styles.container} >
            <View style={styles.details} >
                <Icon name= 'medal-outline' backgroundColor={colors.white} iconColor="#F8D210" size={50}  />
                <Text style={styles.desc} >{workouts? workouts : "--"}</Text>
                <Text style={styles.desc} >Workouts</Text>
            </View>
            <View style={styles.details} >
                <Icon name= 'fire' backgroundColor={colors.white} iconColor="#FFA500" size={50}/>
                <Text style={styles.desc}>{kcal? kcal: "--" }</Text>
                <Text style={styles.desc} >Kcal</Text>
            </View>
            <View style={styles.details} >
                <Icon name= 'clock-time-three-outline' backgroundColor={colors.white} iconColor={colors.black} size={50} />
                <Text style={styles.desc} >{time? time: "--"}</Text>
                <Text style={styles.desc} >Minutes</Text>
            </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        flexDirection:'row',
        height: '100%',
        justifyContent:'space-evenly',
        padding: 10,
        borderRadius: 10,
    },
    details:{
        flexDirection:"column",
        alignItems: 'center',

    },
    desc:{
        fontWeight:"bold",
        fontSize: 17
    }
})