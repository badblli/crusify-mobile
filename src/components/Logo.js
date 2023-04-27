import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <ImageBackground
        style={styles.image}
        source={{ uri: "https://crusify.vercel.app/img/logo/logo.png" }}
        placeholder={blurhash}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default Logo;
