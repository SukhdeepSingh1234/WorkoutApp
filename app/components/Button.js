import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";


function AppButton({title, onPress, bgcolor,color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[bgcolor] }]}
      onPress={onPress}
    >
      <Text style={[styles.text,{ color:colors[color]}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
