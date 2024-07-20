import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../components/Button";

export default function WorkoutProgress({ route }) {
  const navigation = useNavigation();
  const { workout, index, total, workouts } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleNext = () => {
    if (index < total - 1) {
      navigation.navigate("RestScreen", {
        currentWorkoutIndex: index + 1,
        totalWorkouts: workouts.length,
        nextWorkout: workouts[index + 1],
      });
    } else {
      navigation.navigate("WorkoutCompletion");
    }
  };

  const handleQuit = () => {
    setIsModalVisible(true);
  };

  const confirmQuit = () => {
    setIsModalVisible(false);
    navigation.navigate("MainScreen");
  };

  const cancelQuit = () => {
    setIsModalVisible(false);
  };

  return (
    <Screen style={styles.mainContainer}>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Are you sure you want to quit?</Text>
            <View style={styles.modalButtons}>
              <Button title="Yes" onPress={confirmQuit} />
              <Button title="No" onPress={cancelQuit} />
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ backgroundColor: colors.white }}>
        <View style={styles.container}>
          {workout && (
            <>
              <Image source={workout.gif} style={styles.bgImage} />
              <TouchableOpacity style={styles.backButton} onPress={handleQuit}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View
          style={{ width: "100%", height: 2, backgroundColor: colors.light }}
        />
        {workout && (
          <View style={{ backgroundColor: colors.white, height: "100%" }}>
            <View style={styles.headingCont}>
              <Text style={styles.heading}>{workout.title}</Text>
            </View>
            <View style={styles.countCont}>
              <Text style={styles.count}>{workout.exerciseCount}</Text>
            </View>
            <View style={styles.buttonCont}>
              <AppButton
                title="DONE"
                bgcolor="blue"
                color="white"
                onPress={handleNext}
              />
            </View>
          </View>
        )}
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
    height: 380,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
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
    fontSize: 34,
    fontWeight: "900",
    padding: 18,
    marginVertical: 16,
    color: colors.black,
  },
  headingCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 30,
    fontWeight: "900",
    marginVertical: 16,
    marginBottom: 20,
    color: colors.blue,
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
  },
  buttonCont: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  navButton: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
