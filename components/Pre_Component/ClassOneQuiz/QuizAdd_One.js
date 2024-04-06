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
export default function QuizAdd_One({ navigation }) {
  const ref = useRef();
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

    childData();
  }, []);

  const handleSubmitForm = async (childresult) => {
    const formData = new FormData();
    formData.append("child_id", child.child.id);
    formData.append("coin", 100);
    formData.append("quiz_no", 1);
    formData.append("total_marks", 10);
    formData.append("obtain_marks", val.score);
    formData.append("class_id", 3);
    if (child.enrollment.child_class_id === 3) {
      formData.append("score", 10);
    } else {
      formData.append("score", 0);
    }

    await axios
      .post("http://funapp.ahmedhousedeal.com/api/update_progress", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(async (response) => {
        console.log("==================================================");
        console.log(response.data);
        console.log("==================================================");
        if (response.data.error) {
          console.log(response.data.msg);
        } else {
          console.log("inside Score Api");
          console.log(response.data);
          let b = await AsyncStorage.getItem("quizData");
          b = JSON.parse(b);
          b.one = response.data.updated_quizes.one;
          AsyncStorage.setItem("coin", JSON.stringify(response.data.coin));
          AsyncStorage.setItem("score", JSON.stringify(response.data.score));
          console.log(score);
          AsyncStorage.setItem("quizData", JSON.stringify(b));
          // .then(() => {
          //   // Value was set successfully, you can navigate here
          //   navigation.navigate("QuizAdd_One_Result", {
          //     childresult: childresult,
          //   });
          // })
          // .catch((error) => {
          //   // Handle any errors that occur during AsyncStorage operation
          //   console.error("Error setting item in AsyncStorage:", error);
          // });
        }
      });
  };

  let number1 = Math.floor(Math.random() * 51);
  let number2 = Math.floor(Math.random() * 51);

  while (number2 === number1) {
    number2 = Math.floor(Math.random() * 51);
  }
  let randomResult1 = Math.floor(Math.random() * 21);
  let randomResult2 = Math.floor(Math.random() * 51);

  while (randomResult2 === randomResult1) {
    randomResult2 = Math.floor(Math.random() * 51);
  }

  const result = number1 + number2;
  console.log("Result " + result);

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
  }
  const arrayOfResultValue = [result, randomResult1, randomResult2];
  const scaleRefs = arrayOfResultValue
    ? arrayOfResultValue.map(() => useRef(new Animated.Value(1)).current)
    : [];
  useEffect(() => {
    if (val.counter == 10) {
      setTimeout(async () => {
        // let c = (val.score / 5) * 100;
        const childresult = {
          totalMarks: 10,
          obtainMarks: val.score,
        };
        setTimeout(async () => {
          handleSubmitForm();
        }, 1500);
        navigation.navigate("QuizAdd_One_Result", { childresult: childresult });
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

      const text = `${number1.toFixed(0)},+ ${number2.toFixed(0)}, =`;
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
    navigation.navigate("ClassOne");
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
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
            {val.score} / 10
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
              +{" "}
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
