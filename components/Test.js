// import React, { useEffect, useRef, useState } from "react";
// import {
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   Animated,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import * as Speech from "expo-speech";
// // import { parse } from "react-native-svg";
// // import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
// // import Animated from "react-native-reanimated";

// const boxWidth = 70;
// let number1 = parseInt(Math.random() * 10);
// let number2 = parseInt(Math.random() * 10);

// while (number2 === number1) {
//   number2 = Math.random(0) * 10;
// }
// let randomResult1 = parseInt((Math.random() * 21).toFixed(0));
// let randomResult2 = parseInt((Math.random() * 21).toFixed(0));

// const result = number1 + number2;
// // console.log(result);

// while (result === randomResult1) {
//   randomResult1 = parseInt(Math.random() * 21);
// }
// while (result === randomResult2) {
//   randomResult2 = parseInt(Math.random() * 21);
// }
// const array = [];
// for (let i = 0; i < 3; i++) {
//   let a = (Math.random() * 2).toFixed(0);
//   if (i > 0) {
//     while (a === array[0] || a === array[1]) {
//       a = (Math.random() * 2).toFixed(0);
//     }
//   }
//   array[i] = a;
//   // console.log(array[i] + " arrays");
// }
// // console.log(result + "/" + randomResult1 + "/" + randomResult2);

// const Test = () => {
//   const arrayOfResultValue = [result, randomResult1, randomResult2];
//   const [temp, setTemp] = useState(false);
//   const [one, setOne] = useState(false);
//   const [one1, setOne1] = useState(false);
//   const [one2, setOne2] = useState(false);
//   useEffect(() => {
//     const text = `Lets do quiz`;
//     Speech.speak(text, { language: "en" });
//   }, []);

//   useEffect(() => {
//     const text = `${number1.toFixed(0)}, + ${number2.toFixed(0)}, = `;
//     Speech.speak(text, { language: "en" });

//     return () => {
//       Speech.stop();
//     };
//   }, []);
//   const handleAnswer = (selectedOption) => {
//     console.log(selectedOption);
//     // const selectedValue = parseFloat(selectedOption);
//     // console.log({ selectedOption, result });

//     // if (selectedValue == result) {
//     //   Speech.speak("Correct!", { language: "en" });
//     // } else {
//     //   Speech.speak("Incorrect!", { language: "en" });
//     // }
//   };
//   const scale = useRef(new Animated.Value(1)).current;

//   const [scaled, setScaled] = useState(false);
//   const animate = (para) => {
//     console.log("---------------------------------------------");
//     console.log(para);
//     console.log(result);
//     console.log(para[0]);
//     console.log(para[1]);

//     console.log("---------------------------------------------");

//     if ((para[0] === result) & (para[1] === 0)) {
//       console.log("in the array");
//       setOne(true);
//       setOne1(false);
//       setOne2(false);
//     } else if ((para[0] === result) & (para[1] === 1)) {
//       console.log("in the array1");

//       setOne1(true);
//       setOne(false);
//       setOne2(false);
//     } else if ((para[0] === result) & (para[1] === 2)) {
//       console.log("in the array2");

//       setOne2(true);
//       setOne(false);
//       setOne1(false);
//     }
//     Animated.spring(scale, {
//       toValue: scaled ? 1 : 2,
//       duration: 200,
//       useNativeDriver: true,
//     }).start();
//     setScaled(!scaled);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <ImageBackground
//         source={require("../assets/background_yello.gif")}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: "15%",
//           }}
//         >
//           <View>
//             <Text
//               style={{
//                 fontSize: 60,
//                 color: "red",
//                 fontWeight: "bold",
//               }}
//             >
//               {number1.toFixed(0)}
//             </Text>
//           </View>
//           <View>
//             <Text style={{ fontSize: 60, color: "blue", fontWeight: "bold" }}>
//               {" "}
//               +{" "}
//             </Text>
//           </View>
//           <View>
//             <Text style={{ fontSize: 55, color: "red", fontWeight: "bold" }}>
//               {number2.toFixed(0)}
//             </Text>
//           </View>
//           <View>
//             <Text style={{ fontSize: 55, fontWeight: "bold" }}> = </Text>
//           </View>
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             backgroundColor: "red",
//             marginTop: "8%",
//             width: "65%",
//             alignSelf: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <TouchableOpacity
//             // style={{ width: 100, height: 100, backgroundColor: "black" }}
//             onPress={() => animate([arrayOfResultValue[array[0]], 0])}
//           >
//             {one === true ? (
//               <Animated.View style={[styles.box, { transform: [{ scale }] }]}>
//                 <View
//                   style={{
//                     borderRadius: 10,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     backgroundColor: "green",
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontSize: 55,
//                       fontWeight: "bold",
//                       color: "yellow",
//                     }}
//                   >
//                     {arrayOfResultValue[array[0]]}
//                   </Text>
//                 </View>
//               </Animated.View>
//             ) : (
//               <View
//                 style={{
//                   borderRadius: 10,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   backgroundColor: "green",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontSize: 55,
//                     fontWeight: "bold",
//                     color: "yellow",
//                   }}
//                 >
//                   {arrayOfResultValue[array[0]]}
//                 </Text>
//               </View>
//             )}
//           </TouchableOpacity>

//           <TouchableOpacity
//             // onPress={() => handleAnswer(arrayOfResultValue[array[1]])}
//             // style={{ width: 100, height: 100, backgroundColor: "black" }}
//             onPress={() => animate([arrayOfResultValue[array[1]], 1])}
//           >
//             {one1 === true ? (
//               <Animated.View style={[styles.box, { transform: [{ scale }] }]}>
//                 <View
//                   style={{
//                     borderRadius: 10,

//                     justifyContent: "center",
//                     alignItems: "center",
//                     backgroundColor: "blue",
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontSize: 55,
//                       fontWeight: "bold",
//                       color: "yellow",
//                     }}
//                   >
//                     {arrayOfResultValue[array[1]]}
//                   </Text>
//                 </View>
//               </Animated.View>
//             ) : (
//               <View
//                 style={{
//                   borderRadius: 10,

//                   justifyContent: "center",
//                   alignItems: "center",
//                   backgroundColor: "blue",
//                 }}
//               >
//                 <Text
//                   style={{
//                     fontSize: 55,
//                     fontWeight: "bold",
//                     color: "yellow",
//                   }}
//                 >
//                   {arrayOfResultValue[array[1]]}
//                 </Text>
//               </View>
//             )}
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => animate([arrayOfResultValue[array[2]], 2])}
//             // style={{ width: 100, height: 100, backgroundColor: "black" }}
//           >
//             {one2 === true ? (
//               <Animated.View style={[styles.box, { transform: [{ scale }] }]}>
//                 <View
//                   style={{
//                     borderRadius: 10,

//                     justifyContent: "center",
//                     alignItems: "center",

//                     backgroundColor: "yellow",
//                   }}
//                 >
//                   <Text
//                     style={{ fontSize: 55, color: "red", fontWeight: "bold" }}
//                   >
//                     {arrayOfResultValue[array[2]]}
//                   </Text>
//                 </View>
//               </Animated.View>
//             ) : (
//               <View
//                 style={{
//                   borderRadius: 10,

//                   justifyContent: "center",
//                   alignItems: "center",

//                   backgroundColor: "yellow",
//                 }}
//               >
//                 <Text
//                   style={{ fontSize: 55, color: "red", fontWeight: "bold" }}
//                 >
//                   {arrayOfResultValue[array[2]]}
//                 </Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// export default Test;
// const styles = StyleSheet.create({
//   box: {
//     height: boxWidth,
//     width: boxWidth,
//   },
// });

// ------------------------------------------------------------------
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
export default function Test() {
  const [val, setVal] = useState({
    counter: 0,
    score: 0,
  });
  const operators = ["+", "-", ">", "<", ">=", "<="]; // You can add more operators if needed
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];
  let number1, number2, result;

  switch (randomOperator) {
    case "+":
      number1 = Math.floor(Math.random() * 21);
      number2 = Math.floor(Math.random() * 51);
      result = number1 + number2;
      break;
    case "-":
      number1 = Math.floor(Math.random() * 21);
      number2 = Math.floor(Math.random() * number1); // Ensure the second number is less than the first
      result = number1 - number2;
      break;
    case ">":
      number1 = Math.floor(Math.random() * 51);
      number2 = Math.floor(Math.random() * 21);
      result = number1 > number2;
      break;
    case "<":
      number1 = Math.floor(Math.random() * 21);
      number2 = Math.floor(Math.random() * 51);
      result = number1 < number2;
      break;
    case ">=":
      number1 = Math.floor(Math.random() * 51);
      number2 = Math.floor(Math.random() * 21);
      result = number1 >= number2;
      break;
    case "<=":
      number1 = Math.floor(Math.random() * 21);
      number2 = Math.floor(Math.random() * 51);
      result = number1 <= number2;
      break;
    default:
      // Handle other operators or add more cases as needed
      break;
  }
  useEffect(() => {
    if (val.counter == 20) {
      let text;
      if (randomOperator === "+") {
        text = `${number1.toFixed(0)} + ${number2.toFixed(0)} =`;
      } else if (randomOperator === "-") {
        text = `${number1.toFixed(0)} - ${number2.toFixed(0)} =`;
      } else if (randomOperator === ">") {
        text = `${number1.toFixed(0)} > ${number2.toFixed(0)}?`;
      } else if (randomOperator === "<") {
        text = `${number1.toFixed(0)} < ${number2.toFixed(0)}?`;
      } else if (randomOperator === ">=") {
        text = `${number1.toFixed(0)} >= ${number2.toFixed(0)}?`;
      } else if (randomOperator === "<=") {
        text = `${number1.toFixed(0)} <= ${number2.toFixed(0)}?`;
      }
      Speech.speak(text, { language: "en" });
    }
    return () => {
      Speech.stop();
    };
  }, [val]);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
      // source={require("../../assets/QuizCount.gif")}
      // style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.view1}>
          {val.counter >= 10 && val.counter <= 20 && (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question {val.counter + 1}
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
              {randomOperator}{" "}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 55,
                color: "red",
                fontWeight: "bold",
              }}
            >
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
          {arrayOfResultValue.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(option, index)}
            >
              <Animatable.View
                ref={animRefs.current[index]}
                style={[
                  styles.box,
                  { transform: [{ scale: scaleRefs[index] }] },
                ]}
              >
                <View
                  style={{
                    borderRadius: 10,
                    width: 85,
                    height: 70,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: option === true ? "green" : "red",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 48,
                      fontWeight: "bold",
                      color: "yellow",
                    }}
                  >
                    {option}
                  </Text>
                </View>
              </Animatable.View>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}
// -----------------------------------------------------------------------------------------
// import * as React from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import { Audio } from "expo-av";

// export default function App() {
//   const [sound, setSound] = React.useState();

//   async function playSound() {
//     console.log("Loading Sound");
//     const { sound } = await Audio.Sound.createAsync(
//       require("./assets/Hello.mp3")
//     );
//     setSound(sound);

//     console.log("Playing Sound");
//     await sound.playAsync();
//   }

//   React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log("Unloading Sound");
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);

//   return (
//     <View style={styles.container}>
//       <Button title="Play Sound" onPress={playSound} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "#ecf0f1",
//     padding: 10,
//   },
// });
