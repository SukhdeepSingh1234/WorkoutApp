import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../components/Icon";
import colors from "../config/colors";

export default function StreakBar() {
  return (
    <View style={styles.streak}>
      <View style={styles.streakDet}>
        <View >
          <Icon
            name="fire"
            backgroundColor={colors.white}
            iconColor="#FFA500"
            size={60}
          />
        </View>
        <View>
          <Text style={{fontWeight:"800",fontSize:30}} >0</Text>
        </View>
        <View>
          <Text style={{fontSize:16, marginLeft:4 }}  >Day Streak</Text>
        </View>
      </View>
      <View style={styles.streakBest}>
        <Text style={{ color: colors.light, fontWeight: "700" }}>
          Personal Best
        </Text>
        <Text style={{ marginTop: 2, fontWeight: "800" }}>3 Days</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    streak:{
        backgroundColor: colors.white,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    streakDet:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
      },
      streakBest:{
        justifyContent: 'center',
        margin:13,
        alignItems: 'center'
      }
});
