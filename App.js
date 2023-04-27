import React, { useEffect, useState } from "react";
import LoginPage from "./src/screens/LoginPage";
import * as Font from "expo-font";

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

  return <LoginPage />;
}
