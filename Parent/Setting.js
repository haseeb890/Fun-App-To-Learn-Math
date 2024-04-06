import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "react-native-vector-icons";
import { Overlay } from "react-native-elements/dist/overlay/Overlay";
import { Rating } from "react-native-elements";
import Toast from "react-native-simple-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export default function Setting({ navigation }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState("");
  const [userData, setuserData] = useState("");

  useEffect(() => {
    const func = async () => {
      let a = await AsyncStorage.getItem("parent");
      a = await JSON.parse(a);
      setuserData(a);
      console.log(a);
    };
    func();
  }, []);

  const editProfile = () => {
    navigation.navigate("EditProfile");
  };
  const changePass = () => {
    navigation.navigate("ChangePassword");
  };
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const ratingCompleted = (rating) => {
    setRating(rating);
    console.log("Rating is: " + rating);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage Cleard.");
    } catch (error) {
      console.log("Error clearing AsyncStorage:", error);
    }
    navigation.navigate("Login");
  };

  const ratingApi = () => {
    setLoading(true);
    const formData = new FormData();

    formData.append("user_id", userData.id);
    formData.append("rating", rating);
    formData.append("comment", comment);

    axios
      .post("http://funapp.ahmedhousedeal.com/api/feedback", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        if (result.data.error) {
          console.log(result.data.msg);
          setLoading(true);

          Toast.show(result.data.msg);
        } else {
          setLoading(false);
          console.log("feedback Sent");
          setComment("");
          Toast.show("Feedback Successfully sent");
        }
      });
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.mainView1}>
        <View>
          <MaterialCommunityIcons
            name="account-settings"
            size={120}
            color="#E5F3FF"
          />
        </View>
      </View>
      <View style={styles.view1}>
        <TouchableOpacity style={styles.view2} onPress={editProfile}>
          <View style={styles.textStyle}>
            <Text style={styles.txt}>Edit Profile</Text>
          </View>
          <View style={styles.iconStyle}>
            <AntDesign name="right" size={15} style={styles.txt} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.view2} onPress={changePass}>
          <View style={styles.textStyle}>
            <Text style={styles.txt}>Change Password</Text>
          </View>
          <View style={styles.iconStyle}>
            <AntDesign name="right" size={15} style={styles.txt} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.view2} onPress={toggleOverlay}>
          <View style={styles.textStyle}>
            <Text style={styles.txt}>Feedback</Text>
          </View>
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={50}
              showRating
              // onFinishRating={ratingCompleted}
              onFinishRating={(e) => setRating(e)}
            />
            <View>
              <TextInput
                placeholder="Comment"
                placeholderTextColor={"gray"}
                value={comment}
                onChangeText={(e) => setComment(e)}
                multiline={true}
                style={{
                  borderWidth: 0.5,

                  height: 70,
                  width: 320,
                  borderColor: "black",
                  marginTop: 20,
                }}
              ></TextInput>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                borderRadius: 5,
                backgroundColor: "#F9A85F",
                height: 40,
                width: 90,
                left: 110,
              }}
              onPress={ratingApi}
            >
              {loading == true ? (
                <Image
                  source={require("../assets/roll.gif")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  Submit
                </Text>
              )}
            </TouchableOpacity>
          </Overlay>
        </TouchableOpacity>

        <TouchableOpacity style={styles.view2} onPress={handleLogout}>
          <View style={styles.textStyle}>
            <Text style={styles.txt}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#E5F3FF",
  },
  mainView1: {
    backgroundColor: "#F9A85F",
    height: "35%",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    alignItems: "center",
    // marginTop: 60,
  },
  view2: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 0.5,
    height: 60,
    width: 300,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  textStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
  },
});
