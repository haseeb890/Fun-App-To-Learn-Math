import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Toast from "react-native-simple-toast";
import DropDownPicker from "react-native-dropdown-picker";
import ChildDetail from "./ChildDetail";
import { Ionicons } from "react-native-vector-icons";
import axios from "axios";
export default function ChildEdit({ navigation, route }) {
  const { childData } = route.params;

  const handleBack = () => {
    navigation.navigate("ChildDetail", { childData: childData });
  };
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [childClassId, setChildClassId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [dataToSend, setDataToSend] = useState("");
  const [items, setItems] = useState([
    { label: "Pre K", value: "Pre k" },
    { label: "Kindergarden", value: "kindergarden" },
    { label: "Class 1", value: "class 1" },
    { label: "Class 2", value: "class 2" },
  ]);

  const editChild = () => {
    setIsLoading(true);
    const formData = new FormData();
    let cId = value;
    if (value == "Pre k") {
      cId = 1;
    }
    if (value == "kindergarden") {
      cId = 2;
    }
    if (value == "class 1") {
      cId = 3;
    }
    if (value == "class 2") {
      cId = 4;
    }
    console.log(cId);
    console.log(username);
    console.log(name);
    console.log(password);

    formData.append("id", childData.child_data.id);
    formData.append("name", name);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("class_id", cId);

    axios
      .post("http://funapp.ahmedhousedeal.com/api/update_child", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        if (result.data.error) {
          console.log(result.data.msg);
          setIsLoading(false);

          Toast.show(result.data.msg);
        } else {
          setIsLoading(false);
          setUsername("");
          setName("");
          setPassword("");
          setChildClassId("");
          console.log("Successfully updated");
          console.log(result.data);
          navigation.navigate("HomePage");
          Toast.show("Successfully updated");
        }
      });
  };

  useEffect(() => {
    setName(childData.child_data.name);
    setUsername(childData.child_data.username);
    setPassword(childData.child_data.password);
    setChildClassId(childData.child_data.class);
  }, []);

  return (
    <View style={styles.mainView}>
      <View style={styles.mainView2}>
        <View style={styles.icon1}>
          <TouchableOpacity onPressIn={handleBack}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.view1}>
          <Text style={styles.txt}>Edit Child Profile</Text>
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
              />
            </View>
            <View>
              <Text>Name</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
                style={styles.input1}
              ></TextInput>
            </View>
            <View>
              <Text>Password</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                style={styles.input2}
              ></TextInput>
            </View>

            <View>
              <Text>Select Class</Text>
              <DropDownPicker
                placeholder="Select a Class"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.input3}
              />
            </View>

            <TouchableOpacity onPress={editChild} style={styles.opacityButton}>
              <Text style={styles.textUpdate}>Update</Text>
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
  mainView2: {
    backgroundColor: "#F9A85F",
    height: "35%",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
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
    // marginTop: 30,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  input1: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    height: 45,
    width: 250,
    // marginTop: 30,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  input2: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    height: 45,
    width: 250,
    // marginTop: 30,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  input3: {
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    height: 45,
    width: 250,
    // marginTop: 30,
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
