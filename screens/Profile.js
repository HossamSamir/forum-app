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
import { ImagePicker, Constants, LinearGradient, BlurView } from 'expo';

export default class Profile extends React.Component {

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
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
            <View style={{ flex: 1 }}>
              <Image
                source={require('../assets/images/profile-bg.jpg')}
                style={{ width: '100%', height: '100%', position: 'absolute' }}
              />
            <ScrollView>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={{ uri: 'file:///var/mobile/Containers/Data/Application/E11FACB1-7798-4865-9856-FF4F3B6822CC/Library/Caches/ExponentExperienceData/%2540hossamsamir%252Fforumapp/ImagePicker/B773739A-BE05-4CDC-80B3-A9690B39DE4F.jpg' }}
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: 65,
                    borderWidth: 2,
                    padding: 30,
                    borderColor: 'white',
                    marginTop: 50,
                   }}
                />
              <Text style={{ marginTop: 20, backgroundColor: 'transparent', color: 'white', fontSize: 25, fontWeight: 'bold' }}>Hossam Samir</Text>
              <Text style={{ marginVertical: 4, backgroundColor: 'transparent', color: 'white', opacity: .8, fontSize: 13 }}>Alexandria, Egypt</Text>
            </View>
            </ScrollView>
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
                          width: 130,
                          height: 130,
                          borderRadius: 65,
                          borderWidth: 2,
                          padding: 30,
                          borderColor: 'crimson',
                          marginTop: 50,
                      }} />}
                </TouchableOpacity>
              </View>

              <Row style={{flex: 2, flexDirection: 'column', }}>
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center',}}>
                  <EvilIcons name='user' size={38} color='crimson' style={{ backgroundColor: 'transparent' }} />
                  <TextInput onChangeText={ this._handleChangeEmail } returnKeyType='done' placeholderTextColor='white' placeholder="Email Address" style={{
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

                    onPress={this._handleSignup}


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
      loggedIn: true,
      email: '',
      password: '',
      image: 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/20793139_1938896546398834_1430976735_n.jpg?oh=65a96416ec5bf1ec995b2e7c4c507363&oe=598E9025',
    }
  }

  _handleChangeEmail = (email) => {
    this.setState({ email })
  }

  _handleChangePassword = (password) => {
    this.setState({ password })
  }

  _handleLogin = () => {
    if (this.state.email == '') {
      this.setState({
        loggedIn: true
      })
    } else {
      Alert.alert('Wrong Email')
    }
  }


  _handleSignup = () => {
    if (this.state.email == '') {
      this.setState({
        loggedIn: true,
        showsignup: false
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
  }
})
