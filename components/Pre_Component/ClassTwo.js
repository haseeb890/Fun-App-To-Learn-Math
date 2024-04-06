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

export default function ClassTwo({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Multiplication Tables", { language: "en" });
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
    navigation.navigate("Screenone");
  };
  const handleIndexChanged = (index) => {
    let text = null;
    if (index == 0) {
      text = "Multiplication Tables";
    } else if (index == 1) {
      text = "Table Quiz";
    } else if (index == 2) {
      text = "Division";
    } else if (index == 3) {
      text = "Division Quiz";
    } else if (index == 4) {
      text = "Relationel operators";
    } else if (index == 5) {
      text = "Operators Quiz";
    } else if (index == 6) {
      text = "Shapes";
    } else if (index == 7) {
      text = "NumberTypes";
    }

    if (text != null) {
      Speech.speak(text, { language: "en" });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../assets/Class2Back.gif")}
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
              onPress={() => navigation.navigate("ClassTwoTable")}
            >
              <Image
                source={require("../../assets/table6to10.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Multiplication Tables</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizTable_Two")}
            >
              <Image
                source={require("../../assets/tableQuiz.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("DivisionTwo")}
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
              onPress={() => navigation.navigate("QuizDivisionTwo")}
            >
              <Image
                source={require("../../assets/dividingQuiz.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/Operation.mp4?alt=media&token=cd2eb721-c739-4563-ad0b-3cf0340c656f",
                })
              }
            >
              <Image
                source={require("../../assets/tiger1.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Relational Operators</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => navigation.navigate("OperatorsQuiz")}
            >
              <Image
                source={require("../../assets/Quiz.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Operators Quiz</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/shapesAgain.mp4?alt=media&token=a40eae96-c8a4-4319-bfe3-68350d662ee0",
                })
              }
            >
              <Image
                source={require("../../assets/shapes.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Shapes</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/numbertsypye.mp4?alt=media&token=68d9d06b-3725-498e-9f0b-61c53e10b4e5",
                })
              }
            >
              <Image
                source={require("../../assets/numbertypes.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Number Types</Text>
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
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    // backgroundColor: "yellow",
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
