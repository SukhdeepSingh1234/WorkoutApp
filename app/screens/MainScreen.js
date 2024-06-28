import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Screen from '../components/Screen'
import WorkoutDetails from '../components/WorkoutDetails'
import colors from '../config/colors'
import CategoryExercises from '../components/CategoryExercises'

export default function MainScreen() {
    const scrollView= useRef()
  return (
    <Screen style={styles.container } >
        <View style={styles.headingContainer}>
            <View style={styles.heading} >
                <Text style={styles.heading} >TRAIN HARD</Text>
           </View>
            <View>
                <Image style={styles.logo} source={require('../assets/logo.webp')} />
            </View>
        </View>
        <ScrollView ref={scrollView} >
        <View style={styles.WorkoutDetails} >
            <WorkoutDetails  />
        </View>
        <View style={styles.card}>
        <CategoryExercises heading="Beginner"/>
        <CategoryExercises heading="Intermediate"/>
        <CategoryExercises heading="Advanced"/>

        </View>

        </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.lightgrey,
        // alignItems: 'center',
    },
    heading:{
        fontSize: 25,
        fontWeight: '900',
        flex: 1,
        marginLeft: 5,
        marginTop: 2
    },
    headingContainer:{
        alignItems: 'center',
        flexDirection: "row",
        padding: 15,
    },
    logo:{
        width:50,
        height:50,
        borderRadius: 10,
    },
    WorkoutDetails:{
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        padding: 15,
        height: '20%',
        width: '100%',
    },
    card:{
        flex: 1,
        padding: 15,
    }

})