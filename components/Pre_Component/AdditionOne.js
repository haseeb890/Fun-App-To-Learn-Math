import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Ionicons} from 'react-native-vector-icons'






export default function AdditionOne({ navigation,route }) {
  const {child} = route.params
  const handleBack = () => {

    navigation.navigate('ClassOne',{ child: child })
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handleBack}>
        <Ionicons name='chevron-back' size={35} color='black' />
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={styles.opacitytext}>2 + 1 = 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  opacity: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,


  },
  opacitytext: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 5,
    color: 'black'

  }
})


