import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SpotifyButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.btnContainer}>
        <MaterialCommunityIcons
          name="spotify"
          size={24}
          color="#fff"
          style={styles.icon}
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00FF00",
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
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "dongle-bold",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SpotifyButton;
