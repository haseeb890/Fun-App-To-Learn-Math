import React, { useEffect, useRef, useState, useMemo } from "react";
import { StatusBar } from "react-native";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "react-native-vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function QuizGrand({ navigation }) {
  // const myArray = [{ one: "false" }, { two: "true" }, { three: "true" }];
  const handleBack = () => {
    navigation.navigate("Kinder");
  };
  // const [quizCheck, setQuizCheck] = useState([]);
  // const handleLock = async () => {
  //   await AsyncStorage.setItem("quizzLock", JSON.stringify(myArray));

  //   setTimeout(async () => {
  //     const myArray = await AsyncStorage.getItem("quizzLock");
  //     let a = JSON.parse(myArray);
  //     // console.log(a[0].one);
  //     setQuizCheck(a);
  //     // console.log(JSON.parse(myArray));
  //     // console.log(quizCheck[0].one + " yes");
  //   }, 1000);
  // };
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const slideAnim1 = useRef(new Animated.Value(-300)).current;
  const slideAnim2 = useRef(new Animated.Value(-300)).current;

  const TouchAni = () => {
    const animations = [
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim1, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim2, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ];
    Animated.parallel(animations).start();
  };
  useEffect(() => {
    TouchAni();
    // handleLock();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../assets/QuizCount.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>

        <View
          style={{
            alignSelf: "center",
            width: "40%",
            height: "80%",
            justifyContent: "space-around",
            marginTop: "5%",
          }}
        >
          <Animated.View
            style={[styles.center, { transform: [{ translateX: slideAnim }] }]}
          >
            <TouchableOpacity
              // disabled={quizCheck[0].one === "false" ? false : true}
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizGrand_C")}
            >
              <Text style={styles.opacitytext}>Counting</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[styles.center, { transform: [{ translateX: slideAnim1 }] }]}
          >
            <TouchableOpacity
              // disabled={quizCheck[1].two === "false" ? false : true}
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizGrand_A")}
            >
              <Text style={styles.opacitytext}>Addition</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[styles.center, { transform: [{ translateX: slideAnim2 }] }]}
          >
            <TouchableOpacity
              // disabled={quizCheck[2].three === "false" ? false : true}
              style={styles.opacity}
              onPress={() => navigation.navigate("QuizGrand_S")}
            >
              <Text style={styles.opacitytext}>Subtraction</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  center: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  opacity: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 5,
    height: 70,
    width: 150,
    justifyContent: "center",
    backgroundColor: "#F9A85F",
    borderColor: "#ff8c00",
    borderLeftColor: "#ff8c00",
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderWidth: 1.5,
  },
  opacitytext: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 5,
    color: "white",
    alignSelf: "center",
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
});
