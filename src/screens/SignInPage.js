import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "../components/Logo";
import CustomTextInput from "../components/TextInput";
import LoginButton from "../components/LoginButton";
import SpotifyButton from "../components/SpotifyButton";
import { LinearGradient } from "expo-linear-gradient";

const SignInPage = () => {
  return (
    <LinearGradient
      colors={["#1B1B1B", "#232324", "#29292B", "#2F2F32", "#36363A"]}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <Logo style={styles.logo} />

        <Text style={styles.title}>Sign Up Now¡</Text>

        <View style={styles.inputContainer}>
          <CustomTextInput placeholder="username" />
          <CustomTextInput placeholder="password" secureTextEntry={true} />
          <CustomTextInput placeholder="email" secureTextEntry={true} />
        </View>

        <LoginButton
          onPress={() => alert("Giriş yapılıyor...")}
          text="Sign Up"
        />
        <View style={{ marginTop: 20 }}>
          <SpotifyButton
            onPress={() => alert("Spotify ile bağlanılıyor...")}
            text="Sign in with Spotify"
          />
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
    marginTop: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "dongle-bold",
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignInPage;
