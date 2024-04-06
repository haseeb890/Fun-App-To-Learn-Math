import { View, Image } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { ImageBackground } from "react-native";

export default function SplashScreen({ navigation }) {
  // const { child } = route.params;
  const [splah, setSplash] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
      setSplash(true);
    }, 4000);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {/* <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/splash1.gif")}
          style={{ marginTop: "20%", borderRadius: 30 }}
        />
      </View> */}
      <ImageBackground
        source={require("../../assets/splash1.gif")}
        style={{ height: "100%", width: "100%" }}
      ></ImageBackground>
    </View>
  );
}
