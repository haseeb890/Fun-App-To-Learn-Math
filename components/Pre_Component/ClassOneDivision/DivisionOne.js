import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import { AntDesign } from "react-native-vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Speech from "expo-speech";
export default function DivisionOne({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Division 1", { language: "en" });
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
    console.log("yes");
    navigation.navigate("ClassOne");
  };
  const handleIndexChanged = (index) => {
    let text = null;
    if (index == 0) {
      text = "Division 1";
    } else if (index == 1) {
      text = "Division 2";
    } else if (index == 2) {
      text = "Division 3";
    } else if (index == 3) {
      text = "Division 4";
    } else if (index == 4) {
      text = "Division 5";
    }

    if (text != null) {
      Speech.speak(text, { language: "en" });
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../../assets/Class1Back.gif")}
        style={{ height: "100%", width: "100%" }}
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
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide1.mp4?alt=media&token=ec1aa9df-6712-4b07-b5d8-7cf3703ecd2c",
                })
              }
            >
              <Image
                source={require("../../../assets/divide1.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 1</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide2.mp4?alt=media&token=6b769612-76d3-439f-b293-d35acdc67640",
                })
              }
            >
              <Image
                source={require("../../../assets/divide2.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 2</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide3.mp4?alt=media&token=8b6b4922-ec21-4235-95f2-51b440055f13",
                })
              }
            >
              <Image
                source={require("../../../assets/divide3.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide4.mp4?alt=media&token=e935d467-d071-4e25-8b1c-cef25d3e748c",
                })
              }
            >
              <Image
                source={require("../../../assets/divide4.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 4</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/divide5.mp4?alt=media&token=729be6b9-5969-4566-a50c-c9501f8942e7",
                })
              }
            >
              <Image
                source={require("../../../assets/divide5.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Division 5</Text>
            </TouchableOpacity>
          </View>
        </Swiper>
        <TouchableOpacity style={styles.handle} onPress={handleBack}>
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
    // backgroundColor: "yellow",
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
    color: "pink",
    alignSelf: "center",
  },
  image1: {
    width: "100%",
    height: "87%",
    alignSelf: "center",
    resizeMode: "stretch",
  },
});
