import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Notifications extends React.Component {

  static navigationOptions = {
      header: null
    };


  render() {
    return (
      <View>
        <Text>The code is yours ✌🏻</Text>
        <Text>The code is yours ✌🏻</Text>
        <Text>The code is yours ✌🏻</Text>
        <Text>The code is yours ✌🏻</Text>
        <Text>The code is yours ✌🏻</Text>
        <Text>The code is yours ✌🏻</Text>
        <Text>The code is yours ✌🏻</Text>
        <Text>The code is yours ✌🏻</Text>
        <Text>The code is yours ✌🏻</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({

});
