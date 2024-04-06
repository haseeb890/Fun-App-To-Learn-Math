import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Image,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-simple-toast";
import { Ionicons } from "react-native-vector-icons";

export default function ChildAccount({ navigation }) {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [classes, setClasses] = useState("");
  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [dat, setDat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onhandleSubmitform = async () => {
    setIsLoading(true);

    if (
      name.length != 0 &&
      username.length != 0 &&
      password.length != 0 &&
      classes.length != 0
    ) {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("childname", username);
      formData.append("password", password);
      formData.append("class_id", classes);
      formData.append("parent_id", userData.id);
      // console.log();
      console.log(name);
      console.log(username);
      console.log(password);
      console.log(classes);
      console.log(userData.id);
      await axios
        .post("http://funapp.ahmedhousedeal.com/api/add_child", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((result) => {
          console.log(result.data);
          if (result.data.error) {
            // console.log(result.data.msg);
            setIsLoading(false);

            Toast.show(result.data.msg);
          } else {
            setIsLoading(false);
            setName("");
            setUserName("");
            setPassword("");
            setClasses("");
            Toast.show("Child account created");
            // console.log("Child account created");
          }
        });
    }
  };

  const getChild = () => {
    axios
      .get("http://funapp.ahmedhousedeal.com/api/get_classes")
      .then((result) => {
        // console.log(result.data);
        // setTimeout(() => {
        //   setDat(result.data.classes);
        // }, 3000);
        // console.log("==========================");
        // console.log(dat);
        // console.log("==========================");
        let v = result.data.classes;
        const arr = v.map((item) => ({ label: item.name, value: item.id }));
        setItems(arr);
      });
  };
  const getUserdata = async () => {
    const parent = await AsyncStorage.getItem("parent");
    setUserData(JSON.parse(parent));
  };
  const handleChangeClass = (text) => {
    console.log("============ class ==========");
    console.log(text);
  };
  useEffect(() => {
    getUserdata();
    getChild();
  }, [isLoading]);

  return (
    <View style={styles.mainView}>
      <View style={styles.mainView2}>
        <View>
          <Text style={styles.txt}>Create Child Account</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={styles.view2}>
            <TextInput
              placeholder="Name"
              style={styles.inputs}
              value={name}
              onChangeText={(text) => setName(text)}
            ></TextInput>
            <TextInput
              placeholder="Username"
              style={styles.inputs}
              value={username}
              onChangeText={(text) => setUserName(text)}
            ></TextInput>
            <TextInput
              placeholder="Password"
              style={styles.inputs}
              value={password}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>

            <View>
              <DropDownPicker
                placeholder="Select Class"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.inputs}
                onChangeValue={(item) => setClasses(item)}
              />
            </View>
            <TouchableOpacity
              style={styles.opacityButton}
              onPress={onhandleSubmitform}
            >
              {isLoading == true ? (
                <Image
                  source={require("../assets/roll.gif")}
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <Text style={styles.textUpdate}>Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     backgroundColor: "#E5F3FF",
//   },
//   mainView2: {
//     backgroundColor: "#F9A85F",
//     height: "35%",
//     borderBottomLeftRadius: 100,
//     borderBottomRightRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   icon1: {
//     marginTop: 20,
//   },
//   txt: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "white",
//   },

//   view2: {
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   inputs: {
//     borderWidth: 0.5,
//     borderColor: "black",
//     backgroundColor: "white",
//     height: 45,
//     width: 250,
//     marginTop: 30,
//     padding: 8,
//     borderRadius: 5,
//   },

//   opacityButton: {
//     borderRadius: 5,
//     height: 45,
//     width: 250,
//     marginTop: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F9A85F",
//   },
//   textUpdate: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });
// --------------------------------------
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#E5F3FF",
  },
  mainView2: {
    backgroundColor: "#F9A85F",
    height: "35%",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  icon1: {
    marginTop: 20,
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  view1: {
    alignItems: "center",
    marginTop: "20%",
  },
  view2: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  inputs: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    height: 45,
    width: 250,
    marginTop: 40,
    padding: 8,
    borderRadius: 5,
  },

  opacityButton: {
    borderRadius: 5,
    height: 45,
    width: 250,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9A85F",
  },
  textUpdate: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
