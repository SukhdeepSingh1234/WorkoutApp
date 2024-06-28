import React from "react";
import { View, StyleSheet, Image,Text, ImageBackground } from "react-native";


import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ title, time,exerciseCount, image,onPress }) {
  return (

    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.card}>
        <ImageBackground style={styles.image} source={image} >
            <View style={styles.container} >
                <View>
                    <Text style={{color:colors.white,fontWeight:"900",fontSize:22}} >{title}</Text>
                </View>
                <View style={styles.subTitle} >
                    <View><Text style={{color:colors.white,fontWeight:"700"}}>{time+ " MINS"}</Text></View>
                    <View style={{marginLeft:3,marginRight:3,fontWeight:"700"}} ><Text style={{color:colors.white}} >|</Text></View>
                    <View><Text style={{color:colors.white,fontWeight:"700"}} >{exerciseCount + " EXERCISES"}</Text></View>
                </View>
                    
            </View>
        </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  container: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 140,
  },
  subTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Card;
