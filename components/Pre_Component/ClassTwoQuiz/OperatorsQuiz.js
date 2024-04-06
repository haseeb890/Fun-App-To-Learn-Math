import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Speech from "expo-speech";
import * as Animatable from "react-native-animatable";
import * as Haptics from "expo-haptics";
import { AntDesign } from "react-native-vector-icons";
import { StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const boxWidth = 70;

export default function OperatorsQuiz({ navigation }) {
  // const [animation, setAnimation] = useState("");

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [child, setChild] = useState(null);

  const [val, setVal] = useState({
    counter: 0,
    score: 0,
  });

  useEffect(() => {
    async function childData() {
      console.log("inside");
      let a = await AsyncStorage.getItem("child");
      a = JSON.parse(a);

      console.log(a);

      setChild(a);
      // let b = JSON.parse(a);
    }
    // generateRandomNumbers();
    childData();
  }, []);

  const handleSubmitForm = async () => {
    const formData = new FormData();
    formData.append("child_id", child.child.id);
    formData.append("score", 20);
    formData.append("coin", 200);
    formData.append("quiz_no", 3);
    formData.append("total_marks", 10);
    formData.append("obtain_marks", val.score);
    formData.append("class_id", 4);

    await axios
      .post("http://funapp.ahmedhousedeal.com/api/update_progress", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(async (response) => {
        console.log(response.data);
        if (response.data.error) {
          console.log(response.data.msg);
        } else {
          console.log("inside Score Api");
          console.log(response.data);
          let b = await AsyncStorage.getItem("quizData");
          b = JSON.parse(b);
          b.two = response.data.updated_quizes.two;
          AsyncStorage.setItem("coin", JSON.stringify(response.data.coin));
          AsyncStorage.setItem("score", JSON.stringify(response.data.score));
          AsyncStorage.setItem("quizData", JSON.stringify(b));
        }
      });
  };

  const symbols = ["<", "=", ">"];
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  // const [selectedSymbol, setSelectedSymbol] = useState("");
  const min = 1;
  const max = 100;
  let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
  let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const generateRandomNumbers = () => {
    // setNum1(randomNum1);
    // setNum2(randomNum2);
    // setSelectedSymbol(randomSymbol);
  };

  let result = false;
  switch (randomSymbol) {
    case "<":
      result = randomNum1 < randomNum2;
      break;
    case "=":
      result = randomNum1 === randomNum2;
      break;
    case ">":
      result = randomNum1 > randomNum2;
      break;
    default:
      result = false;
  }

  // const array = [];
  // for (let i = 0; i < 2; i++) {
  //   let a = false;

  //   if (i > 0) {
  //     while (a === array[0] || a === array[1]) {
  //       a = true;
  //     }
  //   }
  //   array[i] = a;
  // console.log(array[i] + " arrays");
  // }
  // console.log(result + "/" + randomResult1 + "/" + randomResult2);
  // const arrayOfResultValue = [result, true];
  // const scaleRefs = arrayOfResultValue
  //   ? arrayOfResultValue.map(() => useRef(new Animated.Value(1)).current)
  //   : [];

  useEffect(() => {
    if (val.counter == 10) {
      setTimeout(() => {
        // let c = (val.score / 5) * 100;
        const childresult = {
          totalMarks: 10,
          obtainMarks: val.score,
        };
        setTimeout(async () => {
          handleSubmitForm();
        }, 1500);
        navigation.navigate("QuizOperators_Result", {
          childresult: childresult,
        });
      }, 1000);
    } else if (val.counter == 0) {
      const text1 = `Lets do quiz`;
      Speech.speak(text1, { language: "en" });
      const text = `Question 1`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 1) {
      const text = `Question 2`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 2) {
      const text = `Question 3`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 3) {
      const text = `Question 4`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 4) {
      const text = `Question 5`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 5) {
      const text = `Question 6`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 6) {
      const text = `Question 7`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 7) {
      const text = `Question 8`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 8) {
      const text = `Question 9`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 9) {
      const text = `Question 10`;
      Speech.speak(text, { language: "en" });
    }
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }),

      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [val]);

  useEffect(() => {
    if (val.counter != 10) {
      // navigation.navigate("ClassOne");
      const text = `${randomNum1}, ${randomSymbol}, ${randomNum2}`;
      Speech.speak(text, { language: "en" });
    }
    return () => {
      Speech.stop();
    };
  }, [val]);

  // const animRefs = useRef(array.map(() => useRef()));
  // const ref = useRef();
  // const animateView = (type, index) => {
  //   animRefs.current[index].current[type]();
  // };

  const checkAnswer = (userAnswer) => {
    if (userAnswer === result) {
      console.log("Correct");
      Speech.speak("Correct!", { language: "en" });
      // let type = "bounce";
      // animateView(type, index);
      setTimeout(() => {
        setVal((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
          score: prevState.score + 1,
        }));
      }, 1000);
    } else {
      console.log("Incorrect");
      // let type = "wobble";
      // animateView(type, index);
      Speech.speak("Incorrect!", { language: "en" });
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setTimeout(() => {
        setVal((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
        }));
      }, 1000);
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // Reset the state to its initial values here
      setVal({
        counter: 0,
        score: 0,
      });
    });

    return unsubscribe; // Cleanup the listener when the component is unmounted
  }, [navigation]);
  const handleBack = () => {
    navigation.navigate("ClassTwo");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ImageBackground
        source={require("../../../assets/QuizCount.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.view1}>
          {val.counter == 0 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 1
            </Animated.Text>
          ) : val.counter == 1 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 2
            </Animated.Text>
          ) : val.counter == 2 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 3
            </Animated.Text>
          ) : val.counter == 3 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 4
            </Animated.Text>
          ) : val.counter == 4 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 5
            </Animated.Text>
          ) : val.counter == 5 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 6
            </Animated.Text>
          ) : val.counter == 6 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 7
            </Animated.Text>
          ) : val.counter == 7 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 8
            </Animated.Text>
          ) : val.counter == 8 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 9
            </Animated.Text>
          ) : (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 10
            </Animated.Text>
          )}
        </View>
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>
        <View style={styles.score}>
          <Text style={{ fontSize: 30, color: "black", fontWeight: "bold" }}>
            {val.score} / 10
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 55,
                color: "red",
                fontWeight: "bold",
              }}
            >
              {randomNum1}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 55, color: "blue", fontWeight: "bold" }}>
              {" "}
              {randomSymbol}{" "}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 55, color: "red", fontWeight: "bold" }}>
              {randomNum2}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: "6%",
            width: "50%",
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => checkAnswer(true)}>
            <View
              style={{
                borderRadius: 10,
                width: 85,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "green",
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "600",
                  color: "yellow",
                }}
              >
                True
              </Text>
            </View>
            {/* </Animatable.View> */}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => checkAnswer(false)}>
            <View
              style={{
                borderRadius: 10,
                width: 85,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "blue",
              }}
            >
              <Text
                style={{
                  fontSize: 35,
                  fontWeight: "600",
                  color: "yellow",
                }}
              >
                False
              </Text>
            </View>
            {/* </Animatable.View> */}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: boxWidth,
    width: boxWidth,
  },
  view1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  text1: {
    fontSize: 28,
    fontWeight: "bold",
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
  score: {
    width: "100%",
    height: 50,
    marginTop: "5%",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
});
