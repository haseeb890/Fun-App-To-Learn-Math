import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "react-native-vector-icons";
import Toast from "react-native-simple-toast";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function EditProfile({ navigation }) {
  const handleBack = () => {
    navigation.navigate("Setting");
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const func = async () => {
      let parent = await AsyncStorage.getItem("parent");
      setUserData(JSON.parse(parent));
      parent = await JSON.parse(parent);
      console.log(parent);
      setUsername(parent.name);
      setEmail(parent.email);
      setPhoneNo(parent.phone_no);
    };
    func();
  }, []);

  const editProfile = async () => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append("id", userData.id);
    formData.append("email", email);
    formData.append("name", username);
    formData.append("phone_no", phoneNo);

    axios
      .post("http://funapp.ahmedhousedeal.com/api/update_user", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(async (result) => {
        if (result.data.error) {
          console.log(result.data.msg);
          setIsLoading(false);

          Toast.show(result.data.msg);
        } else {
          setIsLoading(false);
          setUsername("");
          setEmail("");
          setPhoneNo("");

          console.log("Successfully updated");
          console.log(result.data);
          await AsyncStorage.setItem(
            "parent",
            JSON.stringify(result.data.user)
          );
          Toast.show("Successfully updated");

          setTimeout(async () => {
            console.log("&&&&&&&&&&&&&&&&&&&&&&&");
            let parent = await AsyncStorage.getItem("parent");
            parent = await JSON.parse(parent);
            console.log(parent);
            console.log("&&&&&&&&&&&&&&&&&&&&&&&");
          }, 2000);
        }
      });
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.view1}>
        <View style={styles.iconFirst}>
          <TouchableOpacity onPressIn={handleBack}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconmid}>
          <Ionicons name="person-circle-outline" size={120} color="#E5F3FF" />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={styles.view2}>
            <View>
              <Text>Username</Text>
              <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                style={styles.inputs}
              ></TextInput>
            </View>
            <View>
              <Text>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={styles.input1}
              ></TextInput>
            </View>
            <View>
              <Text>Phone No</Text>
              <TextInput
                value={phoneNo}
                onChangeText={setPhoneNo}
                placeholder="Phone No"
                style={styles.input2}
              ></TextInput>
            </View>
            <TouchableOpacity
              onPress={editProfile}
              style={styles.opacityButton}
            >
              {isLoading == true ? (
                <Image
                  source={require("../assets/roll.gif")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Text style={styles.textUpdate}>Update</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#E5F3FF",
  },
  view1: {
    backgroundColor: "#F9A85F",
    height: "35%",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  view2: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iconFirst: {
    marginTop: 20,
  },
  iconmid: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    height: 40,
    width: 250,
    // marginTop: 30,
    marginBottom: 10,
    padding: 8,
    borderRadius: 7,
  },
  input1: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    height: 40,
    width: 250,
    // marginTop: 30,
    marginBottom: 10,
    padding: 8,
    borderRadius: 7,
  },
  input2: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    height: 40,
    width: 250,
    // marginTop: 30,
    padding: 8,
    borderRadius: 7,
  },
  opacityButton: {
    borderRadius: 5,
    height: 40,
    width: 250,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9A85F",
    acticeOpacity: 1,
  },
  textUpdate: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
