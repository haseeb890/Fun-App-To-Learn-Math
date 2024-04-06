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
// import { parse } from "react-native-svg";
// import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
// import Animated from "react-native-reanimated";

const boxWidth = 70;
const Test2 = () => {
  const ref = useRef();
  // const [animation, setAnimation] = useState("");
  const [one, setOne] = useState(false);
  const [dum, setDum] = useState(0);

  const [val, setVal] = useState({
    counter: 0,
    score: 0,
  });

  let number1 = Math.floor(Math.random() * 11);
  let number2 = Math.floor(Math.random() * 11);

  while (number2 === number1) {
    number2 = Math.random(0) * 10;
  }
  let randomResult1 = parseInt((Math.random() * 21).toFixed(0));
  let randomResult2 = parseInt((Math.random() * 21).toFixed(0));

  // console.log(randomResult1 + "---- " + randomResult2);
  // console.log(number1 + "---- " + number2);
  const result = number1 + number2;
  console.log("Result " + result);
  // console.log(result);

  while (result === randomResult1) {
    randomResult1 = parseInt(Math.random() * 21);
  }
  while (result === randomResult2) {
    randomResult2 = parseInt(Math.random() * 21);
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
    if (val.counter == 5) {
      setTimeout(() => {
        navigation.navigate("Pre_K");
      }, 1000);
    } else {
      const text = `Lets do quiz`;
      Speech.speak(text, { language: "en" });
    }
  }, [val]);

  useEffect(() => {
    const text = `${number1.toFixed(0)}, + ${number2.toFixed(0)}, = `;
    Speech.speak(text, { language: "en" });

    return () => {
      Speech.stop();
    };
  }, []);
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
      setTimeout(() => {
        setVal((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
        }));
      }, 1000);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/QuizCount.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            marginTop: 50,
            alignItems: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
            {val.score} / 5
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15%",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 60,
                color: "red",
                fontWeight: "bold",
              }}
            >
              {number1.toFixed(0)}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 60, color: "blue", fontWeight: "bold" }}>
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
            marginTop: "8%",
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
                  width: 70,
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
                  width: 70,
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
                  width: 70,
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
};

export default Test2;
const styles = StyleSheet.create({
  box: {
    height: boxWidth,
    width: boxWidth,
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
