import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { ImageBackground } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export default function QuizGrand_One({ navigation, route }) {
  const { child } = route.params;

  const handleBack = () => {
    navigation.navigate("ClassOne", { child: child });
  };

  const slideAnim = useRef(new Animated.Value(-300)).current;
  const slideAnim1 = useRef(new Animated.Value(300)).current;
  const slideAnim2 = useRef(new Animated.Value(-300)).current;
  const slideAnim3 = useRef(new Animated.Value(300)).current;

  const TouchAni = () => {
    const animations = [
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim1, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim2, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim3, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ];
    Animated.parallel(animations).start();
  };
  useEffect(() => {
    TouchAni();
  }, []);
  return (
    <View>
      <StatusBar />
      <ImageBackground
        source={require("../../../assets/QuizCount.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>
        <View style={styles.center}>
          <View style={styles.opacity}>
            <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
              <TouchableOpacity
                style={styles.opacity1}
                onPress={() =>
                  navigation.navigate("QG_One_A", { child: child })
                }
              >
                <Text style={styles.opacitytext}>Addition</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateX: slideAnim1 }] }}>
              <TouchableOpacity
                style={styles.opacity1}
                onPress={() =>
                  navigation.navigate("QG_One_S", { child: child })
                }
              >
                <Text style={styles.opacitytext}>Subtraction</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          <View style={styles.opacity}>
            <Animated.View style={{ transform: [{ translateX: slideAnim2 }] }}>
              <TouchableOpacity
                style={styles.opacity1}
                onPress={() =>
                  navigation.navigate("QG_One_M", { child: child })
                }
              >
                <Text style={styles.opacitytext}>Multiplication</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={{ transform: [{ translateX: slideAnim3 }] }}>
              <TouchableOpacity
                style={styles.opacity1}
                onPress={() =>
                  navigation.navigate("ClassTwo", { child: child })
                }
              >
                <Text style={styles.opacitytext}>Division</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  center: {
    // alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",

    // width: "100%",

    // flex: 1,
  },
  opacity: {
    flexDirection: "row",
    paddingTop: 10,
  },
  opacity1: {
    backgroundColor: "#F9A85F",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ff8c00",
    margin: "2.5%",
    width: 170,
    height: 70,
  },
  opacitytext: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
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
