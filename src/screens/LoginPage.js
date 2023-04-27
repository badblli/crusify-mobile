import React from "react";
import { StyleSheet, View } from "react-native";
import Logo from "../components/Logo";
import CustomTextInput from "../components/TextInput";
import LoginButton from "../components/LoginButton";
import SpotifyButton from "../components/SpotifyButton";
import { LinearGradient } from "expo-linear-gradient";

const LoginPage = () => {
  return (
    <LinearGradient
      colors={["#1B1B1B", "#232324", "#29292B", "#2F2F32", "#36363A"]}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.inputContainer}>
          <CustomTextInput placeholder="username" />
          <CustomTextInput placeholder="password" secureTextEntry={true} />
        </View>

        <LoginButton onPress={() => alert("Giriş yapılıyor...")} />
        <View style={{ marginTop: 20 }}>
          <SpotifyButton onPress={() => alert("Spotify ile bağlanılıyor...")} />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 200,
    width: 200,
  },
  inputContainer: {
    marginBottom: 20,
  },
});

export default LoginPage;
