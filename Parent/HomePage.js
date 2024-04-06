import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
import { Ionicons } from "react-native-vector-icons";
import child from "../assets/child.png";
import { TouchableOpacity } from "react-native";
import ChildDetail from "./ChildDetail";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import { Entypo } from "react-native-vector-icons";

// const DATA = [
//   {
//     id: "1",
//     name: "Hamza",
//     score: "13",
//     level: "13",
//   },
//   {
//     id: "2",
//     name: "Usman",
//     score: "13",
//     level: "13",
//   },
//   {
//     id: "3",
//     name: "Ali",
//     score: "13",
//     level: "13",
//   },
//   {
//     id: "4",
//     name: "Sajjad",
//     score: "13",
//     level: "13",
//   },
// ];

export default function HomePage({ navigation }) {
  const [userData, setUserData] = useState({});
  const [child_data, setChild_Data] = useState([]);
  const [isUserDataLoaded, setIsUserDataLoaded] = useState(false);
  const [DATA, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const isFocused = useIsFocused();
  const [deleteChild, setDeleteChild] = useState(0);

  const getChild = () => {
    axios
      .get("http://funapp.ahmedhousedeal.com/api/homepage/" + userData.id)
      .then((result) => {
        console.log(result.data);
        setData(result.data.child_data);
      });
  };
  const getUserdata = async () => {
    const parent = await AsyncStorage.getItem("parent");
    setUserData(JSON.parse(parent));
    setIsUserDataLoaded(true);
  };

  const delChildData = (id) => {
    const formData = new FormData();
    formData.append("id", id);

    axios
      .post(
        "http://funapp.ahmedhousedeal.com/api/delete_child",

        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((result) => {
        setDeleteChild(deleteChild + 1);
        console.log(deleteChild);
        console.log(result.data);
        alert("Succcessfully Deleted");
      })
      .catch((err) => {
        console.log("aaaaaaa");
        console.log(err);
      });
  };

  useEffect(() => {
    getUserdata();
  }, []);

  // useEffect(() => {
  //   if (isUserDataLoaded) {
  //     getChild();
  //   }
  // }, [isUserDataLoaded]);
  useEffect(() => {
    console.log(deleteChild);
    if (isFocused) {
      if (isUserDataLoaded) {
        getChild();
      }
    }
  }, [isFocused, isUserDataLoaded, deleteChild]);
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
    changeScreenOrientation();
  }, []);

  const Item = ({ e }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChildDetail", { childData: e })}
      // onPress={() => console.log("ChildDetail", { childData: e })}
    >
      <View style={styles.item}>
        <View style={styles.direction1}>
          <View style={styles.direction}>
            <Image
              style={{ height: 60, width: 60, alignSelf: "center" }}
              source={child}
            ></Image>

            <View style={styles.center}>
              <Text style={styles.title}>{e.child_data.name}</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                width: 100,
                height: "70%",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <View style={{ height: 30, width: 30 }}>
                  <TouchableOpacity
                    onPress={() => delChildData(e.child_data.id)}
                  >
                    <Entypo name="cross" size={25} color="red" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.direction}>
                <Text style={styles.title1}>
                  Score: {e.progress_data != null ? e.progress_data.score : ""}%
                </Text>
              </View>
              {/* <View style={styles.direction}>
                <Text style={styles.title1}>
                  Level: {e.progress_data != null ? e.progress_data.level : ""}
                </Text>
              </View> */}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item e={item} />}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#F9A85F",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    height: 150,
    borderRadius: 20,
    borderColor: "#E0E2E3",
    borderLeftWidth: 7,
    borderBottomWidth: 5,
  },
  title: {
    fontSize: 26,
    color: "white",
  },
  title1: {
    fontSize: 21,
    color: "white",
  },

  direction: {
    flexDirection: "row",
    // backgroundColor: "red",
  },

  direction1: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
  },
});
