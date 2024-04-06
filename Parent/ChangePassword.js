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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-simple-toast";

export default function ChangePassword({ navigation }) {
  const handleBack = () => {
    navigation.navigate("Setting");
  };

  const [oldPassword, setOldPassword] = useState("");
  const [userData, setuserData] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const func = async () => {
      let a = await AsyncStorage.getItem("parent");
      a = await JSON.parse(a);
      setuserData(a);
      console.log(a);
    };
    func();
  }, []);

  const onChangePas = () => {
    if (oldPassword.length != 0 && newPassword.length != 0) {
      if (newPassword === confirmPassword) {
        setIsLoading(true);
        const formData = new FormData();
        console.log(userData.id);
        console.log(oldPassword);
        console.log(newPassword);
        formData.append("id", userData.id);
        formData.append("password", oldPassword);
        formData.append("new_password", newPassword);

        axios
          .post(
            "http://funapp.ahmedhousedeal.com/api/change_password_user",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          )
          .then((result) => {
            if (result.data.error) {
              console.log(result.data.msg);
              setIsLoading(true);
              Toast.show(result.data.msg);
            } else {
              setIsLoading(false);
              setOldPassword("");
              setNewPassword("");
              setConfirmPassword("");
              Toast.show("Password Updated");
            }
          });
      } else {
      }
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.view1}>
        <View style={styles.icon1}>
          <TouchableOpacity onPressIn={handleBack}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="form-textbox-password"
            size={120}
            color="#E5F3FF"
          />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={styles.view2}>
            <TextInput
              placeholder="Old Password"
              value={oldPassword}
              onChangeText={(text) => setOldPassword(text)}
              style={styles.inputs}
            ></TextInput>
            <TextInput
              placeholder="New Password"
              style={styles.inputs}
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
            ></TextInput>
            <TextInput
              placeholder="Confirm Password"
              style={styles.inputs}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            ></TextInput>
            <TouchableOpacity
              onPress={onChangePas}
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
  icon1: {
    marginTop: 20,
  },
  view1: {
    backgroundColor: "#F9A85F",
    height: "35%",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  txt: {
    fontSize: 25,
    fontWeight: "bold",
  },
  view2: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    height: 40,
    width: 250,
    marginTop: 30,
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
