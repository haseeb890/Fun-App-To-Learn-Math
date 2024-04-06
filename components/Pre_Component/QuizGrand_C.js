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
import { AntDesign } from "react-native-vector-icons";
import { StatusBar } from "react-native";
import * as Haptics from "expo-haptics";

// import Pre_K from "./Pre_Component/Pre_K";
// import { parse } from "react-native-svg";
// import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
// import Animated from "react-native-reanimated";

export default function QuizGrand_C({ navigation }) {
  const ref = useRef();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const array = [];
  // const [score, setScore] = useState(0);
  const [val, setVal] = useState({
    counter: 0,
    score: 0,
  });

  let number1 = Math.floor(Math.random() * 101);
  const result = number1;

  let randomResult1 = Math.floor(Math.random() * 21);
  let randomResult2 = Math.floor(Math.random() * 21);

  while (result === randomResult1) {
    randomResult1 = Math.floor(Math.random() * 21);
  }
  while (result === randomResult2) {
    randomResult2 = Math.floor(Math.random() * 21);
  }

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
  const animRefs = useRef(array.map(() => useRef()));

  const animateView = (type, index) => {
    animRefs.current[index].current[type]();
  };
  // useEffect(() => {
  //   const text = `Lets do quiz`;
  //   Speech.speak(text, { language: "en" });
  // });

  // const handleSubmitForm = async () => {
  //   formData.append("child_id", child.child.id);
  //   formData.append("score", 15);
  //   formData.append("coin", 50);
  //   formData.append("quiz_no", 4);
  //   formData.append("total_marks", 10);
  //   formData.append("obtain_marks", val.score);
  //   formData.append("class_id", child.child.class);

  //   await axios
  //     .post("http://funapp.ahmedhousedeal.com/api/update_progress", formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     })
  //     .then(async (response) => {
  //       console.log(response.data);
  //       if (response.data.error) {
  //         console.log(response.data.msg);
  //       } else {
  //         console.log("inside Score Api");
  //         console.log(response.data);
  //         AsyncStorage.setItem(
  //           "quizData",
  //           JSON.stringify(response.data.updated_quizes)
  //         );
  //       }
  //     });
  // };

  useEffect(() => {
    if (val.counter == 10) {
      let CurrentMarks = {
        counter: 10,
        score: val.score,
      };
      // setTimeout(() => {
      //   let c = (val.score / 10) * 100;
      //   const childresult = {
      //     totalMarks: 10,
      //     obtainMarks: val.score,
      //   };
      //   setTimeout(async () => {
      //     handleSubmitForm();
      //   }, 1500);
      navigation.navigate("QuizGrand_A", { CurrentMarks });
      // }, 1000);
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
      // navigation.navigate("QuizGrand_C_K_Result");
      const text = ` Touch the ${number1.toFixed(0)},`;
      Speech.speak(text, { language: "en" });
    }
    return () => {
      Speech.stop();
    };
  }, [val]);
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
            {val.score} / 30
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: "5%",
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
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "green",
                }}
              >
                <Text
                  style={{
                    fontSize: 55,
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
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "blue",
                }}
              >
                <Text
                  style={{
                    fontSize: 55,
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
                  width: 100,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "yellow",
                }}
              >
                <Text
                  style={{ fontSize: 55, color: "red", fontWeight: "bold" }}
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
  view1: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "5%",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "5%",
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
    marginTop: "7%",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
});
