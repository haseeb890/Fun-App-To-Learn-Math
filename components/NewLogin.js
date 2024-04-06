import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from "react-native-vector-icons";
import Screenone from "./Screenone";
import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import CheckBox from "react-native-check-box";
import axios from "axios";

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  const handleSubmitForm = () => {
    if (username.length != 0 && password.length != 0) {
      const formdata = new FormData();
      formdata.append("username", username);
      formdata.append("password", password);
      console.log("aaa");
      if (isChecked == false) {
        console.log("Child Api");
      } else if (isChecked == true) {
        console.log("Parent Api");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/Register.png")}
      style={styles.main}
    >
      <View>
        <View style={styles.view}>
          <Text style={styles.logintxt}>Login</Text>
        </View>

        <View style={styles.view1}>
          <View style={styles.shadowview}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={styles.input1}
            ></TextInput>

            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={styles.input2}
            ></TextInput>
          </View>
          <TouchableOpacity onPress={handleSubmitForm} style={styles.opacity}>
            <AntDesign name="arrowright" size={30} color={"white"} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewBox}>
          <CheckBox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            rightText="Login as a Parent"
            rightTextStyle={{
              fontSize: 17,
              color: "#c0c0c0",
            }}
          />
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.registertxt}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  view: {
    marginTop: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  logintxt: {
    fontSize: 25,
    fontWeight: "bold",
  },
  view1: { display: "flex", flexDirection: "row", marginTop: 50 },
  shadowview: {
    shadowColor: "#000000",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input1: {
    // marginTop: 60,
    borderWidth: 1,
    padding: 15,
    height: 70,
    width: 320,
    borderTopRightRadius: 100,
    borderColor: "#fff0f5",
  },
  input2: {
    borderWidth: 1,
    padding: 15,
    width: 320,
    height: 70,
    borderBottomEndRadius: 100,
    borderColor: "#fff0f5",
  },
  opacity: {
    marginLeft: -20,
    backgroundColor: "#32cd32",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 44,
  },
  viewBox: {
    margin: 15,
  },
  registertxt: {
    marginTop: 80,
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    borderWidth: 0.5,
    borderColor: "#fff0f5",
    borderRadius: 15,
    padding: 5,
    height: 40,
    width: 120,
  },
});
