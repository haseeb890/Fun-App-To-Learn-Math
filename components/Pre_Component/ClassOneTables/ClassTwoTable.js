import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import { AntDesign } from "react-native-vector-icons";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ClassTwoTable({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Table 6", { language: "en" });

    async function childData() {
      console.log("inside");
      let a = await AsyncStorage.getItem("child");
      a = JSON.parse(a);

      console.log(a);
      setChild(a);
    }

    childData();
  }, []);
  const handleBack = () => {
    console.log("yes");
    navigation.navigate("ClassTwo");
  };
  const handleIndexChanged = (index) => {
    let text = null;
    if (index == 0) {
      text = "Table 6";
    } else if (index == 1) {
      text = "Table 7";
    } else if (index == 2) {
      text = "Table 8";
    } else if (index == 3) {
      text = "Table 9";
    } else if (index == 4) {
      text = "Table 10";
    }

    if (text != null) {
      Speech.speak(text, { language: "en" });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../../assets/Class2Back.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <Swiper
          showsButtons={false}
          showsPagination={true}
          dotColor={"white"}
          loop={false}
          onIndexChanged={(index) => handleIndexChanged(index)}
        >
          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/6.mp4?alt=media&token=dc5c17d4-e28a-4d78-b514-23b780ffd3a0",
                })
              }
            >
              <Image
                source={require("../../../assets/table6.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/7.mp4?alt=media&token=4c1d6230-901d-4955-b036-5fa7f618b078",
                })
              }
            >
              <Image
                source={require("../../../assets/table7.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 7</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/8.mp4?alt=media&token=28f77133-d0b6-41ba-99b2-4bcbe2f0a725",
                })
              }
            >
              <Image
                source={require("../../../assets/tiger1.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 8</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/9.mp4?alt=media&token=942eb538-2a64-4015-8a6e-4b26ab66dc18",
                })
              }
            >
              <Image
                source={require("../../../assets/table9.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/10.mp4?alt=media&token=250be25e-29b7-4242-a65a-b212da338d92",
                })
              }
            >
              <Image
                source={require("../../../assets/table10.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 10</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
        <TouchableOpacity style={styles.handle} onPress={handleBack}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  opacity: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
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
    color: "pink",
    alignSelf: "center",
  },
  image1: {
    width: "100%",
    height: "87%",
    alignSelf: "center",
    resizeMode: "stretch",
  },
});
