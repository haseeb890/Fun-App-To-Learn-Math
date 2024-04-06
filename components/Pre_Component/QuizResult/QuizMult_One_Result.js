import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

export default function QuizMult_One_Result({ navigation, route }) {
  const { childresult } = route.params;
  console.log(childresult);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/QuizResult.gif")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 50, fontWeight: "600" }}>Result</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600", marginTop: "10%" }}>
            Correct Answers : {childresult.obtainMarks}
          </Text>

          <Text style={{ fontSize: 20, fontWeight: "600", marginTop: "5%" }}>
            Wrong Answers : {childresult.totalMarks - childresult.obtainMarks}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            width: "28%",
            justifyContent: "space-between",
            marginTop: "8%",
          }}
        >
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              padding: 10,
              opacity: 1,
              backgroundColor: "#ff6347",
            }}
            onPress={() =>
              navigation.navigate("QuizMult_One", { childresult: childresult })
            }
          >
            <Text style={{ fontSize: 15, color: "#ffffff", fontWeight: "500" }}>
              Re-Quiz
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              padding: 10,
              opacity: 1,
              backgroundColor: "#32cd32",
            }}
            onPress={() => navigation.navigate("ClassOne")}
          >
            <Text style={{ fontSize: 15, color: "#ffffff", fontWeight: "500" }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
