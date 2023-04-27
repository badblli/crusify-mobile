import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LoginButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    padding: 10,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: "#00FF00",
    borderStyle: "solid 1px",
    width: 300,
    height: 49,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "dongle-bold",
    fontSize: 30,
    color: "#00FF00",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginButton;
