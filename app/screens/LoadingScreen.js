import { StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={styles.lottieView}
        source={require("../assets/loadingAnimation.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
  },
  lottieView: {
    width: "100%",
    height: "100%",
  },
});
