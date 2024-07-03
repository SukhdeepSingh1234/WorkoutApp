import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../components/Button";
import { FontAwesome6 } from "@expo/vector-icons";

export default function WorkoutProgress() {
  const navigation = useNavigation();
  return (
    <Screen style={styles.mainContainer}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/gifs/chest/dumbell_fly.gif")}
          style={styles.bgImage}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.headingCont}>
        <Text style={styles.heading}>DUMBBELL PRESS</Text>
      </View>
      <View style={styles.countCont}>
        <Text style={[styles.countHeading]}>x</Text>
        <Text style={styles.count}>16</Text>
      </View>
      <View style={styles.buttonCont}>
        <AppButton
          icon="check"
          title="DONE"
          onPress={() => navigation.navigate("WorkoutProgress")}
        />
      </View>
      <View style={styles.navButton}>
        <View style={styles.icon}>
          <FontAwesome6 name="backward-step" size={24} color="black" />
          <Text style={styles.text}>Previous</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.icon}>
          <Text style={styles.text}>Skip</Text>
          <FontAwesome6 name="forward-step" size={24} color="black" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: colors.white,
    width: "100%",
    height: 400,
  },
  gif: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  bgImage: {
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 14,
    backgroundColor: colors.light,
    borderRadius: 40,
    padding: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: "800",
    padding: 18,
    marginVertical: 16,
    color: colors.black,
  },
  headingCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 44,
    fontWeight: "900",
    marginVertical: 16,
    color: colors.black,
  },
  countCont: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  countHeading: {
    fontSize: 34,
    fontWeight: "900",
    marginRight: 2,
    marginVertical: 16,
    color: colors.black,
  },
  buttonCont: {
    marginLeft: 50,
    marginRight: 50,
  },
  navButton: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10
  },
  separator: {
    backgroundColor: colors.light,
    height: 30,
    width: 2,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});
