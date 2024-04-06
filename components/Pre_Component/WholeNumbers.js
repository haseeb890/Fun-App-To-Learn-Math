import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AnimatedLottieView } from "lottie-react-native";
import Swiper from "react-native-swiper";
import { ImageBackground } from "react-native";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { useState, useEffect } from "react";
import * as Speech from "expo-speech";

export default function Counting({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Counting 1 to 10", { language: "en" });
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
  const handleBack = () => {
    navigation.navigate("Kinder");
  };
  const handleIndexChanged = (index) => {
    let text = null;
    if (index == 0) {
      text = "Counting 1 to 10";
    } else if (index == 1) {
      text = "Counting 11 to 20";
    } else if (index == 2) {
      text = "Counting 21 to 30";
    } else if (index == 3) {
      text = "Counting 31 to 40";
    } else if (index == 4) {
      text = "Counting 41 to 50";
    } else if (index == 5) {
      text = "Counting 51 to 60";
    } else if (index == 6) {
      text = "Counting 61 to 70";
    } else if (index == 7) {
      text = "Counting 71 to 80";
    } else if (index == 8) {
      text = "Counting 81 to 90";
    } else if (index == 9) {
      text = "Counting 91 to 100";
    }

    if (text != null) {
      Speech.speak(text, { language: "en" });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/PreBack.gif")}
        style={{ width: "100%", height: "100%" }}
      >
        <Swiper
          showsButtons={false}
          showsPagination={true}
          dotColor={"white"}
          loop={false}
          onIndexChanged={(index) => handleIndexChanged(index)}
        >
          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/1to10.mp4?alt=media&token=d8fe129f-4019-4538-bf98-8b13536ab3a1",
                })
              }
            >
              <Image
                source={require("../../assets/Counting10.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 1 to 10</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/11to20.mp4?alt=media&token=fb470158-059c-4ea5-bb2e-09a6a990e9c5",
                })
              }
            >
              <Image
                source={require("../../assets/count11.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 11 to 20</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/20to30.mp4?alt=media&token=ea23b0a9-849f-4d9b-ab13-7b94645dfdc2",
                })
              }
            >
              <Image
                source={require("../../assets/count21.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 21 to 30</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/30to40.mp4?alt=media&token=1e5cd14e-5fc5-40b6-870a-c275ce4796e7",
                })
              }
            >
              <Image
                source={require("../../assets/count31.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 31 to 40</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/40to50.mp4?alt=media&token=d27f1912-a1c2-4fde-a00b-5fd4a2b9343f",
                })
              }
            >
              <Image
                source={require("../../assets/count41.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 41 to 50</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/50to60.mp4?alt=media&token=a7502705-0132-4d53-9286-a745c02126d3",
                })
              }
            >
              <Image
                source={require("../../assets/count51.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 51 to 60</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/60to70.mp4?alt=media&token=aaa261ac-3c14-44a9-aa9c-ed6a7fb0add4",
                })
              }
            >
              <Image
                source={require("../../assets/count61.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 61 to 70</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/70to80.mp4?alt=media&token=6af7cdcd-095c-4030-86bf-87365052d9be",
                })
              }
            >
              <Image
                source={require("../../assets/count71.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 71 to 80</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/80to90.mp4?alt=media&token=85266249-cd00-4a40-852b-faa04443bf8e",
                })
              }
            >
              <Image
                source={require("../../assets/count81.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 81 to 90</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/90to100.mp4?alt=media&token=b1096433-2bc9-4351-b533-2c5098456997",
                })
              }
            >
              <Image
                source={require("../../assets/count91.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Counting 91 to 100</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
        <TouchableOpacity onPress={handleBack} style={styles.handle}>
          <AntDesign name="back" size={35} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  opacity: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    // marginTop: 15,
    alignSelf: "center",
    height: "68%",
    width: 240,
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
  opacitytext: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 5,
    alignSelf: "center",
    color: "pink",
  },
  image1: {
    width: "100%",
    height: "87%",
    alignSelf: "center",
    resizeMode: "stretch",
  },
});
