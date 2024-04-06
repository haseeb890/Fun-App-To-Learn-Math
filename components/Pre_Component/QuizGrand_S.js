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
export default function QuizGrand_S({ navigation, route }) {
  const ref = useRef();
  // const [animation, setAnimation] = useState("");

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

    childData();
  }, []);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  let number1 = Math.floor(Math.random() * 41);
  let number2 = Math.floor(Math.random() * 51);

  while (number2 >= number1) {
    number2 = Math.floor(Math.random(0) * 10);
  }
  let randomResult1 = Math.floor(Math.random() * 41);
  let randomResult2 = Math.floor(Math.random() * 51);

  // console.log(randomResult1 + "---- " + randomResult2);
  // console.log(number1 + "---- " + number2);
  const result = number1 - number2;
  console.log("Result " + result);
  console.log("number1 " + number1);
  console.log("number2 " + number2);

  // console.log(result);

  while (result === randomResult1) {
    randomResult1 = Math.floor(Math.random() * 21);
  }
  while (result === randomResult2) {
    randomResult2 = Math.floor(Math.random() * 21);
  }
  const array = [];
  for (let i = 0; i < 3; i++) {
    let a = (Math.random() * 2).toFixed(0);
    if (i > 0) {
      while (a === array[0] || a === array[1]) {
        a = (Math.random() * 2).toFixed(0);
      }
    }
    array[i] = a;
    // console.log(array[i] + " arrays");
  }
  // console.log(result + "/" + randomResult1 + "/" + randomResult2);
  const arrayOfResultValue = [result, randomResult1, randomResult2];
  const scaleRefs = arrayOfResultValue
    ? arrayOfResultValue.map(() => useRef(new Animated.Value(1)).current)
    : [];

  const handleSubmitForm = async () => {
    const formData = new FormData();
    formData.append("child_id", child.child.id);
    formData.append("coin", 200);
    formData.append("quiz_no", 4);
    formData.append("total_marks", 30);
    formData.append("obtain_marks", val.score);
    formData.append("class_id", 2);
    if (child.enrollment.child_class_id === 2) {
      formData.append("score", 40);
    } else {
      formData.append("score", 0);
    }

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
          b.kindergarden = response.data.updated_quizes.kindergarden;
          AsyncStorage.setItem("coin", JSON.stringify(response.data.coin));
          AsyncStorage.setItem("score", JSON.stringify(response.data.score));
          AsyncStorage.setItem("quizData", JSON.stringify(b));
        }
      });
  };

  useEffect(() => {
    const { CurrentMarks } = route.params;
    console.log(CurrentMarks);
    setVal(CurrentMarks);
  }, []);

  useEffect(() => {
    if (val.counter == 30) {
      setTimeout(() => {
        // let c = (val.score / 5) * 100;
        const childresult = {
          totalMarks: 30,
          obtainMarks: val.score,
        };
        setTimeout(async () => {
          handleSubmitForm();
        }, 1500);
        navigation.navigate("QuizGrand_K_Result", { childresult: childresult });
      }, 1000);
    } else if (val.counter == 20) {
      const text = `Question 21`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 21) {
      const text = `Question 22`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 22) {
      const text = `Question 23`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 23) {
      const text = `Question 24`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 24) {
      const text = `Question 25`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 25) {
      const text = `Question 26`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 26) {
      const text = `Question 27`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 27) {
      const text = `Question 28`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 28) {
      const text = `Question 29`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 29) {
      const text = `Question 30`;
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
    if (val.counter != 30) {
      // navigation.navigate("QuizGrand");
      const text = `${number1.toFixed(0)},minus ${number2.toFixed(0)}, =`;
      Speech.speak(text, { language: "en" });
    }
    return () => {
      Speech.stop();
    };
  }, [val]);
  // const handleAnswer = (selectedOption, index) => {
  //   console.log(selectedOption);
  //   const selectedValue = parseFloat(selectedOption);
  //   console.log({ selectedOption, result });

  //   if (selectedValue == result) {
  //     Speech.speak("Correct!", { language: "en" });

  //     Animated.spring(scaleRefs[index], {
  //       toValue: 2,
  //       duration: 200,
  //       useNativeDriver: true,
  //     }).start(() => {
  //       // Reset the scale to 1 after the animation completes
  //       Animated.spring(scaleRefs[index], {
  //         toValue: 1,
  //         duration: 0,
  //         useNativeDriver: true,
  //       }).start();
  //     });
  //   } else {
  //     setOne(true);
  //     let type = "wobble";
  //     setAnimation(type);
  //     ref.current[type]();
  //     setOne(false);
  //     Speech.speak("Incorrect!", { language: "en" });
  //   }
  // };

  const animRefs = useRef(array.map(() => useRef()));

  const animateView = (type, index) => {
    animRefs.current[index].current[type]();
  };

  const handleAnswer = (selectedOption, index) => {
    console.log(selectedOption + " yess");
    const selectedValue = parseFloat(selectedOption);
    console.log({ selectedValue, result });

    if (selectedValue === result) {
      Speech.speak("Correct!", { language: "en" });
      let type = "bounce";
      animateView(type, index);
      setTimeout(() => {
        setVal((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
          score: prevState.score + 1,
        }));
      }, 1000);
    } else {
      let type = "wobble";
      animateView(type, index);
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
  const handleBack = () => {
    navigation.navigate("Kinder");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../assets/QuizCount.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.view1}>
          {val.counter == 20 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 21
            </Animated.Text>
          ) : val.counter == 21 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 22
            </Animated.Text>
          ) : val.counter == 22 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 23
            </Animated.Text>
          ) : val.counter == 23 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 24
            </Animated.Text>
          ) : val.counter == 24 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 25
            </Animated.Text>
          ) : val.counter == 25 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 26
            </Animated.Text>
          ) : val.counter == 26 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 27
            </Animated.Text>
          ) : val.counter == 27 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 28
            </Animated.Text>
          ) : val.counter == 28 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 29
            </Animated.Text>
          ) : (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 30
            </Animated.Text>
          )}
        </View>
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>
        <View style={styles.score}>
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
            {val.score} / 30
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "%",
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
              {number1.toFixed(0)}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 55, color: "blue", fontWeight: "bold" }}>
              {" "}
              -{" "}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 55, color: "red", fontWeight: "bold" }}>
              {number2.toFixed(0)}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 55, fontWeight: "bold" }}> = </Text>
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
          <TouchableOpacity
            key={0}
            onPress={() => handleAnswer(arrayOfResultValue[array[0]], 0)}
          >
            <Animatable.View
              ref={animRefs.current[0]}
              style={[styles.box, { transform: [{ scale: scaleRefs[0] }] }]}
              // animation={animation} // Use the shake animation here
            >
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
                    fontSize: 48,
                    fontWeight: "bold",
                    color: "yellow",
                  }}
                >
                  {arrayOfResultValue[array[0]]}
                </Text>
              </View>
            </Animatable.View>
          </TouchableOpacity>

          <TouchableOpacity
            key={1}
            onPress={() => handleAnswer(arrayOfResultValue[array[1]], 1)}
            // onPress={() => handleAnswer(arrayOfResultValue[array[1]])}
            // style={{ width: 100, height: 100, backgroundColor: "black" }}
          >
            <Animatable.View
              ref={animRefs.current[1]}
              style={[styles.box, { transform: [{ scale: scaleRefs[1] }] }]}
              // animation={animation} // Use the shake animation here
            >
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
                    fontSize: 48,
                    fontWeight: "bold",
                    color: "yellow",
                  }}
                >
                  {arrayOfResultValue[array[1]]}
                </Text>
              </View>
            </Animatable.View>
          </TouchableOpacity>

          <TouchableOpacity
            key={2}
            onPress={() => handleAnswer(arrayOfResultValue[array[2]], 2)}

            // style={{ width: 100, height: 100, backgroundColor: "black" }}
          >
            <Animatable.View
              ref={animRefs.current[2]}
              style={[styles.box, { transform: [{ scale: scaleRefs[2] }] }]}
              // animation={animation} // Use the shake animation here
            >
              <View
                style={{
                  borderRadius: 10,
                  width: 85,
                  height: 70,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "yellow",
                }}
              >
                <Text
                  style={{ fontSize: 48, color: "red", fontWeight: "bold" }}
                >
                  {arrayOfResultValue[array[2]]}
                </Text>
              </View>
            </Animatable.View>
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
    fontSize: 30,
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

// import React, { useRef, useState } from "react";
// import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
// import * as Animatable from "react-native-animatable";

// const types = [
//   "bounce",
//   "flash",
//   "jello",
//   "pulse",
//   "rotate",
//   "rubberBand",
//   "shake",
//   "swing",
//   "tada",
//   "wobble",
// ];
// export default function Test2() {
//   const ref = useRef();
//   const [animation, setAnimation] = useState("");
//   const animate = (type) => {
//     setAnimation(type);
//     ref.current[type]();
//   };
//   return (
//     <View style={styles.container}>
//       <Animatable.View style={styles.view} ref={ref}>
//         <Text style={styles.type}>{animation}</Text>
//       </Animatable.View>
//       <ScrollView>
//         {types.map((type) => (
//           <View key={type}>
//             <Button title={type} onPress={() => animate(type)} />
//             <View style={{ height: 5 }} />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   view: {
//     height: 100,
//     margin: 20,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   type: {
//     color: "#fff",
//     fontSize: 17,
//   },
// });
