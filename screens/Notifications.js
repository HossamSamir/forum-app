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

  constructor(props) {
    super(props);
    this.state = {
      NotsExists: false
    }
  }


    _handleShowNotifications = () => {
      Alert.alert('asf')
    }

    _NotificationsPlaceholder = () => {
      if (this.state.NotsExists == true) {
        return (
        console.log('true')
      )
      } else {
        return (
          <View style={styles.container}>
            <Image source={require('../assets/images/illustration.jpg')} style={{ width: 150, height: 150 }} />
            <Text style={{ color: '#9a9b9f', fontWeight: 'bold', fontSize: 23 }}>Nothing here!!!</Text>
            <Text style={{ textAlign: 'center', color: '#d1d1d1', fontSize: 16, marginTop: 15 }}>Tab the notifications button below to add a fake test notifications to check them</Text>
            <TouchableOpacity onPress={this._handleShowNotifications}>
              <Text style={{ color: 'white', backgroundColor: '#ff717f', marginTop: 20, borderRadius: 8, paddingHorizontal: 20, paddingVertical: 10 }}>Fake Notifications</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

    static navigationOptions = {
      header: null
    };

  render() {
    return (
      <View style={styles.container}>
        { this._NotificationsPlaceholder() }
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
    paddingHorizontal: 20/2
  }
});
