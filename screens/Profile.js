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
import Login from './Login'

export default class Profile extends React.Component {

  _hasLoggedIn = () => {
    return this.state.loggedIn ? <Profile /> : <Login />
  }

  constructor(props){
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  static navigationOptions = {
    header: null
  }


  render() {
    return (
      <View style={styles.container}>
        { this._hasLoggedIn() }
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
