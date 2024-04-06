// // import React, { useEffect, useRef, useState, useMemo } from "react";
// // import {
// //   View,
// //   Text,
// //   ImageBackground,
// //   Image,
// //   Animated,
// //   StyleSheet,
// //   TouchableOpacity,
// // } from "react-native";
// // import * as Speech from "expo-speech";
// // import * as Animatable from "react-native-animatable";
// // import Pre_K from "./Pre_Component/Pre_K";
// // // import { parse } from "react-native-svg";
// // // import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
// // // import Animated from "react-native-reanimated";

// // const boxWidth = 70;

// // const Test3 = () => {
// //   const ref = useRef();
// //   const [one, setOne] = useState(false);
// //   const [dum, setDum] = useState(0);
// //   const [score, setScore] = useState(0);
// //   const [count, setCount] = useState(0);
// //   // const [randomResult1, setRandomResult1] = useState("0");
// //   // const [randomResult2, setRandomResult2] = useState("0");

// //   // const [number1, setNumber1] = useState("0");
// //   // setNumber1(Math.floor(Math.random() * 11));
// //   let number1 = Math.floor(Math.random() * 11);
// //   // setRandomResult1(parseInt((Math.random() * 21).toFixed(0)));
// //   // setRandomResult2(parseInt((Math.random() * 21).toFixed(0)));
// //   console.log(number1 + ",sabdkahkldhaslkdlk");
// //   let randomResult1 = parseInt((Math.random() * 21).toFixed(0));
// //   let randomResult2 = parseInt((Math.random() * 21).toFixed(0));

// //   while (result === randomResult1) {
// //     // setRandomResult1(parseInt((Math.random() * 21).toFixed(0)));
// //     randomResult1 = parseInt((Math.random() * 21).toFixed(0));
// //   }
// //   while (result === randomResult2) {
// //     // setRandomResult2(parseInt((Math.random() * 21).toFixed(0)));
// //     randomResult2 = parseInt((Math.random() * 21).toFixed(0));
// //   }

// //   for (let i = 0; i < 3; i++) {
// //     let a = (Math.random() * 2).toFixed(0);
// //     if (i > 0) {
// //       while (a === array[0] || a === array[1]) {
// //         a = (Math.random() * 2).toFixed(0);
// //       }
// //     }
// //     array[i] = a;
// //   }
// //   console.log("skdnklsjdkljsdjsjlksjdklsjklsjdkljsdkljsdkjdskl");

// //   const result = number1;
// //   const array = [];

// //   const arrayOfResultValue = [result, randomResult1, randomResult2];
// //   const scaleRefs = arrayOfResultValue
// //     ? arrayOfResultValue.map(() => useRef(new Animated.Value(1)).current)
// //     : [];
// //   useEffect(() => {
// //     // if (count == 5) {
// //     //   navigation.navigate(Pre_K);
// //     // }
// //     const text = `Lets do quiz`;
// //     Speech.speak(text, { language: "en" });
// //   }, []);

// //   useEffect(() => {
// //     const text = ` Touch the ${number1.toFixed(0)},`;
// //     Speech.speak(text, { language: "en" });

// //     return () => {
// //       Speech.stop();
// //     };
// //   }, []);

// //   const animRefs = useRef(array.map(() => useRef()));

// //   const animateView = (type, index) => {
// //     animRefs.current[index].current[type]();
// //   };

// //   const handleAnswer = (selectedOption, index) => {
// //     console.log(selectedOption + " yess");
// //     const selectedValue = parseFloat(selectedOption);
// //     console.log({ selectedValue, result });

// //     if (selectedValue === result) {
// //       Speech.speak("Correct!", { language: "en" });
// //       let type = "bounce";
// //       animateView(type, index);
// //       setTimeout(() => {
// //         setScore(score + 1);
// //         setCount(count + 1);
// //       }, 1000);
// //     } else {
// //       let type = "wobble";
// //       animateView(type, index);
// //       Speech.speak("Incorrect!", { language: "en" });
// //       setTimeout(() => {
// //         setCount(count + 1);
// //       }, 1000);
// //     }
// //   };

// //   return (
// //     <View style={{ flex: 1 }}>
// //       <ImageBackground
// //         source={require("../assets/background_yello.gif")}
// //         style={{ height: "100%", width: "100%" }}
// //       >
// //         <View
// //           style={{
// //             width: "100%",
// //             height: 50,
// //             marginTop: 50,
// //             alignItems: "flex-end",
// //             paddingHorizontal: 20,
// //           }}
// //         >
// //           <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
// //             {score} / 5
// //           </Text>
// //         </View>
// //         <View
// //           style={{
// //             flexDirection: "row",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             // marginTop: "15%",
// //           }}
// //         >
// //           <View>
// //             <Text
// //               style={{
// //                 fontSize: 60,
// //                 color: "red",
// //                 fontWeight: "bold",
// //               }}
// //             >
// //               {number1}
// //             </Text>
// //           </View>
// //         </View>

// //         <View
// //           style={{
// //             flexDirection: "row",
// //             marginTop: "8%",
// //             width: "50%",
// //             alignSelf: "center",
// //             justifyContent: "space-between",
// //           }}
// //         >
// //           <TouchableOpacity
// //             key={0}
// //             onPress={() => handleAnswer(arrayOfResultValue[array[0]], 0)}
// //           >
// //             <Animatable.View
// //               ref={animRefs.current[0]}
// //               style={[styles.box, { transform: [{ scale: scaleRefs[0] }] }]}
// //               // animation={animation} // Use the shake animation here
// //             >
// //               <View
// //                 style={{
// //                   borderRadius: 10,
// //                   width: 70,
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   backgroundColor: "green",
// //                 }}
// //               >
// //                 <Text
// //                   style={{
// //                     fontSize: 55,
// //                     fontWeight: "bold",
// //                     color: "yellow",
// //                   }}
// //                 >
// //                   {arrayOfResultValue[array[0]]}
// //                 </Text>
// //               </View>
// //             </Animatable.View>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             key={1}
// //             onPress={() => handleAnswer(arrayOfResultValue[array[1]], 1)}
// //             // onPress={() => handleAnswer(arrayOfResultValue[array[1]])}
// //             // style={{ width: 100, height: 100, backgroundColor: "black" }}
// //           >
// //             <Animatable.View
// //               ref={animRefs.current[1]}
// //               style={[styles.box, { transform: [{ scale: scaleRefs[1] }] }]}
// //               // animation={animation} // Use the shake animation here
// //             >
// //               <View
// //                 style={{
// //                   borderRadius: 10,
// //                   width: 70,
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   backgroundColor: "blue",
// //                 }}
// //               >
// //                 <Text
// //                   style={{
// //                     fontSize: 55,
// //                     fontWeight: "bold",
// //                     color: "yellow",
// //                   }}
// //                 >
// //                   {arrayOfResultValue[array[1]]}
// //                 </Text>
// //               </View>
// //             </Animatable.View>
// //           </TouchableOpacity>

// //           <TouchableOpacity
// //             key={2}
// //             onPress={() => handleAnswer(arrayOfResultValue[array[2]], 2)}

// //             // style={{ width: 100, height: 100, backgroundColor: "black" }}
// //           >
// //             <Animatable.View
// //               ref={animRefs.current[2]}
// //               style={[styles.box, { transform: [{ scale: scaleRefs[2] }] }]}
// //               // animation={animation} // Use the shake animation here
// //             >
// //               <View
// //                 style={{
// //                   borderRadius: 10,
// //                   width: 70,
// //                   justifyContent: "center",
// //                   alignItems: "center",
// //                   backgroundColor: "yellow",
// //                 }}
// //               >
// //                 <Text
// //                   style={{ fontSize: 55, color: "red", fontWeight: "bold" }}
// //                 >
// //                   {arrayOfResultValue[array[2]]}
// //                 </Text>
// //               </View>
// //             </Animatable.View>
// //           </TouchableOpacity>
// //         </View>
// //       </ImageBackground>
// //     </View>
// //   );
// // };

// // export default Test3;
// // const styles = StyleSheet.create({
// //   box: {
// //     height: boxWidth,
// //     width: boxWidth,
// //   },
// // });

// // // import React, { useRef, useState } from "react";
// // // import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
// // // import * as Animatable from "react-native-animatable";

// // // const types = [
// // //   "bounce",
// // //   "flash",
// // //   "jello",
// // //   "pulse",
// // //   "rotate",
// // //   "rubberBand",
// // //   "shake",
// // //   "swing",
// // //   "tada",
// // //   "wobble",
// // // ];
// // // export default function Test2() {
// // //   const ref = useRef();
// // //   const [animation, setAnimation] = useState("");
// // //   const animate = (type) => {
// // //     setAnimation(type);
// // //     ref.current[type]();
// // //   };
// // //   return (
// // //     <View style={styles.container}>
// // //       <Animatable.View style={styles.view} ref={ref}>
// // //         <Text style={styles.type}>{animation}</Text>
// // //       </Animatable.View>
// // //       <ScrollView>
// // //         {types.map((type) => (
// // //           <View key={type}>
// // //             <Button title={type} onPress={() => animate(type)} />
// // //             <View style={{ height: 5 }} />
// // //           </View>
// // //         ))}
// // //       </ScrollView>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     paddingHorizontal: 20,
// // //   },
// // //   view: {
// // //     height: 100,
// // //     margin: 20,
// // //     backgroundColor: "red",
// // //     alignItems: "center",
// // //     justifyContent: "center",
// // //   },
// // //   type: {
// // //     color: "#fff",
// // //     fontSize: 17,
// // //   },
// // // });

// import React, { useEffect, useRef, useState, useMemo } from "react";
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
// import * as Animatable from "react-native-animatable";
// import Pre_K from "./Pre_Component/Pre_K";
// // import { parse } from "react-native-svg";
// // import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
// // import Animated from "react-native-reanimated";

// export default function Test3({ navigation }) {
//   const ref = useRef();
//   const [one, setOne] = useState(false);
//   const [dum, setDum] = useState(0);
//   const array = [];
//   // const [score, setScore] = useState(0);
//   const [val, setVal] = useState({
//     counter: 0,
//     score: 0,
//   });

//   let number1 = Math.floor(Math.random() * 11);
//   const result = number1;

//   let randomResult1 = parseInt((Math.random() * 21).toFixed(0));
//   let randomResult2 = parseInt((Math.random() * 21).toFixed(0));

//   while (result === randomResult1) {
//     randomResult1 = parseInt((Math.random() * 21).toFixed(0));
//   }
//   while (result === randomResult2) {
//     randomResult2 = parseInt((Math.random() * 21).toFixed(0));
//   }

//   for (let i = 0; i < 3; i++) {
//     let a = (Math.random() * 2).toFixed(0);
//     if (i > 0) {
//       while (a === array[0] || a === array[1]) {
//         a = (Math.random() * 2).toFixed(0);
//       }
//     }
//     array[i] = a;
//   }

//   const arrayOfResultValue = [result, randomResult1, randomResult2];
//   const scaleRefs = arrayOfResultValue
//     ? arrayOfResultValue.map(() => useRef(new Animated.Value(1)).current)
//     : [];
//   const animRefs = useRef(array.map(() => useRef()));

//   const animateView = (type, index) => {
//     animRefs.current[index].current[type]();
//   };

//   useEffect(() => {
//     if (val.counter == 5) {
//       setTimeout(() => {
//         navigation.navigate("Pre_K");
//       }, 1000);
//     } else {
//       const text = `Lets do quiz`;
//       Speech.speak(text, { language: "en" });
//     }
//   }, [val]);

//   useEffect(() => {
//     const text = ` Touch the ${number1.toFixed(0)},`;
//     Speech.speak(text, { language: "en" });

//     return () => {
//       Speech.stop();
//     };
//   }, [val]);

//   const handleAnswer = (selectedOption, index) => {
//     console.log(selectedOption + " yess");
//     const selectedValue = parseFloat(selectedOption);
//     console.log({ selectedValue, result });

//     if (selectedValue === result) {
//       Speech.speak("Correct!", { language: "en" });
//       let type = "bounce";
//       animateView(type, index);
//       setTimeout(() => {
//         setVal((prevState) => ({
//           ...prevState,
//           counter: prevState.counter + 1,
//           score: prevState.score + 1,
//         }));
//       }, 1000);
//     } else {
//       let type = "wobble";
//       animateView(type, index);
//       Speech.speak("Incorrect!", { language: "en" });
//       setTimeout(() => {
//         setVal((prevState) => ({
//           ...prevState,
//           counter: prevState.counter + 1,
//         }));
//       }, 1000);
//     }
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <ImageBackground
//         source={require("../assets/background_yello.gif")}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <View
//           style={{
//             width: "100%",
//             height: 50,
//             marginTop: 50,
//             alignItems: "flex-end",
//             paddingHorizontal: 20,
//           }}
//         >
//           <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
//             {val.score} / 5
//           </Text>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             // marginTop: "15%",
//           }}
//         ></View>

//         <View
//           style={{
//             flexDirection: "row",
//             marginTop: "8%",
//             width: "50%",
//             alignSelf: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <TouchableOpacity
//             key={0}
//             onPress={() => handleAnswer(arrayOfResultValue[array[0]], 0)}
//           >
//             <Animatable.View
//               ref={animRefs.current[0]}
//               style={[styles.box, { transform: [{ scale: scaleRefs[0] }] }]}
//               // animation={animation} // Use the shake animation here
//             >
//               <View
//                 style={{
//                   borderRadius: 10,
//                   width: 70,
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
//             </Animatable.View>
//           </TouchableOpacity>

//           <TouchableOpacity
//             key={1}
//             onPress={() => handleAnswer(arrayOfResultValue[array[1]], 1)}
//             // onPress={() => handleAnswer(arrayOfResultValue[array[1]])}
//             // style={{ width: 100, height: 100, backgroundColor: "black" }}
//           >
//             <Animatable.View
//               ref={animRefs.current[1]}
//               style={[styles.box, { transform: [{ scale: scaleRefs[1] }] }]}
//               // animation={animation} // Use the shake animation here
//             >
//               <View
//                 style={{
//                   borderRadius: 10,
//                   width: 70,
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
//             </Animatable.View>
//           </TouchableOpacity>

//           <TouchableOpacity
//             key={2}
//             onPress={() => handleAnswer(arrayOfResultValue[array[2]], 2)}

//             // style={{ width: 100, height: 100, backgroundColor: "black" }}
//           >
//             <Animatable.View
//               ref={animRefs.current[2]}
//               style={[styles.box, { transform: [{ scale: scaleRefs[2] }] }]}
//               // animation={animation} // Use the shake animation here
//             >
//               <View
//                 style={{
//                   borderRadius: 10,
//                   width: 70,
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
//             </Animatable.View>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

// -------------------------------------------------------------------

// import React, { useState } from "react";
// import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";

// const Test3 = () => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const data = [
//     { quiz: "Quiz 1", totalMarks: "10", obtainMarks: "8", reward: "$5" },
//     { quiz: "Quiz 2", totalMarks: "15", obtainMarks: "12", reward: "$7" },
//     // Add more data as needed
//   ];

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.openButton}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text>Open Table</Text>
//       </TouchableOpacity>

//       <Modal transparent={true} visible={isModalVisible}>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modal}>
//             <View style={styles.table}>
//               <View style={styles.tableRow}>
//                 <Text style={styles.tableHeaderCell}>Quizzes</Text>
//                 <Text style={styles.tableHeaderCell}>Total Marks</Text>
//                 <Text style={styles.tableHeaderCell}>Obtain Marks</Text>
//                 <Text style={styles.tableHeaderCell}>Reward</Text>
//               </View>
//               {data.map((row, index) => (
//                 <View style={styles.tableRow} key={index}>
//                   <Text style={styles.tableCell}>{row.quiz}</Text>
//                   <Text style={styles.tableCell}>{row.totalMarks}</Text>
//                   <Text style={styles.tableCell}>{row.obtainMarks}</Text>
//                   <Text style={styles.tableCell}>{row.reward}</Text>
//                 </View>
//               ))}
//             </View>
//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   openButton: {
//     backgroundColor: "lightblue",
//     padding: 10,
//     borderRadius: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modal: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     width: "80%",
//     padding: 20,
//   },
//   table: {
//     backgroundColor: "white",
//   },
//   tableRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderColor: "#e0e0e0",
//   },
//   tableHeaderCell: {
//     fontWeight: "bold",
//     fontSize: 16,
//     flex: 1,
//     textAlign: "center",
//     color: "#333",
//     borderRightWidth: 1,
//     borderColor: "#e0e0e0",
//   },
//   tableCell: {
//     fontSize: 16,
//     flex: 1,
//     textAlign: "center",
//     color: "#666",
//     borderRightWidth: 1,
//     borderColor: "#e0e0e0",
//   },
//   closeButton: {
//     marginTop: 10,
//     alignItems: "center",
//   },
// });

// export default Test3;
// --------------------------------------------------------------------------------------------------

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
// import * as Animatable from "react-native-animatable";
import * as Haptics from "expo-haptics";
import { AntDesign } from "react-native-vector-icons";
import { StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const boxWidth = 70;

export default function Test3({ navigation }) {
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
    // generateRandomNumbers();
    childData();
  }, []);

  const handleSubmitForm = async () => {
    formData.append("child_id", child.child.id);
    formData.append("score", 10);
    formData.append("coin", 200);
    formData.append("quiz_no", 2);
    formData.append("total_marks", 10);
    formData.append("obtain_marks", val.score);
    formData.append("class_id", child.child.class);

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
          AsyncStorage.setItem(
            "quizData",
            JSON.stringify(response.data.updated_quizes)
          );
        }
      });
  };

  const symbols = ["<", "=", ">"];
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [selectedSymbol, setSelectedSymbol] = useState("");
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
        navigation.navigate("QuizSubt_One_Result", {
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
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     // Reset the state to its initial values here
  //     setVal({
  //       counter: 0,
  //       score: 0,
  //     });
  //   });

  //   return unsubscribe; // Cleanup the listener when the component is unmounted
  // }, [navigation]);
  const handleBack = () => {
    navigation.navigate("ClassOne");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ImageBackground
      // source={require("../../../assets/QuizCount.gif")}
      // style={{ height: "100%", width: "100%" }}
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
          {/* <View>
            <Text style={{ fontSize: 55, fontWeight: "bold" }}> = </Text>
          </View> */}
          {/* <View>
            <Text>
              {num1} {selectedSymbol} {num2}
            </Text>
          </View> */}
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
            {/* <Animatable.View
              ref={animRefs.current[0]}
              style={[styles.box, { transform: [{ scale: scaleRefs[0] }] }]}
              // animation={animation} // Use the shake animation here
            > */}
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
                True
              </Text>
            </View>
            {/* </Animatable.View> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => checkAnswer(false)}
            // key={1}
            // onPress={() => handleAnswer(arrayOfResultValue[array[1]], 1)}
            // onPress={() => handleAnswer(arrayOfResultValue[array[1]])}
            // style={{ width: 100, height: 100, backgroundColor: "black" }}
          >
            {/* <Animatable.View
              ref={animRefs.current[1]}
              style={[styles.box, { transform: [{ scale: scaleRefs[1] }] }]}
              // animation={animation} // Use the shake animation here
            > */}
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
                False
              </Text>
            </View>
            {/* </Animatable.View> */}
          </TouchableOpacity>

          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
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
