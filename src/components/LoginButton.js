import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Login </Text>
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
    boxShadow: "0px 5px 0px #0A8828",
    dropShadow: "0px 20px 0px red",
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
