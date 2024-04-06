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
export default function ClassOneTable({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    Speech.speak("Table 1", { language: "en" });
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
      text = "Table 1";
    } else if (index == 1) {
      text = "Table 2";
    } else if (index == 2) {
      text = "Table 3";
    } else if (index == 3) {
      text = "Table 4";
    } else if (index == 4) {
      text = "Table 5";
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
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/1table.mp4?alt=media&token=8b0e8e7a-bff8-465c-85b7-ff1db4d38fd0",
                })
              }
            >
              <Image
                source={require("../../../assets/table1.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 1</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/2.mp4?alt=media&token=362e9d5e-598b-4a8b-a6f2-073f1dc8978c",
                })
              }
            >
              <Image
                source={require("../../../assets/table2.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 2</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/3.mp4?alt=media&token=a4c897b7-8e65-4505-9cae-cd5a15b01cc5",
                })
              }
            >
              <Image
                source={require("../../../assets/tiger1.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/4.mp4?alt=media&token=1b207082-d3a0-4dd1-a65a-23b996e0466b",
                })
              }
            >
              <Image
                source={require("../../../assets/table4.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 4</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.center}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() =>
                navigation.navigate("VideoScreen", {
                  url: "https://firebasestorage.googleapis.com/v0/b/video-de354.appspot.com/o/5.mp4?alt=media&token=f9791d1c-78da-47dc-8f76-4dd0e4fcb8e2",
                })
              }
            >
              <Image
                source={require("../../../assets/table5.gif")}
                style={styles.image1}
              />

              <Text style={styles.opacitytext}>Table 5</Text>
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
