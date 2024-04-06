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

const boxWidth = 70;
export default function QG_One_S({ navigation, route }) {
  const ref = useRef();
  // const [animation, setAnimation] = useState("");

  const [val, setVal] = useState({
    counter: 0,
    score: 0,
  });
  const scaleAnim = useRef(new Animated.Value(1)).current;

  let number1 = Math.floor(Math.random() * 51);
  let number2 = Math.floor(Math.random() * 101);

  while (number2 >= number1) {
    number2 = Math.floor(Math.random(0) * 101);
  }
  let randomResult1 = Math.floor(Math.random() * 21);
  let randomResult2 = Math.floor(Math.random() * 51);

  // console.log(randomResult1 + "---- " + randomResult2);
  // console.log(number1 + "---- " + number2);
  const result = number1 - number2;
  console.log("Result " + result);
  // console.log(result);

  while (result === randomResult1) {
    randomResult1 = Math.floor(Math.random() * 21);
  }
  while (result === randomResult2) {
    randomResult2 = Math.floor(Math.random() * 31);
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

  useEffect(() => {
    const { CurrentMarks } = route.params;
    console.log(CurrentMarks);
    setVal(CurrentMarks);
  }, []);

  useEffect(() => {
    if (val.counter == 20) {
      let CurrentMarks = {
        counter: 20,
        score: val.score,
      };
      // setTimeout(() => {
      navigation.navigate("QG_One_M", { CurrentMarks });
      // }, 1000);
    } else if (val.counter == 10) {
      const text = `Question 11`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 11) {
      const text = `Question 12`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 12) {
      const text = `Question 13`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 13) {
      const text = `Question 14`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 14) {
      const text = `Question 15`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 15) {
      const text = `Question 16`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 16) {
      const text = `Question 17`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 17) {
      const text = `Question 18`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 18) {
      const text = `Question 19`;
      Speech.speak(text, { language: "en" });
    } else if (val.counter == 19) {
      const text = `Question 20`;
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
    if (val.counter != 20) {
      // navigation.navigate("QuizGrand_One");
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
    navigation.navigate("ClassOne");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../../assets/QuizCount.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.view1}>
          {val.counter == 10 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 11
            </Animated.Text>
          ) : val.counter == 12 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 13
            </Animated.Text>
          ) : val.counter == 13 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 14
            </Animated.Text>
          ) : val.counter == 14 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 15
            </Animated.Text>
          ) : val.counter == 15 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 16
            </Animated.Text>
          ) : val.counter == 16 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 17
            </Animated.Text>
          ) : val.counter == 17 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 18
            </Animated.Text>
          ) : val.counter == 18 ? (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 19
            </Animated.Text>
          ) : (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 20
            </Animated.Text>
          )}
        </View>
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>
        <View style={styles.score}>
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
            {val.score} / 40
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
