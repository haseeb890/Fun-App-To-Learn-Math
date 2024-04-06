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
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Speech from "expo-speech";
export default function DivisionTwo({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Division 6", { language: "en" });
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
    console.log("yes");
    navigation.navigate("ClassTwo");
  };
  const handleIndexChanged = (index) => {
    let text = null;
    if (index == 0) {
      text = "Division 6";
    } else if (index == 1) {
      text = "Division 7";
    } else if (index == 2) {
      text = "Division 8";
    } else if (index == 3) {
      text = "Division 9";
    } else if (index == 4) {
      text = "Division 10";
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
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide6.mp4?alt=media&token=77a444a9-c349-4312-bb1a-8c4d21052632",
                })
              }
            >
              <Image
                source={require("../../../assets/divide6.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide7.mp4?alt=media&token=085e9a20-b476-4ef2-8503-ad03c5708a8c",
                })
              }
            >
              <Image
                source={require("../../../assets/divide7.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 7</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide8.mp4?alt=media&token=7bebc516-496e-47a1-92fc-e9a332a0ed4e",
                })
              }
            >
              <Image
                source={require("../../../assets/divide8.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 8</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide9.mp4?alt=media&token=5359cf24-0e97-4aa8-9221-86e5dadd219b",
                })
              }
            >
              <Image
                source={require("../../../assets/divide9.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide10.mp4?alt=media&token=51471ab3-f096-4b69-97e7-123c153bca41",
                })
              }
            >
              <Image
                source={require("../../../assets/divide10.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 10</Text>
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
