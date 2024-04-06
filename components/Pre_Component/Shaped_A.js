import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";
import { Video, ResizeMode } from "expo-av";
import { useState, useEffect, useRef } from "react";

export default function Shaped_A({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const handleBack = () => {
    navigation.navigate("Shapes");
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/pre_back.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <TouchableOpacity
          style={{ width: 40, marginTop: 10 }}
          onPress={handleBack}
        >
          <Ionicons name="chevron-back" size={35} color="white" />
        </TouchableOpacity>

        <Video
          ref={video}
          style={{ height: "90%", width: "100%" }}
          source={require("../../assets/counted.mp4")}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </ImageBackground>
    </View>
  );
}
