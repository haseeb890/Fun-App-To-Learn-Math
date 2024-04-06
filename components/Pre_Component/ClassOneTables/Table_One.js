import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { AntDesign } from "react-native-vector-icons";
import { Video, ResizeMode } from "expo-av";
import { useState, useEffect, useRef } from "react";
import { StatusBar } from "react-native";

export default function Table_One({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const handleBack = () => {
    navigation.navigate("ClassOneTable");
  };

  useEffect(() => {
    if (video.current) {
      video.current.playAsync();
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../../assets/pre_back.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <TouchableOpacity style={styles.handle} onPress={handleBack}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>

        <Video
          ref={video}
          style={{ height: "100%", width: "100%" }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/table1.mp4?alt=media&token=8cea5516-f804-4fc1-abc3-8d8666ce703d",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  handle: {
    position: "absolute",
    top: 1,
    left: "1%",
    marginTop: "2%",
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    zIndex: 1,
  },
});
