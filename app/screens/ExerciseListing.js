import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import { workoutMapping } from "../assets/links";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";
import AppButton from "../components/Button";

export default function ExerciseListing({ route }) {
  const navigation = useNavigation();
  const scrollView = useRef();
  const workoutDet = route.params;

  const workouts = workoutMapping[workoutDet.title];


  // Check if workouts data is available and has correct structure
  if (!workouts) {
    console.error(`No workouts found for title: ${workoutDet.title}`);
    return null;
  }

  if (!Array.isArray(workouts)) {
    console.error(`workouts should be an array but got: ${typeof workouts}`);
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={workoutDet.image} style={styles.bgImage}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.heading}>{workoutDet.title}</Text>
      </ImageBackground>
      <ScrollView ref={scrollView}>
        <View style={styles.barCont}>
          <View style={styles.bar}></View>
          <View>
            <Text style={styles.barText}>
              {workoutDet.time +
                " Min" +
                " . " +
                workoutDet.exerciseCount +
                " Workouts"}
            </Text>
          </View>
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.container}>
          {
            workouts.map((item , index)=>(
              <React.Fragment key={index}>
            <ListItem
              title={item.title}
              image={item.gif}
              subTitle={`${item.exerciseCount}`}
              text=" "
            />
            <ListItemSeparator /> 
          </React.Fragment>

            ))
          }
        </View>
      </ScrollView>
      <View style={styles.buttonCont}>
        <AppButton
          title="Start"
          bgcolor="blue"
          color="white"
          onPress={() =>
            navigation.navigate("WorkoutProgressStack", {
              workouts,
              workoutDet,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 16,
  },
  heading: {
    fontSize: 24,
    position: "absolute",
    fontWeight: "bold",
    justifyContent: "center",
    padding: 18,
    marginVertical: 16,
    color: "white",
    bottom: 10,
  },
  bgImage: {
    height: "100%",
    flexDirection: "column",
    maxHeight: 190,
  },
  barCont: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  bar: {
    height: 14,
    width: 4,
    backgroundColor: "blue",
    marginRight: 10,
    marginLeft: 5,
  },
  barText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  seperator: {
    width: "100%",
    backgroundColor: colors.light,
    height: 1,
  },
  buttonCont: {
    padding: 10,
  },
});
