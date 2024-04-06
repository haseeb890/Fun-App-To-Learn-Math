import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Pre_K from "../components/Pre_Component/Pre_K";
import Kinder from "../components/Pre_Component/Kinder";
import ClassOne from "../components/Pre_Component/ClassOne";
import ClassTwo from "../components/Pre_Component/ClassTwo";
import WholeNumbers from "../components/Pre_Component/WholeNumbers";
import AdditionPage from "../components/Pre_Component/AdditionPage";
import SubtractionPage from "../components/Pre_Component/SubtractionPage";
import ShapesPage from "../components/Pre_Component/ShapesPage";
import AdditionOne from "../components/Pre_Component/AdditionOne";
import SubtractionOne from "../components/Pre_Component/SubtractionOne";
import MultiplicationOne from "../components/Pre_Component/MultiplicationOne";
import ChildAccount from "../Parent/ChildAccount";
import TabNavigator from "../Parent/TabNavigator";
import HomePage from "../Parent/HomePage";
import ChildDetail from "../Parent/ChildDetail";
import ChildEdit from "../Parent/ChildEdit";
import EditProfile from "../Parent/EditProfile";
import ChangePassword from "../Parent/ChangePassword";
import Screenone from "../components/Screenone";
import ForgotPassword from "../Parent/ForgotPassword";
import Counting from "../components/Pre_Component/Counting";
import Counted from "../components/Pre_Component/Counted";
import Counted_T from "../components/Pre_Component/Counted_T";
import Shapes from "../components/Pre_Component/Shapes";
import Shaped from "../components/Pre_Component/Shaped";
import QuizCount from "../components/Pre_Component/QuizCount";
import QuizAdd from "../components/Pre_Component/QuizAdd";
import QuizSubt from "../components/Pre_Component/QuizSubt";
import QuizGrand from "../components/Pre_Component/QuizGrand";
import QuizGrand_A from "../components/Pre_Component/QuizGrand_A";
import QuizGrand_S from "../components/Pre_Component/QuizGrand_S";
import QuizCount_K from "../components/Pre_Component/QuizCount_K";
import QuizGrand_C from "../components/Pre_Component/QuizGrand_C";
import QuizAdd_One from "../components/Pre_Component/ClassOneQuiz/QuizAdd_One";
import QuizSubt_One from "../components/Pre_Component/ClassOneQuiz/QuizSubt_One";
import QuizMult_One from "../components/Pre_Component/ClassOneQuiz/QuizMult_One";
import QuizDivi_One from "../components/Pre_Component/ClassOneQuiz/QuizDivi_One";
import QuizTable_One from "../components/Pre_Component/ClassOneQuiz/QuizTable_One";
import QuizGrand_One from "../components/Pre_Component/ClassOneQuizGrand/QuizGrand_One";
import QG_One_A from "../components/Pre_Component/ClassOneQuizGrand/QG_One_A";
import QG_One_S from "../components/Pre_Component/ClassOneQuizGrand/QG_One_S";
import QG_One_M from "../components/Pre_Component/ClassOneQuizGrand/QG_One_M";
import SplashScreen from "../components/SplashScreens/SplashScreen";
import ClassOneTable from "../components/Pre_Component/ClassOneTables/ClassOneTable";
import Table_One from "../components/Pre_Component/ClassOneTables/Table_One";
import QuizCount_Result from "../components/Pre_Component/QuizResult/QuizCount_Result";
import QuizCount_K_Result from "../components/Pre_Component/QuizResult/QuizCount_K_Result";
import QuizAdd_K_Result from "../components/Pre_Component/QuizResult/QuizAdd_K_Result";
import QuizSubt_K_Result from "../components/Pre_Component/QuizResult/QuizSubt_K_Result";
import QuizGrand_K_Result from "../components/Pre_Component/QuizResult/QuizGrand_K_Result";
import VideoScreen from "../components/Pre_Component/VideoScreen/VideoScreen";
import QuizAdd_One_Result from "../components/Pre_Component/QuizResult/QuizAdd_One_Result";
import QuizSubt_One_Result from "../components/Pre_Component/QuizResult/QuizSubt_One_Result";
import QuizTable_One_Result from "../components/Pre_Component/QuizResult/QuizTable_One_Result";
import QuizMult_One_Result from "../components/Pre_Component/QuizResult/QuizMult_One_Result";
import QuizDivi_One_Result from "../components/Pre_Component/QuizResult/QuizDivi_One_Result";
import QG_One_D from "../components/Pre_Component/ClassOneQuizGrand/QG_One_D";
import QuizGrand_One_Result from "../components/Pre_Component/QuizResult/QuizGrand_One_Result";
import ClassTwoTable from "../components/Pre_Component/ClassOneTables/ClassTwoTable";
import QuizTable_Two from "../components/Pre_Component/ClassTwoQuiz/QuizTable_Two";
import QuizTable_Two_Result from "../components/Pre_Component/QuizResult/QuizTable_Two_Result";
import OperatorsQuiz from "../components/Pre_Component/ClassTwoQuiz/OperatorsQuiz";
import QuizOperators_Result from "../components/Pre_Component/QuizResult/QuizOperators_Result";
import DivisionOne from "../components/Pre_Component/ClassOneDivision/DivisionOne";
import DivisionTwo from "../components/Pre_Component/ClassOneDivision/DivisionTwo";
import QuizDivisionTwo from "../components/Pre_Component/ClassTwoQuiz/QuizDivisionTwo";
import QuizDivi_Two_Result from "../components/Pre_Component/QuizResult/QuizDivi_Two_Result";
// import Shaped_A from "../components/Pre_Component/Shaped_A";
// import Feedback from "../Parent/Feedback";

export default function StackNavigate() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChildDetail"
        component={ChildDetail}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChildEdit"
        component={ChildEdit}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Feedback"
        component={Feedback}
        options={{ headerShown: false }}
      /> */}

      {/* Child Screens */}

      <Stack.Screen
        name="Screenone"
        component={Screenone}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Pre_K"
        component={Pre_K}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Kinder"
        component={Kinder}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ClassOne"
        component={ClassOne}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ClassTwo"
        component={ClassTwo}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Counting"
        component={Counting}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Counted"
        component={Counted}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Counted_T"
        component={Counted_T}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShapesPage"
        component={ShapesPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Shapes"
        component={Shapes}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Shaped"
        component={Shaped}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name="QuizCount"
        component={QuizCount}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizCount_Result"
        component={QuizCount_Result}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="Shaped_A"
        component={Shaped_A}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="WholeNumbers"
        component={WholeNumbers}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizCount_K"
        component={QuizCount_K}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizCount_K_Result"
        component={QuizCount_K_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AdditionPage"
        component={AdditionPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizAdd"
        component={QuizAdd}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizAdd_K_Result"
        component={QuizAdd_K_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SubtractionPage"
        component={SubtractionPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizSubt"
        component={QuizSubt}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizSubt_K_Result"
        component={QuizSubt_K_Result}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="QuizGrand"
        component={QuizGrand}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name="QuizGrand_C"
        component={QuizGrand_C}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizGrand_A"
        component={QuizGrand_A}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizGrand_S"
        component={QuizGrand_S}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizGrand_K_Result"
        component={QuizGrand_K_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AdditionOne"
        component={AdditionOne}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizAdd_One"
        component={QuizAdd_One}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizAdd_One_Result"
        component={QuizAdd_One_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SubtractionOne"
        component={SubtractionOne}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizSubt_One"
        component={QuizSubt_One}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizSubt_One_Result"
        component={QuizSubt_One_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ClassOneTable"
        component={ClassOneTable}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Table_One"
        component={Table_One}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizTable_One"
        component={QuizTable_One}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizTable_One_Result"
        component={QuizTable_One_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MultiplicationOne"
        component={MultiplicationOne}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizMult_One"
        component={QuizMult_One}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizMult_One_Result"
        component={QuizMult_One_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DivisionOne"
        component={DivisionOne}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizDivi_One"
        component={QuizDivi_One}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizDivi_One_Result"
        component={QuizDivi_One_Result}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen
        name="QuizGrand_One"
        component={QuizGrand_One}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name="QG_One_A"
        component={QG_One_A}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QG_One_S"
        component={QG_One_S}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QG_One_M"
        component={QG_One_M}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QG_One_D"
        component={QG_One_D}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizGrand_One_Result"
        component={QuizGrand_One_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ClassTwoTable"
        component={ClassTwoTable}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizTable_Two"
        component={QuizTable_Two}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizTable_Two_Result"
        component={QuizTable_Two_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DivisionTwo"
        component={DivisionTwo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizDivisionTwo"
        component={QuizDivisionTwo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizDivi_Two_Result"
        component={QuizDivi_Two_Result}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="OperatorsQuiz"
        component={OperatorsQuiz}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="QuizOperators_Result"
        component={QuizOperators_Result}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    /* <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChildDetail"
        component={ChildDetail}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChildEdit"
        component={ChildEdit}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator> */

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="HomePage"
    //       component={HomePage}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="Pre_K"
    //       component={Pre_K}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="Kinder"
    //       component={Kinder}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="ClassOne"
    //       component={ClassOne}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="ClassTwo"
    //       component={ClassTwo}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="Counting"
    //       component={Counting}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="WholeNumbers"
    //       component={WholeNumbers}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="AdditionPage"
    //       component={AdditionPage}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="SubtractionPage"
    //       component={SubtractionPage}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="ShapesPage"
    //       component={ShapesPage}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="AdditionOne"
    //       component={AdditionOne}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="SubtractionOne"
    //       component={SubtractionOne}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="MultiplicationOne"
    //       component={MultiplicationOne}
    //       options={{ headerShown: false }}
    //     />

    //     <Stack.Screen
    //       name="DivisionOne"
    //       component={DivisionOne}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
