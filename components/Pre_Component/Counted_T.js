import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "react-native-vector-icons";
import { Video, ResizeMode } from "expo-av";
import { useState, useEffect, useRef } from "react";
import { StatusBar } from "react-native";

export default function Counted_T({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [child, setChild] = useState(null);

  useEffect(() => {
    async function childData() {
      console.log("inside");
      let a = await AsyncStorage.getItem("child");
      a = JSON.parse(a);

      console.log(a);
      setChild(a);
      // let b = JSON.parse(a);
    }

    childData();
  }, []);

  const handleBack = () => {
    navigation.navigate("Counting");
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
        source={require("../../assets/pre_back.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>

        <Video
          ref={video}
          style={{ height: "100%", width: "100%" }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/Counting1to20high.mp4?alt=media&token=65c5a6c1-f55f-496a-9abf-d501e9bf22dc",
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
