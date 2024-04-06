import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";
import { useState, useEffect } from "react";

export default function SubtractionPage({ navigation }) {
  const [child, setChild] = useState(null);

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    }

    async function childData() {
      console.log("inside");
      let a = await AsyncStorage.getItem("child");
      a = JSON.parse(a);

      console.log(a);
      setChild(a);
      // let b = JSON.parse(a);
    }
    changeScreenOrientation();
    childData();
  }, []);
  const handleBack = () => {
    navigation.navigate("Kinder");
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handleBack}>
        <Ionicons name="chevron-back" size={35} color="black" />
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={styles.opacitytext}>3-1=2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  opacity: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
  },
  opacitytext: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 5,
    color: "black",
  },
});
