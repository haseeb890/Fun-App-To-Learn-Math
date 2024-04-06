import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { Counting } from "./Counting";
import { LottieView } from "lottie-react-native";
import { ImageBackground } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import Swiper from "react-native-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Speech from "expo-speech";

export default function Pre_K({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Counting 1 to 10", { language: "en" });
    async function childData() {
      console.log("inside");
      let a = await AsyncStorage.getItem("child");
      a = await JSON.parse(a);

      console.log(a.child.class);
      setChild(a);
    }

    childData();
  }, []);
  const handleBack = () => {
    navigation.navigate("Screenone");
  };

  const handleIndexChanged = (index) => {
    let text = null;
    if (index == 0) {
      text = "Counting 1 to 10";
    } else if (index == 1) {
      text = "Counting 1 to 20";
    } else if (index == 2) {
      text = "Counting Quiz";
    }

    if (text != null) {
      Speech.speak(text, { language: "en" });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../assets/PreBack.gif")}
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
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/Counting1to10.mp4?alt=media&token=c3fe8f55-3064-41c1-866e-457c18988cc1",
                })
              }
            >
              <Image
                source={require("../../assets/Counting10.gif")}
                style={styles.image1}
              />
              <Text style={styles.opacitytext}>Counting 1 to 10</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/Counting1to20high.mp4?alt=media&token=65c5a6c1-f55f-496a-9abf-d501e9bf22dc",
                })
              }
            >
              <Image
                source={require("../../assets/Counting20.gif")}
                style={styles.image1}
              />
              <Text style={styles.opacitytext}>Counting 1 to 20</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizCount")}
            >
              <Image
                source={require("../../assets/countQuiz.gif")}
                style={styles.image1}
              />
              <Text style={styles.opacitytext}>Counting Quiz</Text>
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
