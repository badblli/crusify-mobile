import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({ placeholder }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor="#979797"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    height: 49,
    backgroundColor: "#777777",
    color: "#fffFFF",
    borderRadius: 24,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default CustomTextInput;
