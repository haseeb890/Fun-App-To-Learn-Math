import { StatusBar } from "expo-status-bar";
import { ImageBackground, KeyboardAvoidingView } from "react-native";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "react-native-vector-icons";
import { useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import axios from "axios";
import Toast from "react-native-simple-toast";

// async function changeScreenOrientation() {

//   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
// }

export default function SignUp({ navigation }) {
  useEffect(() => {
    // changeScreenOrientation()
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = async () => {
    if (
      username.length != 0 &&
      email.length != 0 &&
      password.length != 0 &&
      phoneNo.length != 0
    ) {
      const formData = new FormData();
      setIsLoading(true);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phone_no", phoneNo);

      await axios
        .post("http://funapp.ahmedhousedeal.com/api/add_user", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((result) => {
          console.log(result);
          setIsLoading(false);
        });
      navigation.navigate("Login");
      console.log("after request");
    }
  };
  return (
    <ImageBackground
      source={require("../assets/Register.png")}
      style={styles.main}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View>
            <View style={styles.view}>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.regText}>Register</Text>

            <View>
              <View style={styles.view2}>
                <TextInput
                  placeholder="Username"
                  value={username}
                  onChangeText={(text) => {
                    setUsername(text);
                  }}
                  style={styles.inputs}
                ></TextInput>

                <View style={styles.view3}>
                  <View>
                    <TextInput
                      placeholder="Email"
                      value={email}
                      onChangeText={(text) => {
                        setEmail(text);
                      }}
                      keyboardType="email-address"
                      style={styles.input2}
                    ></TextInput>

                    <View style={styles.view4}>
                      <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={hidePass ? true : false}
                        style={styles.inp}
                      ></TextInput>
                      <TouchableOpacity
                        style={styles.pasOpacity}
                        onPress={() => setHidePass(!hidePass)}
                      >
                        <Feather
                          name={hidePass == false ? "eye-off" : "eye"}
                          size={20}
                          color={"gray"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.opacity}
                    onPress={handleSubmitForm}
                  >
                    {isLoading == true ? (
                      <Image
                        source={require("../assets/roll.gif")}
                        style={{ height: 30, width: 30 }}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="check"
                        size={40}
                        color="white"
                      />
                    )}
                  </TouchableOpacity>
                </View>

                <TextInput
                  placeholder="Phone No"
                  value={phoneNo}
                  onChangeText={(text) => setPhoneNo(text)}
                  secureTextEntry
                  style={styles.input3}
                ></TextInput>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  view: {
    marginLeft: "80%",
    marginTop: 120,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#fff0f5",
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    padding: 7,
  },
  regText: {
    marginTop: "12%",
    marginLeft: "40%",
    fontSize: 25,
    fontWeight: "bold",
  },
  view2: {
    // backgroundColor: "red",
    backgroundColor: "white",
    elevation: 10,
    // borderWidth: 0.1,
    borderBottomEndRadius: 100,
    borderTopEndRadius: 100,
    marginTop: "22%",
    width: "85%",
  },
  inputs: {
    // borderTopRightRadius: 150,
    // borderWidth: 1,
    padding: 15,
    width: 320,
    height: 50,
    borderColor: "#fff0f5",
  },
  view3: {
    display: "flex",
    flexDirection: "row",
  },
  input2: {
    // borderWidth: 1,
    borderTopWidth: 1,
    padding: 15,
    width: "100%",
    height: 50,
    borderColor: "#fff0f5",
  },
  view4: {
    // borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: "100%",
    height: 50,
    borderColor: "#fff0f5",
    flexDirection: "row",
  },
  inp: {
    // borderWidth: 1,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // backgroundColor: "red",
    padding: 15,
    width: "80%",
    height: "100%",
    borderColor: "#fff0f5",
  },
  pasOpacity: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  opacity: {
    marginLeft: -10,
    backgroundColor: "#32cd32",
    borderRadius: 30,
    height: 60,
    marginTop: 20,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  input3: {
    // borderBottomRightRadius: 100,
    // borderWidth: 1,
    borderBottomWidth: 1.5,
    padding: 15,
    width: 250,
    height: 50,
    borderColor: "#fff0f5",
  },
});
