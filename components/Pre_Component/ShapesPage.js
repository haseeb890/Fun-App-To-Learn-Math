import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




 

export default function ShapesPage({navigation}) {
  return (
    <View style={{flex:1}}>
        <View style={styles.center}>
            <Text style={styles.opacitytext}>Shapes</Text>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
  center:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  opacity:{
    backgroundColor:"red",
    borderRadius:10,
    padding:10,
    
    
  },
  opacitytext:{
    fontSize:20,
    fontWeight:'bold',
    fontStyle:'italic',
    padding:5,
    color:'black'
   
  }
})


