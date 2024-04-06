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
// import { AntDesign } from "react-native-vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import * as Haptics from "expo-haptics";

// export default function QuizCount({ navigation }) {
//   const ref = useRef();
//   const scaleAnim = useRef(new Animated.Value(1)).current;
//   const [child, setChild] = useState(null);

//   useEffect(() => {
//     async function changeScreenOrientation() {
//       await ScreenOrientation.lockAsync(
//         ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
//       );
//     }

//     async function childData() {
//       console.log("inside");
//       let a = await AsyncStorage.getItem("child");
//       a = JSON.parse(a);

//       console.log(a);
//       setChild(a);
//       // let b = JSON.parse(a);
//     }
//     changeScreenOrientation();
//     childData();
//   }, []);

//   const array = [];
//   // const [score, setScore] = useState(0);
//   const [val, setVal] = useState({
//     counter: 0,
//     score: 0,
//   });

//   let number1 = Math.floor(Math.random() * 11);
//   const result = number1;

//   let randomResult1 = Math.floor(Math.random() * 21);
//   let randomResult2 = Math.floor(Math.random() * 21);

//   while (result === randomResult1) {
//     randomResult1 = Math.floor(Math.random() * 21);
//   }
//   while (result === randomResult2) {
//     randomResult2 = Math.floor(Math.random() * 21);
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
//   // useEffect(() => {
//   //   const text = `Lets do quiz`;
//   //   Speech.speak(text, { language: "en" });
//   // });

//   const handleSubmitForm = async () => {
//     const formData = new FormData();
//     console.log(child.enrollment.score + "yessssssssssss");
//     console.log("child_id", child.child.id);
//     console.log("score", child.enrollment.score);
//     console.log("coin", child.child.coin);
//     console.log("quiz_no", child.child.quiz_no);
//     console.log("total_marks", child.child.total_marks);
//     console.log("obtain_marks", child.child.obtain_marks);
//     console.log("class_id", route.params.class_id);

//     formData.append("child_id", child.child.id);
//     formData.append("score", child.enrollment.score);
//     formData.append("coin", child.child.coin);
//     formData.append("quiz_no", child.child.quiz_no);
//     formData.append("total_marks", childresult.totalMarks);
//     formData.append("obtain_marks", childresult.obtainMarks);
//     formData.append("class_id", route.params.class_id);

//     await axios
//       .post("http://funapp.ahmedhousedeal.com/api/update_progress", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//       .then(async (response) => {
//         if (response.data.error) {
//           console.log(response.data.msg);
//         } else {
//           console.log("inside Score Api");
//         }
//       });
//   };

//   useEffect(() => {
//     if (val.counter == 5) {
//       setTimeout(() => {
//         let c = (val.score / 5) * 100;
//         const childresult = {
//           totalMarks: 5,
//           obtainMarks: val.score,
//         };

//         setTimeout(async () => {
//           handleSubmitForm();
//         }, 1500);
//         navigation.navigate("QuizCount_Result", { childresult: childresult });
//       }, 1000);
//     } else if (val.counter == 0) {
//       const text1 = `Lets do quiz`;
//       Speech.speak(text1, { language: "en" });
//       const text = `Question 1`;
//       Speech.speak(text, { language: "en" });
//     } else if (val.counter == 1) {
//       const text = `Question 2`;
//       Speech.speak(text, { language: "en" });
//     } else if (val.counter == 2) {
//       const text = `Question 3`;
//       Speech.speak(text, { language: "en" });
//     } else if (val.counter == 3) {
//       const text = `Question 4`;
//       Speech.speak(text, { language: "en" });
//     } else if (val.counter == 4) {
//       const text = `Question 5`;
//       Speech.speak(text, { language: "en" });
//     }
//     Animated.sequence([
//       Animated.timing(scaleAnim, {
//         toValue: 1.5,
//         duration: 500,
//         useNativeDriver: true,
//       }),

//       Animated.timing(scaleAnim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   }, [val]);

//   useEffect(() => {
//     if (val.counter != 5) {
//       // navigation.navigate("QuizCount_Result");
//       const text = ` Touch the ${result.toFixed()},`;
//       Speech.speak(text, { language: "en" });
//     }
//     return () => {
//       Speech.stop();
//     };
//   }, [val]);

//   useEffect(() => {
//     const unsubscribe = navigation.addListener("focus", () => {
//       // Reset the state to its initial values here
//       setVal({
//         counter: 0,
//         score: 0,
//       });
//     });

//     return unsubscribe; // Cleanup the listener when the component is unmounted
//   }, [navigation]);

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
//       Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
//       setTimeout(() => {
//         setVal((prevState) => ({
//           ...prevState,
//           counter: prevState.counter + 1,
//         }));
//       }, 1000);
//     }
//   };
//   const handleBack = () => {
//     navigation.navigate("Pre_K");
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <ImageBackground
//         source={require("../../assets/QuizCount.gif")}
//         style={{ height: "100%", width: "100%" }}
//       >
//         <View style={styles.view1}>
//           {val.counter == 0 ? (
//             <Animated.Text
//               style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
//             >
//               Question 1
//             </Animated.Text>
//           ) : val.counter == 1 ? (
//             <Animated.Text
//               style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
//             >
//               Question 2
//             </Animated.Text>
//           ) : val.counter == 2 ? (
//             <Animated.Text
//               style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
//             >
//               Question 3
//             </Animated.Text>
//           ) : val.counter == 3 ? (
//             <Animated.Text
//               style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
//             >
//               Question 4
//             </Animated.Text>
//           ) : (
//             <Animated.Text
//               style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
//             >
//               Question 5
//             </Animated.Text>
//           )}
//         </View>
//         <TouchableOpacity onPress={handleBack} style={styles.handle}>
//           <AntDesign name="back" size={35} color="white" />
//         </TouchableOpacity>
//         <View style={styles.score}>
//           <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
//             {val.score} / 5
//           </Text>
//         </View>

//         <View
//           style={{
//             flexDirection: "row",
//             marginTop: "5%",
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
//                   width: 100,
//                   height: 100,
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
//                   width: 100,
//                   height: 100,
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
//                   width: 100,
//                   height: 100,
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

// const styles = StyleSheet.create({
//   view1: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "5%",
//   },
//   text1: {
//     fontSize: 28,
//     fontWeight: "bold",
//   },
//   handle: {
//     position: "absolute",
//     top: 1,
//     left: "1%",
//     marginTop: "2%",
//     backgroundColor: "red",
//     borderWidth: 2,
//     borderColor: "orange",
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     width: 48,
//   },
//   score: {
//     width: "100%",
//     height: 50,
//     marginTop: "7%",
//     alignItems: "flex-end",
//     paddingHorizontal: 20,
//   },
// });

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
import * as Haptics from "expo-haptics";
import Pre_K from "./Pre_K";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function QuizCount({ navigation, route }) {
  const ref = useRef();
  // console.log(route.params);
  // console.log("class_id" + route.params.class_id);

  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [child, setChild] = useState(null);

  useEffect(() => {
    async function childData() {
      console.log("inside");
      let a = await AsyncStorage.getItem("child");
      a = await JSON.parse(a);

      console.log(a.child.class);
      setChild(a);
      console.log(child);
      // let b = JSON.parse(a);
    }

    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    childData();
  }, []);

  const array = [];
  // const [score, setScore] = useState(0);
  const [val, setVal] = useState({
    counter: 0,
    score: 0,
  });

  let number1 = Math.floor(Math.random() * 10);
  const result = number1;

  let randomResult1 = Math.floor(Math.random() * 20);
  let randomResult2 = Math.floor(Math.random() * 20);

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

  const handleSubmitForm = async () => {
    const formData = new FormData();
    formData.append("child_id", child.child.id);
    formData.append("coin", 500);
    formData.append("quiz_no", 1);
    formData.append("total_marks", 5);
    formData.append("obtain_marks", val.score);
    formData.append("class_id", 1);
    if (child.enrollment.child_class_id === 1) {
      formData.append("score", 100);
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
          b.pre_k = response.data.updated_quizes.pre_k;
          console.log(response.data.coin);
          AsyncStorage.setItem("quizData", JSON.stringify(b));
          AsyncStorage.setItem("coin", JSON.stringify(response.data.coin));
          AsyncStorage.setItem("score", JSON.stringify(response.data.score));
        }
      });
  };

  useEffect(() => {
    if (val.counter == 5) {
      setTimeout(() => {
        // let c = (val.score / 5) * 100;
        const childresult = {
          totalMarks: 5,
          obtainMarks: val.score,
          // class_id: route.params.class_id,
        };

        setTimeout(async () => {
          handleSubmitForm();
        }, 1500);
        navigation.navigate("QuizCount_Result", { childresult: childresult });
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
    if (val.counter != 5) {
      // navigation.navigate("QuizCount_K_Result");
      const text = ` Touch the ${number1.toFixed(0)},`;
      Speech.speak(text, { language: "en" });

      return () => {
        Speech.stop();
      };
    }
  }, [val]);

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
    navigation.navigate("Pre_K");
  };

  return (
    <View style={{ flex: 1 }}>
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
          ) : (
            <Animated.Text
              style={[styles.text1, { transform: [{ scale: scaleAnim }] }]}
            >
              Question 5
            </Animated.Text>
          )}
        </View>
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>
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
    marginTop: "5%",
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    // marginTop: "5%",
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
