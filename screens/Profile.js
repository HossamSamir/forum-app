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
import Post from './Post'
import { StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid"
import { EvilIcons } from '@expo/vector-icons';
import { ImagePicker } from 'expo';

export default class Profile extends React.Component {

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _showSignup = () => {
    this.setState({
      showsignup: true
    })
  }

  _showLogin = () => {
    this.setState({
      showsignup: false
    })
  }

  _hasLoggedIn = () => {
    if (this.state.showsignup == false) {
      if (this.state.loggedIn == false) {
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
                  <TouchableOpacity onPress={ this._showSignup }>
                    <Text>Dont have an account? Sign up</Text>
                  </TouchableOpacity>
                </Row>
            </Grid>
          </KeyboardAvoidingView>

        ) // end of the return login
      } else { // show profile
        return (
          <View>
            <Text> Your profile </Text>
            <Text> Your profile </Text>
            <Text> Your profile </Text>
            <Text> Your profile </Text>
            <Text> Your profile </Text>
          </View>
        ) // end of the return
      }
    } else {
      // show signup
      let { image } = this.state;
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
                <TouchableOpacity onPress={this._pickImage}>

                  {image &&
                      <Image source={{ uri: this.state.image }} style={{
                          width: 200,
                          height: 200,
                          borderRadius: 100,
                          marginTop: 50,
                      }} />}
                </TouchableOpacity>
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
                  <TextInput onChangeText={ this._handleChangePassword } placeholderTextColor='white' placeholder="Full Name" secureTextEntry={true} style={{
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
                <TouchableOpacity onPress={ this._showLogin }>
                  <Text>Already have an account? Login</Text>
                </TouchableOpacity>
              </Row>
          </Grid>
        </KeyboardAvoidingView>
      ) // end of signup
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      showsignup: false,
      loggedIn: false,
      email: '',
      password: '',
      image: 'http://sksdb.kocaeli.edu.tr/SKSDB/upload/personelResim/profil_erkek.png',
    }
  }

  _handleChangeEmail = (email) => {
    this.setState({ email })
  }

  _handleChangePassword = (password) => {
    this.setState({ password })
  }

  _handleLogin = () => {
    if (this.state.email == 'Hossam@Hossam.com') {
      this.setState({
        loggedIn: true
      })
    } else {
      Alert.alert('Wrong Email')
    }
  }


  static navigationOptions = {
    header: null
  }


  render() {
    const { navigate } = this.props.navigation;
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
