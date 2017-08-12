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
      <View style={styles.container}>
        <Image source={require('../assets/images/illustration.jpg')} style={{ width: 150, height: 150 }} />
        <Text style={{ color: '#9a9b9f', fontWeight: 'bold', fontSize: 23 }}>Nothing here!!!</Text>
        <Text style={{ color: '#d1d1d1', fontSize: 13 }}>Tab the notifications button below to add a fake test notifications to check them</Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
