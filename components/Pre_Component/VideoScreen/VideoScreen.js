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
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function VideoScreen({ navigation, route }) {
  const { url } = route.params;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [child, setChild] = useState(null);

  useEffect(() => {
    async function childData() {
      console.log("inside");
      let a = await AsyncStorage.getItem("child");
      a = await JSON.parse(a);

      console.log(a);
      setChild(a);
      // let b = JSON.parse(a);
    }

    childData();
  }, []);

  const handleBack = () => {
    navigation.navigate(goBack());
  };

  useEffect(() => {
    if (video.current) {
      video.current.playAsync();
    }
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <StatusBar hidden />
      <TouchableOpacity
        style={styles.handle}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="back" size={35} color="white" />
      </TouchableOpacity>
      <Video
        ref={video}
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: url,
        }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        // isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
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
