import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import child from "../assets/child.png";
import { TextInput } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  Entypo,
  EvilIcons,
  Octicons,
  Ionicons,
} from "react-native-vector-icons";
import * as Progress from "react-native-progress";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChildDetail({ navigation, route }) {
  const [Quizes, setQuizes] = useState(null);
  const [check, setCheck] = useState(false);
  const array = ["pre_k", "kindergarden", "one", "two"];
  const { childData } = route.params;
  // console.log(childData.quiz_data);
  const handleBack = () => {
    navigation.navigate("TabNavigator");
  };
  const editTo = () => {
    navigation.navigate("ChildEdit", { childData: childData });
  };

  useEffect(() => {
    let a = route.params;
    console.log(a);
    setQuizes(a.childData.quiz_data);
    if (route.params.childData.quiz_data.pre_k.length !== 0) {
      setCheck(true);
    }
    // console.log(route.params.childData.quiz_data.pre_k.length);
    if (route.params.childData.quiz_data.kindergarden.length !== 0) {
      setCheck(true);
    }
    // console.log(route.params.childData.quiz_data.kindergarden.length);
    if (route.params.childData.quiz_data.one.length !== 0) {
      setCheck(true);
    }
    // console.log(route.params.childData.quiz_data.one.length);
    if (route.params.childData.quiz_data.two.length !== 0) {
      setCheck(true);
    }
    // console.log(route.params.childData.quiz_data.two.length);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(route.params.childData.quiz_data);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&");
    // console.log(a.childData.quiz_data);
    console.log(childData);
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar />
      <View style={styles.main2}>
        <View style={styles.iconView}>
          <View>
            <TouchableOpacity onPress={handleBack}>
              <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: "78%" }}>
            <TouchableOpacity onPress={editTo}>
              <Feather name="edit" size={25} color="white" />
              <Text style={{ alignSelf: "center", color: "white" }}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", height: "70%" }}>
          <View style={{ width: "32%", height: "85%" }}>
            <View style={styles.imageView}>
              <Image source={child} style={styles.img1} />
            </View>
          </View>
          <View
            style={{
              height: "85%",
              width: "60%",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <View style={{ width: "50%", height: "100%", alignSelf: "center" }}>
              <Text style={styles.view3}>Name : </Text>
              <Text style={styles.view3}>Username : </Text>
              <Text style={styles.view3}>Class : </Text>
              <Text style={styles.view3}>Score : </Text>
              <Text style={styles.view3}>Password : </Text>
            </View>
            <View
              style={{ width: "100%", height: "100%", alignSelf: "center" }}
            >
              <Text style={styles.view3}>{childData.child_data.name}</Text>
              <Text style={styles.view3}>{childData.child_data.username}</Text>
              {childData.child_data.class == 1 ? (
                <Text style={styles.view3}>Pre K</Text>
              ) : childData.child_data.class == 2 ? (
                <Text style={styles.view3}>Kindergarden</Text>
              ) : childData.child_data.class == 3 ? (
                <Text style={styles.view3}>One</Text>
              ) : childData.child_data.class == 4 ? (
                <Text style={styles.view3}>Two</Text>
              ) : null}

              <Text style={styles.view3}>
                {" "}
                {childData.progress_data != null
                  ? childData.progress_data.score
                  : ""}
                %
              </Text>

              <Text style={styles.view3}>{childData.child_data.password}</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          width: "95%",
          height: "50%",
          alignSelf: "center",
          // marginRight: "8%",
          // marginBottom: "10%",
          marginTop: "5%",
          borderBottomLeftRadius: 20,
          borderBottomEndRadius: 20,
          borderTopRightRadius: 20,
          // backgroundColor: "#F9A85F",
        }}
      >
        {/* <View
          style={{
            width: "100%",
            height: 50,
            padding: 5,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontWeight: "600" }}>
              Level: {childData.progress_data.level}
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="progress-star"
                size={20}
                color={"black"}
              />

              <View style={{ padding: 8 }}>
                <Progress.Bar
                  // progress={0.5}
                  // progress={childData.child_data.coin / 100}
                  progress={childData.progress_data.score / 100}
                  width={150}
                />
              </View>
            </View>
          </View>
          {/* <TouchableOpacity
            // onPress={toggleQuizOverlay}
            style={{
              width: 22,
              height: 22,
              borderRadius: 20,
              borderWidth: 0.1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Entypo name="cross" size={20} color="#F9A85F" />
          </TouchableOpacity> */}
        {/* </View> */}
        <ScrollView>
          {check == true ? (
            <View>
              <View>
                {Quizes.pre_k.length != 0 ? (
                  <View style={{ marginTop: 10 }}>
                    <Text>Class: Pre-K</Text>
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                        <Text style={styles.tableHeaderCell}>Quiz No:</Text>
                        <Text style={styles.tableHeaderCell}>Total Marks</Text>
                        <Text style={styles.tableHeaderCell}>Obtain Marks</Text>
                      </View>
                      {Quizes.pre_k.map((row, index) => (
                        <View style={styles.tableRow} key={index}>
                          <Text style={styles.tableCell}>{row.quiz_no}</Text>
                          <Text style={styles.tableCell}>
                            {row.total_marks}
                          </Text>
                          <Text style={styles.tableCell}>
                            {row.obtain_marks}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
              </View>

              <View>
                {Quizes.kindergarden.length != 0 ? (
                  <View style={{ marginTop: 10 }}>
                    <Text>Class: Kinder-Garten</Text>
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                        <Text style={styles.tableHeaderCell}>Quiz No:</Text>
                        <Text style={styles.tableHeaderCell}>Total Marks</Text>
                        <Text style={styles.tableHeaderCell}>Obtain Marks</Text>
                      </View>
                      {Quizes.kindergarden.map((row, index) => (
                        <View style={styles.tableRow} key={index}>
                          <Text style={styles.tableCell}>{row.quiz_no}</Text>
                          <Text style={styles.tableCell}>
                            {row.total_marks}
                          </Text>
                          <Text style={styles.tableCell}>
                            {row.obtain_marks}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
              </View>

              <View>
                {Quizes.one.length != 0 ? (
                  <View style={{ marginTop: 10 }}>
                    <Text>Class: One</Text>
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                        <Text style={styles.tableHeaderCell}>Quiz No:</Text>
                        <Text style={styles.tableHeaderCell}>Total Marks</Text>
                        <Text style={styles.tableHeaderCell}>Obtain Marks</Text>
                      </View>
                      {Quizes.one.map((row, index) => (
                        <View style={styles.tableRow} key={index}>
                          <Text style={styles.tableCell}>{row.quiz_no}</Text>
                          <Text style={styles.tableCell}>
                            {row.total_marks}
                          </Text>
                          <Text style={styles.tableCell}>
                            {row.obtain_marks}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
              </View>

              <View>
                {Quizes.two.length != 0 ? (
                  <View style={{ marginTop: 10 }}>
                    <Text>Class: Two</Text>
                    <View style={styles.table}>
                      <View style={styles.tableRow}>
                        <Text style={styles.tableHeaderCell}>Quiz No:</Text>
                        <Text style={styles.tableHeaderCell}>Total Marks</Text>
                        <Text style={styles.tableHeaderCell}>Obtain Marks</Text>
                      </View>
                      {Quizes.two.map((row, index) => (
                        <View style={styles.tableRow} key={index}>
                          <Text style={styles.tableCell}>{row.quiz_no}</Text>
                          <Text style={styles.tableCell}>
                            {row.total_marks}
                          </Text>
                          <Text style={styles.tableCell}>
                            {row.obtain_marks}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
          ) : (
            <Image
              source={require("../assets/noData.gif")}
              style={{
                width: 120,
                height: 120,
                alignSelf: "center",
                marginTop: "10%",
              }}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#E5F3FF",
  },
  main2: {
    backgroundColor: "#F9A85F",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    height: "45%",
  },
  iconView: {
    flexDirection: "row",
    marginTop: 20,
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  img1: {
    height: 100,
    width: 100,
  },
  view2: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  view3: {
    // marginTop: 30,
    // width: "65%",
    marginTop: 5,
    fontSize: 20,
  },
  table: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: "#333",
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
  },
  tableCell: {
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    color: "#666",
    borderRightWidth: 1,
    borderColor: "#e0e0e0",
  },
});
