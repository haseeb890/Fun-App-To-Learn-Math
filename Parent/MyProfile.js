import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons, Feather } from "react-native-vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function MyProfile({ navigation }) {
  const [userData, setUserData] = useState({});

  const editTo = () => {
    navigation.navigate("EditProfile");
  };
  const getUserdata = async () => {
    const parent = await AsyncStorage.getItem("parent");
    setUserData(JSON.parse(parent));
  };

  useEffect(() => {
    getUserdata();
  });
  return (
    <View style={styles.mainView}>
      <View style={styles.view1}>
        <Text style={styles.txt}>Profile</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.view3}>Username : {userData.name}</Text>
        <Text style={styles.view3}>Email :{userData.email}</Text>
        <Text style={styles.view3}>Phone No : {userData.phone_no}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#E5F3FF",
  },
  txt: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
    marginTop: "35%",
  },
  view1: {
    alignItems: "center",
    backgroundColor: "#F9A85F",
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    height: "35%",
  },
  view2: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  view3: {
    marginTop: 30,
    width: "65%",
    fontSize: 20,
  },
});
