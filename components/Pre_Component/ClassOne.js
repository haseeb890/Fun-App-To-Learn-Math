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
import AdditionOne from "./AdditionOne";
import SubtractionOne from "./SubtractionOne";
import MultiplicationOne from "./MultiplicationOne";
import DivisionOne from "./ClassOneDivision/DivisionOne";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ClassOne({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Addition", { language: "en" });
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
    navigation.navigate("Screenone");
  };
  const handleIndexChanged = (index) => {
    let text = null;
    if (index == 0) {
      text = "Addition";
    } else if (index == 1) {
      text = "Addition Quiz";
    } else if (index == 2) {
      text = "Subtraction";
    } else if (index == 3) {
      text = "Subtraction Quiz";
    } else if (index == 4) {
      text = "Multiplication Tables";
    } else if (index == 5) {
      text = "Table Quiz";
    } else if (index == 6) {
      text = "Multiplication";
    } else if (index == 7) {
      text = "Multiplication Quiz";
    } else if (index == 8) {
      text = "Division";
    } else if (index == 9) {
      text = "Division Quiz";
    } else if (index == 10) {
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
        source={require("../../assets/Class1Back.gif")}
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
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/additionClass1.mp4?alt=media&token=0b26482b-58b2-49df-940d-dd5b24c93948",
                })
              }
            >
              <Image
                source={require("../../assets/Addition.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Addition</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizAdd_One")}
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
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/subclass1.mp4?alt=media&token=3507b85a-a5b7-4348-88f5-0bbaa9229f01",
                })
              }
            >
              <Image
                source={require("../../assets/subt.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Subtraction</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizSubt_One")}
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
              style={styles.opacity}
              onPress={() => navigation.navigate("ClassOneTable")}
            >
              <Image
                source={require("../../assets/table1to5.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Multiplication Tables</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizTable_One")}
            >
              <Image
                source={require("../../assets/tableQuiz.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Tables Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/multiply.mp4?alt=media&token=fb07614d-1351-4a40-ba80-a0ed37e9b734",
                })
              }
            >
              <Image
                source={require("../../assets/mult.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Multiplication</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizMult_One")}
            >
              <Image
                source={require("../../assets/Quiz.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Multiplication Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("DivisionOne")}
            >
              <Image
                source={require("../../assets/divide.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizDivi_One")}
            >
              <Image
                source={require("../../assets/Quiz.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QG_One_A")}
            >
              <Image
                source={require("../../assets/GrandQuiz.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Grand Quiz</Text>
            </TouchableOpacity>
          </View>
        </Swiper>

        <TouchableOpacity onPress={() => handleBack()} style={styles.handle}>
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
