import { StatusBar } from "expo-status-bar";
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
import { useEffect, useState } from "react";
import Toast from "react-native-simple-toast";
import axios from "axios";
import { Ionicons } from "react-native-vector-icons";

export default function ForgotPassword({ navigation }) {
  const handleBack = () => {
    navigation.navigate("Setting");
  };

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const forgotPassword = () => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append("email", email);

    axios
      .post(
        "http://funapp.ahmedhousedeal.com/api/forgot_password_user",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((result) => {
        if (result.data.error) {
          console.log(result.data.msg);
          setIsLoading(false);

          Toast.show(result.data.msg);
        } else {
          setIsLoading(false);
          setEmail("");
          console.log("Email sent");

          Toast.show("Email sent");
        }
      });
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
          <View style={{ width: "100%", height: "100%" }}>
            <View style={styles.view2}>
              <Text style={styles.logintxt}>Forgot Password</Text>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Enter email"
                style={styles.inputs}
              ></TextInput>
              <TouchableOpacity
                onPress={forgotPassword}
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

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.forgotpas}
              >
                <Text style={{ color: "blue", fontSize: 20 }}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    marginTop: 10,
    marginLeft: "50%",
    width: 70,
  },
  registertxt: {
    marginTop: 40,
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

  view1: {
    backgroundColor: "#F9A85F",
    height: "35%",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    marginTop: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  // iconmid: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
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
