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
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import Post from './Post'
import { StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid"
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { ImagePicker, LinearGradient, BlurView } from 'expo';
import PostCard from '../components/PostCard';

export default class Profile extends React.Component {

  componentDidMount() {
    // AsyncStorage.setItem("mykey", '1234')
    // AsyncStorage.getItem("mykey").then((value) => {
    //   this.setState({ userSession: value })
    // });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri, imageBase64: result.base64, });
    }
  };

  _showSignup = () => {
    this.setState({
      showsignup: true,
      loggedIn: false
    })
  }

  _showLogin = () => {
    this.setState({
      showsignup: false
    })
  }

  _hasLoggedIn = () => {
    AsyncStorage.getItem("session").then((value) => {
      if (value == 'true') {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });

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
                    <TextInput onChangeText={ this._handleChangeEmail }  placeholderTextColor='white' placeholder={this.state.userSession} style={{
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
            <ScrollView style={{ paddingLeft: 20 }}>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={{ uri: this.state.image }}
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
              <Text style={{ marginTop: 20, backgroundColor: 'transparent', color: 'white', fontSize: 25, fontWeight: 'bold' }}>{ this.state.FullName }</Text>
              <Text style={{ marginVertical: 4, backgroundColor: 'transparent', color: 'white', opacity: .8, fontSize: 13 }}>Alexandria, Egypt</Text>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>

                {/* Badge */}
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons style={{ backgroundColor: 'white', padding: 10, borderRadius: 32, }} name='trophy' size={50} color='crimson' />
                    <Text style={{ backgroundColor: 'white', padding: 5, borderRadius: 10 }}>Admin Badge</Text>
                  </View>


                {/* Badge */}
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons style={{ backgroundColor: 'white', padding: 10, borderRadius: 32, }} name='trophy' size={50} color='crimson' />
                    <Text style={{ backgroundColor: 'white', padding: 5, borderRadius: 10 }}>Test Badge</Text>
                  </View>


                {/* Badge */}
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <EvilIcons style={{ backgroundColor: 'white', padding: 10, borderRadius: 32, }} name='trophy' size={50} color='crimson' />
                    <Text style={{ backgroundColor: 'white', padding: 5, borderRadius: 10 }}>Test Badge</Text>
                  </View>


              </View>
            </View>

            <Text style={{ backgroundColor: '#1F2D38', color: 'rgba(255, 255, 255, 0.8)', fontSize: 18, padding: 5, marginTop: 20, borderRadius: 10, width: 60, }}>Posts</Text>

            <ScrollView horizontal={true}>

              {/* Card Start */}
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(
                    'Post',
                    {
                      title: 'asfasg',
                      imgsource: {uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg'},
                      date: 'july 28, 2017',
                    })}
                >
                  <PostCard
                     title = 'liked post'
                     source = {{ uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg' }}
                     date = 'july 28, 2017' />
                </TouchableOpacity>
              {/* Card End */}

              {/* Card Start */}
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(
                    'Post',
                    {
                      title: 'asfasg',
                      imgsource: {uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg'},
                      date: 'july 28, 2017',
                    })}
                >
                  <PostCard
                     title = 'liked post'
                     source = {{ uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg' }}
                     date = 'july 28, 2017' />
                </TouchableOpacity>
              {/* Card End */}

              {/* Card Start */}
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate(
                    'Post',
                    {
                      title: 'asfasg',
                      imgsource: {uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg'},
                      date: 'july 28, 2017',
                    })}
                >
                  <PostCard
                     title = 'liked post'
                     source = {{ uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg' }}
                     date = 'july 28, 2017' />
                </TouchableOpacity>
              {/* Card End */}

            </ScrollView>

            <TouchableOpacity onPress={() => {
                this.setState({ email: '', password: '' });
              AsyncStorage.setItem("session", 'false');
            }}>
              <Text style={{ backgroundColor: '#1F2D38', color: 'rgba(255, 255, 255, 0.8)', fontSize: 25, padding: 5, marginVertical: 20, borderRadius: 10, textAlign: 'center' }}>Logout</Text>
            </TouchableOpacity>
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
                  <TextInput onChangeText={ this._handleNewEmail } returnKeyType='done' placeholderTextColor='white' placeholder="Email Address" style={{
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
                  <TextInput onChangeText={ this._handleNewFullName } placeholderTextColor='white' placeholder="Full Name" style={{
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
                  <TextInput onChangeText={ this._handleNewPassword } placeholderTextColor='white' placeholder="Password" secureTextEntry={true} style={{
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
                  <TextInput onChangeText={ this._handleRepeatPassword } placeholderTextColor='white' placeholder="Password" secureTextEntry={true} style={{
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
      loggedIn: false,
      email: '',
      password: '',
      FullName: '',
      newEmail: '',
      newFullName: '',
      newPassword: '',
      repeatPassword: '',
      image: 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/20793139_1938896546398834_1430976735_n.jpg?oh=65a96416ec5bf1ec995b2e7c4c507363&oe=598E9025',
      imageBase64: '',
      userSession: '',
      userData: {}
    }
  }

  _handleNewEmail = (newEmail) => {
    this.setState({ newEmail })
  }
  _handleNewFullName = (newFullName) => {
    this.setState({ newFullName: newFullName, FullName: newFullName })
  }
  _handleNewPassword = (newPassword) => {
    this.setState({ newPassword })
  }
  _handleRepeatPassword = (repeatPassword) => {
    this.setState({ repeatPassword })
  }
  _handleChangeEmail = (email) => {
    this.setState({ email })
  }

  _handleChangeFullName = (FullName) => {
    this.setState({ FullName })
  }

  _handleChangePassword = (password) => {
    this.setState({ password })
  }

  _handleLogin = () => {
    fetch(`https://forum-app-api.herokuapp.com/api/user?email=${this.state.email}&password=${this.state.password}`)
    .then((res) => res.json())
    .then((resJson) => {

      if(resJson.status == false)
        Alert.alert('worng pw')
      else {
        AsyncStorage.setItem("session", 'true');
          this.setState({
            userData: resJson[1].res[0],
            loggedIn: true
          });
          AsyncStorage.setItem("ID", JSON.stringify(this.state.userData.id))
          // AsyncStorage.getItem("ID").then((id) => console.log(id))
      }
    })
  }


  _handleSignup = () => {
  fetch(`https://forum-app-api.herokuapp.com/api/user/add?name=${this.state.newFullName}&email=${this.state.newEmail}&password=${this.state.newPassword}&image=${this.state.iimage}`)
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson)
      if(resJson.status == "done") {
        AsyncStorage.setItem("session", 'true');
          this.setState({
            userData: {id: resJson.id},
            loggedIn: true,
            showsignup: false
          })
          AsyncStorage.setItem("ID", JSON.stringify(resJson.id))
      }
      else {
        Alert.alert('worng info')
      }
    });


    // if (this.state.email == '') {
    //   this.setState({
    //     loggedIn: true,
    //     showsignup: false
    //   })
    // } else {
    //   Alert.alert('Wrong Email')
    // }
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
