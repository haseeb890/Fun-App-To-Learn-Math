import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import WholeNumbers from "./WholeNumbers";
import AdditionPage from "./AdditionPage";
import SubtractionPage from "./SubtractionPage";
import ShapesPage from "./ShapesPage";
import { ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { AntDesign } from "react-native-vector-icons";
import { useState, useEffect } from "react";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Kinder({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Counting", { language: "en" });
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
    navigation.navigate("Screenone");
  };

  const handleIndexChanged = (index) => {
    let text = null;
    if (index == 0) {
      text = "Counting";
    } else if (index == 1) {
      text = "Counting Quiz";
    } else if (index == 2) {
      text = "Addition";
    } else if (index == 3) {
      text = "Addition Quiz";
    } else if (index == 4) {
      text = "Subtraction";
    } else if (index == 5) {
      text = "Subtraction Quiz";
    } else if (index == 6) {
      text = "Grand Quiz";
    }

    if (text != null) {
      Speech.speak(text, { language: "en" });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../assets/bdgif.gif")}
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
              onPress={() => navigation.navigate("WholeNumbers")}
            >
              <Image
                source={require("../../assets/Count.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizCount_K")}
            >
              <Image
                source={require("../../assets/countQuiz.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={{
                backgroundColor: "#4682b4",
                borderRadius: 10,
                padding: 10,
                alignSelf: "center",
                height: "68%",
                width: 240,
              }}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/additionKG.mp4?alt=media&token=bac51524-7765-4ed2-a2a7-1634865f049f",
                })
              }
            >
              <Image
                source={require("../../assets/Addkinder.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Addition</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizAdd")}
            >
              <Image
                source={require("../../assets/Quiz.gif")}
                style={styles.image1}
              />
              <Text style={styles.opacitytext}>Addition Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={{
                backgroundColor: "#4682b4",
                borderRadius: 10,
                padding: 10,
                alignSelf: "center",
                height: "68%",
                width: 240,
              }}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/subtAgain.mp4?alt=media&token=11a1a2f1-7b8c-4855-b13d-acf90b2548f7",
                })
              }
            >
              <Image
                source={require("../../assets/subtkinder.gif")}
                style={styles.image1}
              />
              <Text style={styles.opacitytext}>Subtraction</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizSubt")}
            >
              <Image
                source={require("../../assets/Quiz.gif")}
                style={styles.image1}
              />
              <Text style={styles.opacitytext}>Subtraction Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={{
                backgroundColor: "#4682b4",
                borderRadius: 10,
                padding: 10,
                // marginTop: 15,
                alignSelf: "center",
                height: "68%",
                width: 240,
              }}
              onPress={() => navigation.navigate("QuizGrand_C")}
            >
              <Image
                source={require("../../assets/GrandQuiz.gif")}
                style={styles.image1}
              />
              <Text style={styles.opacitytext}>Grand Quiz</Text>
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
