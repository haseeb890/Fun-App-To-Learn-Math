import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import * as Speech from "expo-speech";
import React from "react";
import { AntDesign } from "react-native-vector-icons";
import { Video, ResizeMode } from "expo-av";
import { useState, useEffect, useRef } from "react";
import Swiper from "react-native-swiper";

export default function Shapes({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    const text = "Lets learn about shapes";
    Speech.speak(text, { language: "en" });
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
    navigation.navigate("Pre_K");
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/pre_back.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <Swiper
          showsButtons={false}
          showsPagination={true}
          dotColor={"white"}
          loop={false}
        >
          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("VideoScreen", { url: "" })}
            >
              {/* <LottieView source={require('../../assets/Homeback.json')} style={{wid}} autoPlay loop />  */}
              <Image
                source={require("../../assets/tiger.gif")}
                style={styles.image1}
              />
              <Text style={styles.opacitytext}>Shapes</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  opacity: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    // marginTop: 15,
    alignSelf: "center",
    height: "68%",
    width: 240,
  },
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
  },
  opacitytext: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 5,
    alignSelf: "center",
    color: "pink",
  },
  image1: {
    width: "100%",
    height: "87%",
    alignSelf: "center",
    resizeMode: "stretch",
  },
});

/* <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View> */
