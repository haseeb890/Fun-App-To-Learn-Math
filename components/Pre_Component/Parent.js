import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Pre_K from './Pre_Component/Pre_K';
import Kinder from './Pre_Component/Kinder';
import ClassOne from './Pre_Component/ClassOne';
import ClassTwo from './Pre_Component/ClassTwo';
import LottieView from 'lottie-react-native';
import { ImageBackground } from 'react-native';
import react, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

// import tiger from '../assets/tiger.json'

async function changeScreenOrientation() {
  
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
}



  export default function Screenone() {
    useEffect(() => {
      changeScreenOrientation()
    }, []);
    return (
      <View style={styles.main}>
        <View style={styles.center}>
          
            <TouchableOpacity style={styles.opacity}>
              <Text>Pre_K</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Kindergarten</Text>
            </TouchableOpacity>
          
          
          
              
            
        </View>
        

        

      </View>
    )
  }


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'pink'
  },
  center: {
    flex: 1,
    marginRight:350,
    marginTop:50 
  },
  opacity:{
    backgroundColor:'White'
  }
})






