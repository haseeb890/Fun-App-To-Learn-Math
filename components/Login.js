import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign, Feather } from "react-native-vector-icons";
import Screenone from "./Screenone";
import { useEffect, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import CheckBox from "react-native-check-box";
import Toast from "react-native-simple-toast";
import axios from "axios";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [forgotpassword, setForgotPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isLogin = async () => {
      const parentLogin = await AsyncStorage.getItem("loginParent");
      const childLogin = await AsyncStorage.getItem("loginChild");
      if (parentLogin == "true") {
        navigation.navigate("TabNavigator");
      } else if (childLogin == "true") {
        navigation.navigate("Screenone");
      }
    };
    isLogin();
    const unsubscribe = navigation.addListener("focus", async () => {
      // Reset the state to its initial values here
      console.log("Refresh");
      console.log("Yessss");
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
      );
    });

    return unsubscribe;
  }, [navigation]);

  const handleSubmitForm = async () => {
    if (username.length != 0 && password.length != 0) {
      const formData = new FormData();
      formData.append("password", password);

      if (isChecked == false) {
        setIsLoading(true);
        formData.append("username", username);
        await axios
          .post("http://funapp.ahmedhousedeal.com/api/login_child", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(async (response) => {
            console.log(response.data);
            if (response.data.error) {
              console.log(response.data.msg);
              Toast.show(response.data.msg);
              console.log(response.data.msg);
              setIsLoading(false);
            } else {
              setIsLoading(false);
              Toast.show("Succesfully Loged In");
              console.log("login child");
              AsyncStorage.setItem("loginChild", "true");
              AsyncStorage.setItem("child", JSON.stringify(response.data));
              AsyncStorage.setItem(
                "coin",
                JSON.stringify(response.data.child.coin)
              );
              AsyncStorage.setItem(
                "quizData",
                JSON.stringify(response.data.quizes)
              );
              console.log(response.data);
              console.log("@@@@@@@");
              // let a = await AsyncStorage.setItem(
              //   "child",
              //   JSON.stringify(response.data.child)
              // );

              navigation.navigate("Screenone");
            }
          });
      } else if (isChecked == true) {
        setIsLoading(true);
        formData.append("email", username);
        console.log("Parent Api");
        await axios
          .post("http://funapp.ahmedhousedeal.com/api/login_user", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then(async (response) => {
            if (response.data.error) {
              console.log(response.data.msg);
              Toast.show(response.data.msg);

              setIsLoading(false);
            } else {
              Toast.show("Succesfully Loged In");
              await AsyncStorage.setItem("loginParent", "true");
              await AsyncStorage.setItem(
                "parent",
                JSON.stringify(response.data.user)
              );
              console.log(response.data.user);
              navigation.navigate("TabNavigator");
              setIsLoading(false);
            }
          });
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar hidden /> */}
      <ImageBackground
        source={require("../assets/Register.png")}
        style={styles.main}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={{ flex: 1 }}
        >
          <View style={styles.view}>
            <Text style={styles.logintxt}>Login</Text>
          </View>
          <ScrollView>
            <View>
              <View style={styles.view1}>
                <View style={styles.shadowview}>
                  <TextInput
                    placeholder="Username or Email"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.input1}
                  ></TextInput>

                  <View style={styles.view2}>
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={hidePass ? true : false}
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      style={styles.inp}
                    ></TextInput>
                    <TouchableOpacity
                      style={styles.pasOpacity}
                      onPress={() => setHidePass(!hidePass)}
                    >
                      <Feather
                        name={hidePass == false ? "eye-off" : "eye"}
                        size={20}
                        color="gray"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={handleSubmitForm}
                  style={styles.opacity}
                >
                  {isLoading == true ? (
                    <Image
                      source={require("../assets/roll.gif")}
                      style={{ height: 30, width: 30 }}
                    />
                  ) : (
                    <AntDesign name="arrowright" size={30} color={"white"} />
                  )}
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
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
                style={styles.forgotpas}
              >
                <Text style={{ color: "blue" }}>Forgot Password</Text>
              </TouchableOpacity>

              <View style={styles.regView}>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                  <Text style={styles.registertxt}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
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
  view1: {
    flexDirection: "row",
    marginTop: "25%",
  },
  shadowview: {
    backgroundColor: "white",
    elevation: 10,
    borderBottomEndRadius: 100,
    borderTopEndRadius: 100,
  },
  view2: {
    flexDirection: "row",
    borderWidth: 1,
    width: 320,
    height: 70,
    borderBottomEndRadius: 100,
    borderColor: "#fff0f5",
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
  inp: {
    padding: 15,
    width: "80%",
    height: "100%",
  },
  pasOpacity: {
    justifyContent: "center",
    alignItems: "center",
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
  forgotpas: {
    margin: 10,
    width: 150,
  },
  regView: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#fff0f5",
    marginTop: 40,
    width: 100,
    height: 40,
  },
  registertxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    padding: 5,
  },
});
