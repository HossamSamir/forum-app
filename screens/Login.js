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
  Alert,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid"
import { EvilIcons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';
import Post from '../screens/Post';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  _handleChangeEmail = (email) => {
    this.setState({ email })
  }

  _handleChangePassword = (password) => {
    this.setState({ password })
  }
  _handleLogin = () => {
    // this.props.navigation.navigate("Post")
  }


  render() {
    return (
        <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>

            <Image source={require('../assets/images/bg.png')}
            style={{
              flex: 1,
              position: 'absolute',
              bottom: 0,
              resizeMode: 'cover'
            }}/>

          <Grid>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 2,
                }}>
                <Image source={require('../assets/images/logo.png')}
                  style={{
                    flex: 1,
                    marginTop: 50,
                    resizeMode: 'contain',
                  }} />
              </View>

              <Row style={{flex: 2, flexDirection: 'column', }}>
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center',}}>
                  <EvilIcons name='user' size={38} color='crimson' style={{ backgroundColor: 'transparent' }} />
                  <TextInput onChangeText={ this._handleChangeEmail }  placeholderTextColor='white' placeholder="Email Address" style={{
                  width: '80%',
                  fontSize: 10,
                  opacity: .7,
                  fontSize: 18,
                  color: 'white',
                  borderBottomColor: 'crimson',
                  borderBottomWidth: 1
                }} />
                </View>

                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center',}}>
                  <EvilIcons name='lock' size={38} color='crimson' style={{ backgroundColor: 'transparent' }} />
                  <TextInput onChangeText={ this._handleChangePassword } placeholderTextColor='white' placeholder="Password" secureTextEntry={true} style={{
                  width: '80%',
                  fontSize: 10,
                  opacity: .7,
                  fontSize: 18,
                  color: 'white',
                  borderBottomColor: 'crimson',
                  borderBottomWidth: 1
                }} />
                </View>

                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                  <TouchableOpacity


                    onPress={this._handleLogin}
                     style={{ backgroundColor: 'crimson', paddingHorizontal: 50, paddingVertical: 8, borderRadius: 25 }}>
                    <EvilIcons name='arrow-right' size={25} color='white' />
                  </TouchableOpacity>
                </View>


              </Row>

              <Row style={{flex: .4, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity style={{ }}>
                  <Text>Dont have an account? Sign up</Text>
                </TouchableOpacity>
              </Row>
          </Grid>
        </KeyboardAvoidingView>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
