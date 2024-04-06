import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigate from "./StackNavigation/StackNavigate";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ChildAccount from "./Parent/ChildAccount";
import ChildDetail from "./Parent/ChildDetail";
import MyProfile from "./Parent/MyProfile";
import ChildEdit from "./Parent/ChildEdit";
import Pre_K from "./components/Pre_Component/Pre_K";
import ForgotPassword from "./Parent/ForgotPassword";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import QuizCount_Result from "./components/Pre_Component/QuizResult/QuizCount_Result";
// import SplashScreen from "./components/SplashScreens/SplashScreen";
// import MyUnity from "./components/MyUnity";
// import React from "react";
// import { View } from "react-native-animatable";
// import UnityView from "react-native-unity-view";

// import Feedback from "./Parent/Feedback";

export default function App() {
  return (
    // <ForgotPassword />
    // <ChildAccount />
    // <SignUp />
    // <Login />
    // <Feedback />
    <NavigationContainer>
      <StackNavigate />
    </NavigationContainer>
    // <QuizCount_Result />
    // <Test />
    // <Test2 />
    // <Test3 />
    // <Pre_K />
    // <MyUnity />
    // <SplashScreen />
    // return (
    //   <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
    // );
  );
}
