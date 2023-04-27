import React, { useEffect, useState } from "react";
import LoginPage from "./src/screens/LoginPage";
import SignInPage from "./src/screens/SignInPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "dongle-regular": require("./assets/fonts/Dongle-Regular.ttf"),
        "dongle-bold": require("./assets/fonts/Dongle-Bold.ttf"),
        "dongle-light": require("./assets/fonts/Dongle-Light.ttf"),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInPage"
          component={SignInPage}
          options={{ headerShown: false }}
        />

        {/* Diğer sayfaları burada tanımlayabilirsiniz */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
