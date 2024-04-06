import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
  Modal,
  SafeAreaView,
  FlatList,
} from "react-native";
import Pre_K from "./Pre_Component/Pre_K";
import Kinder from "./Pre_Component/Kinder";
import ClassOne from "./Pre_Component/ClassOne";
// import Login from "../components/Login";
import ClassTwo from "./Pre_Component/ClassTwo";
import LottieView from "lottie-react-native";
import { ImageBackground } from "react-native";
import react, { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { lottieView } from "lottie-react-native";
import {
  Feather,
  MaterialCommunityIcons,
  Entypo,
  EvilIcons,
  Octicons,
  Ionicons,
} from "react-native-vector-icons";
import { Overlay } from "react-native-elements";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function Screenone({ navigation }) {
  const [child, setChild] = useState(null);
  const [classCheck, setClassCheck] = useState(1);
  const [username, setUsername] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [quizzOverlay, setQuizzOverlay] = useState(false);
  const [charOverlay, setCharOverlay] = useState(false);
  const [quizData, setQuizData] = useState("");
  const [DATA, setData] = useState([""]);
  const [Quizes, setQuizes] = useState(null);
  const [load, setLoad] = useState(false);
  const isFocused = useIsFocused();
  const [count, setCount] = useState(0);
  const [coin, setCoin] = useState("");
  const [score, setScore] = useState("");

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      console.log("inside the refresher");
      // Alert.alert("Refreshed");
      setLoad(true);
      dataFterRefresh();

      setLoad(false);
    });
    return unsubscribe;
  }, [navigation]);

  const dataFterRefresh = async () => {
    let x = await AsyncStorage.getItem("coin");
    x = await JSON.parse(x);
    setCoin(x);
    console.log(x, " coins after refresh");
    let a = await AsyncStorage.getItem("child");
    a = await JSON.parse(a);
    console.log(a.child.class);
    let b = await AsyncStorage.getItem("quizData");
    b = JSON.parse(b);
    console.log(b, "quizData");
    let c = await AsyncStorage.getItem("score");
    c = await JSON.parse(c);
    console.log(c, "score");

    // console.log("Pre K");
    // console.log(b.pre_k);
    // console.log("Kinder");
    // console.log(b.kindergarden);
    // console.log("One");
    // console.log(b.one);
    // console.log("Two");
    // console.log(b.two);
    setScore(c);
    setQuizes(b);
    setQuizData(b);
    setChild(a);
    console.log("********************* Data Set ****************");
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const toggleOverlay1 = () => {
    setVisible1(!visible1);
  };
  const onToggleOverlay = () => {
    toggleOverlay1();
    toggleOverlay();
  };

  const toggleQuizOverlay = () => {
    setQuizzOverlay(!quizzOverlay);
  };

  const toggleCharOverlay = () => {
    setCharOverlay(!charOverlay);
  };
  const onCharToggleOverlay = () => {
    toggleCharOverlay();
    toggleQuizOverlay();
  };

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    }

    async function childData() {
      console.log("inside");
      let a = await AsyncStorage.getItem("child");
      a = await JSON.parse(a);
      console.log(a.child.class);
      let b = await AsyncStorage.getItem("quizData");
      b = JSON.parse(b);
      console.log(b, "quizData");

      let x = await AsyncStorage.getItem("coin");
      x = await JSON.parse(x);
      console.log(x, " coins");
      let c = await AsyncStorage.getItem("score");
      c = await JSON.parse(c);
      console.log(c, "score");

      setScore(c);
      setCoin(x);
      setQuizes(b);
      setQuizData(b);
      setChild(a);
    }

    changeScreenOrientation();
    childData();
  }, []);
  const handleLogout = async () => {
    try {
      AsyncStorage.clear();
      console.log("LogOut");
      navigation.navigate("Login");
    } catch (error) {
      console.log("AsyncStorage not cleared:", error);
    }
  };

  // const data = [
  //   { quiz: "Quiz 1", totalMarks: "15", obtainMarks: "12", reward: "$5" },
  //   { quiz: "Quiz 2", totalMarks: "15", obtainMarks: "12", reward: "$7" },
  //   { quiz: "Quiz 3", totalMarks: "15", obtainMarks: "12", reward: "$7" },
  //   { quiz: "Grand Quiz", totalMarks: "15", obtainMarks: "12", reward: "$7" },
  // ];

  return (
    <>
      {child === null ? (
        <Text>"Loading"</Text>
      ) : (
        <View style={styles.main}>
          <StatusBar hidden />
          <ImageBackground
            source={require("../assets/gifH.gif")}
            style={{ height: "100%", width: "100%" }}
          >
            <View
              style={{
                width: "100%",
                height: 50,
                paddingTop: 15,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={toggleQuizOverlay}
                style={{
                  width: "30%",
                  height: "100%",
                  marginTop: -10,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../assets/characterImage.png")}
                  style={{ height: 40, width: 40 }}
                />
                <View style={{ paddingHorizontal: 5 }}>
                  <Text style={{ fontWeight: "600" }}>
                    Name: {child.child.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="progress-star"
                      size={20}
                      color={"black"}
                    />

                    <View style={{ padding: 8 }}>
                      <Progress.Bar progress={score / 100} width={150} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  width: "25%",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/coin.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <View
                    style={{
                      backgroundColor: "transparent",
                      borderWidth: 1,
                      maxWidth: "100%",
                      height: 25,
                      borderRadius: 12,
                      borderColor: "white",
                      alignSelf: "center",
                    }}
                  >
                    <Text style={styles.cointext}>{coin}</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={toggleOverlay}>
                  <Feather name="settings" size={25} color={"white"} />
                </TouchableOpacity>
              </View>
            </View>

            {/* <View
              style={{
                width: 170,
                height: 20,
                // backgroundColor: "red",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "600" }}>
                Class Progress : {child.enrollment.score}%
              </Text>
            </View> */}

            {/* <TouchableOpacity
              onPress={toggleQuizOverlay}
              style={{
                width: 120,
                height: 30,
                justifyContent: "center",
                // alignItems: "center",
                marginLeft: 10,
                // backgroundColor: "red",
              }}
            >
              <Text style={{ fontWeight: "600", color: "blue" }}>
                Check Progress
              </Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity>
        <Octicons 
          name='multi-select' 
          size={30}
          color='white' 
          />
          <Text style={{marginLeft:650,fontWeight:'bold',color:'white'}}>Parents</Text>
      </TouchableOpacity> */}

            <Overlay
              isVisible={visible}
              onBackdropPress={toggleOverlay}
              overlayStyle={{
                width: 150,
                height: 90,
                marginLeft: "65%",
                marginBottom: "25%",
                borderBottomLeftRadius: 20,
                borderBottomEndRadius: 20,
                borderTopLeftRadius: 20,
                backgroundColor: "#F9A85F",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderWidth: 0.5,
                    height: 50,
                    width: 50,
                    backgroundColor: "#ffffe0",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <EvilIcons
                    name="lock"
                    size={35}
                    color="#191970"
                    style={{
                      borderWidth: 1.5,
                      borderRadius: 20,
                      height: 35,
                      width: 35,
                      borderColor: "#191970",
                    }}
                    onPress={() => onToggleOverlay()}
                  />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 10, fontWeight: "bold", color: "#191970" }}
                >
                  Log Out
                </Text>
              </View>
            </Overlay>
            <Overlay
              isVisible={visible1}
              overlayStyle={{
                height: 270,
                width: 600,
                backgroundColor: "#F9A85F",
                borderRadius: 20,
                borderColor: "#ff8c00",
                borderWidth: 3,
              }}
            >
              <View
                style={{
                  width: 22,
                  height: 22,
                  marginHorizontal: 560,
                  borderRadius: 20,
                  borderWidth: 0.1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <TouchableOpacity onPress={toggleOverlay1}>
                  <Entypo name="cross" size={20} color="#F9A85F" />
                </TouchableOpacity>
              </View>
              <View style={{ alignSelf: "center" }}>
                <View
                  style={{
                    marginVertical: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderRadius: 12,
                    height: 150,
                    width: 500,
                    backgroundColor: "#f5f5f5",
                    borderColor: "#ff8c00",
                  }}
                >
                  <Text style={{ color: "#191970" }}>
                    Are you sure you want to log out?
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 180,
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#35C3FE",
                    width: 60,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <TouchableOpacity onPress={handleLogout}>
                    <Text>Yes</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    backgroundColor: "#35C3FE",
                    width: 60,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <TouchableOpacity onPress={toggleOverlay1}>
                    <Text>No</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Overlay>

            <Overlay
              isVisible={quizzOverlay}
              overlayStyle={{
                width: "70%",
                height: "80%",
                marginRight: "8%",
                marginBottom: "10%",
                marginTop: "5%",
                borderBottomLeftRadius: 20,
                borderBottomEndRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: "#F9A85F",
              }}
            >
              <View
                style={{
                  // backgroundColor: "red",
                  width: "100%",
                  height: 50,
                  padding: 5,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity onPress={() => onCharToggleOverlay()}>
                    <Image
                      source={require("../assets/Waqas_Ilyas.jpg")}
                      style={{ height: 40, width: 40 }}
                    />
                  </TouchableOpacity>
                  <View style={{ paddingHorizontal: 5 }}>
                    <Text style={{ fontWeight: "600" }}>
                      Name: {child.child.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="progress-star"
                        size={20}
                        color={"black"}
                      />

                      <View style={{ padding: 8 }}>
                        <Progress.Bar
                          // progress={0.5}
                          progress={child.enrollment.score / 100}
                          width={150}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={toggleQuizOverlay}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 20,
                    borderWidth: 0.1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Entypo name="cross" size={20} color="#F9A85F" />
                </TouchableOpacity>
              </View>
              <ScrollView>
                {Quizes != null ? (
                  <View>
                    <View>
                      {Quizes.pre_k.length != 0 ? (
                        <View style={{ marginTop: 10 }}>
                          <Text>Class: Pre-K</Text>
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                              <Text style={styles.tableHeaderCell}>
                                Quiz No:
                              </Text>
                              <Text style={styles.tableHeaderCell}>
                                Total Marks
                              </Text>
                              <Text style={styles.tableHeaderCell}>
                                Obtain Marks
                              </Text>
                            </View>
                            {Quizes.pre_k.map((row, index) => (
                              <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableCell}>
                                  {row.quiz_no}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {row.total_marks}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {row.obtain_marks}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      ) : null}
                    </View>

                    <View>
                      {Quizes.kindergarden.length != 0 ? (
                        <View style={{ marginTop: 10 }}>
                          <Text>Class: Kinder-Garten</Text>
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                              <Text style={styles.tableHeaderCell}>
                                Quiz No:
                              </Text>
                              <Text style={styles.tableHeaderCell}>
                                Total Marks
                              </Text>
                              <Text style={styles.tableHeaderCell}>
                                Obtain Marks
                              </Text>
                            </View>
                            {Quizes.kindergarden.map((row, index) => (
                              <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableCell}>
                                  {row.quiz_no}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {row.total_marks}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {row.obtain_marks}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      ) : null}
                    </View>

                    <View>
                      {Quizes.one.length != 0 ? (
                        <View style={{ marginTop: 10 }}>
                          <Text>Class: One</Text>
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                              <Text style={styles.tableHeaderCell}>
                                Quiz No:
                              </Text>
                              <Text style={styles.tableHeaderCell}>
                                Total Marks
                              </Text>
                              <Text style={styles.tableHeaderCell}>
                                Obtain Marks
                              </Text>
                            </View>
                            {Quizes.one.map((row, index) => (
                              <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableCell}>
                                  {row.quiz_no}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {row.total_marks}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {row.obtain_marks}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      ) : null}
                    </View>

                    <View>
                      {Quizes.two.length != 0 ? (
                        <View style={{ marginTop: 10 }}>
                          <Text>Class: Two</Text>
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                              <Text style={styles.tableHeaderCell}>
                                Quiz No:
                              </Text>
                              <Text style={styles.tableHeaderCell}>
                                Total Marks
                              </Text>
                              <Text style={styles.tableHeaderCell}>
                                Obtain Marks
                              </Text>
                            </View>
                            {Quizes.two.map((row, index) => (
                              <View style={styles.tableRow} key={index}>
                                <Text style={styles.tableCell}>
                                  {row.quiz_no}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {row.total_marks}
                                </Text>
                                <Text style={styles.tableCell}>
                                  {row.obtain_marks}
                                </Text>
                              </View>
                            ))}
                          </View>
                        </View>
                      ) : null}
                    </View>
                  </View>
                ) : null}
              </ScrollView>
            </Overlay>
            <Overlay
              isVisible={charOverlay}
              overlayStyle={{
                width: "65%",
                height: "80%",
                marginRight: "8%",
                marginBottom: "10%",
                marginTop: "5%",
                borderBottomLeftRadius: 20,
                borderBottomEndRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: "#F9A85F",
              }}
            >
              <View
                style={{ justifyContent: "flex-end", flexDirection: "row" }}
              >
                <TouchableOpacity
                  onPress={toggleCharOverlay}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 20,
                    borderWidth: 0.1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Entypo name="cross" size={20} color="#F9A85F" />
                </TouchableOpacity>
              </View>
              <ScrollView>
                <View>
                  <Text style={{ fontSize: 42 }}>Avatar 1</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 42 }}>Avatar 1</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 42 }}>Avatar 1</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 42 }}>Avatar 1</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 42 }}>Avatar 1</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 42 }}>Avatar 1</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 42 }}>Avatar 1</Text>
                </View>
              </ScrollView>
            </Overlay>

            <View style={styles.center}>
              <View style={styles.opacity}>
                <TouchableOpacity
                  style={styles.opacity1}
                  disabled={child.child.class >= 1 ? false : true}
                  onPress={() => navigation.navigate("Pre_K")}
                  // onPress={() => navigation.navigate(Pre_K)}
                >
                  {child.child.class >= 1 ? (
                    <View style={{ width: "100%", height: 25 }}></View>
                  ) : (
                    <Feather
                      name={"lock"}
                      size={25}
                      style={{ alignSelf: "flex-end" }}
                      color={"white"}
                    />
                  )}
                  <Text style={styles.opacitytext}>Pre_K</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.opacity1}
                  disabled={child.child.class >= 2 ? false : true}
                  onPress={() => navigation.navigate("Kinder")}
                >
                  {child.child.class >= 2 ? (
                    <View style={{ width: "100%", height: 25 }}></View>
                  ) : (
                    <Feather
                      name={"lock"}
                      size={25}
                      style={{ alignSelf: "flex-end" }}
                      color={"white"}
                    />
                  )}
                  <Text style={styles.opacitytext}>Kindergarten</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.opacity}>
                <TouchableOpacity
                  style={styles.opacity1}
                  disabled={child.child.class >= 3 ? false : true}
                  onPress={() => navigation.navigate("ClassOne")}
                >
                  {child.child.class >= 3 ? (
                    <View style={{ width: "100%", height: 25 }}></View>
                  ) : (
                    <Feather
                      name={"lock"}
                      size={25}
                      style={{ alignSelf: "flex-end" }}
                      color={"white"}
                    />
                  )}
                  <Text style={styles.opacitytext}>Class 1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.opacity1}
                  disabled={child.child.class == 4 ? false : true}
                  onPress={() => navigation.navigate("ClassTwo")}
                >
                  {child.child.class >= 4 ? (
                    <View style={{ width: "100%", height: 25 }}></View>
                  ) : (
                    <Feather
                      name={"lock"}
                      size={25}
                      style={{ alignSelf: "flex-end" }}
                      color={"white"}
                    />
                  )}
                  <Text style={styles.opacitytext}>Class 2</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  opacity: {
    flexDirection: "row",
  },
  opacity1: {
    backgroundColor: "#F9A85F",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ff8c00",
    margin: 20,
    width: 170,
    height: 70,
  },
  opacitytext: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -5,
    color: "white",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  table: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: "#333",
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
  },
  tableCell: {
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: "#666",
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
  },
  cointext: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
});
