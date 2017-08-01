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
  ListView
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {


  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          Anime & Manga
        </Text>
        <ScrollView horizontal={true}>



          <View style={{backgroundColor: 'white', width: 150, height: 200, borderRadius: 10, marginRight: 20, marginTop: 18, overflow: 'hidden',}}>
            <View style={{backgroundColor: 'black', width: '100%', height: 130}}>
              <Image
                source={require('../assets/images/post-pic.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View style={{backgroundColor: 'white', width: '100%', height: 70, padding: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>
                {'Kanon Character and Endin...'.toUpperCase()}
              </Text>
              <Text style={{marginTop: 5, color: 'grey'}}>july 28, 2017</Text>
            </View>
          </View>



          <View style={{backgroundColor: 'white', width: 150, height: 200, borderRadius: 10, marginRight: 20, marginTop: 18, overflow: 'hidden',}}>
            <View style={{backgroundColor: 'black', width: '100%', height: 130}}>
              <Image
                source={require('../assets/images/post-pic.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View style={{backgroundColor: 'white', width: '100%', height: 70, padding: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>
                {'Kanon Character and Endin...'.toUpperCase()}
              </Text>
              <Text style={{marginTop: 5, color: 'grey'}}>july 28, 2017</Text>
            </View>
          </View>



          <View style={{backgroundColor: 'white', width: 150, height: 200, borderRadius: 10, marginRight: 20, marginTop: 18, overflow: 'hidden',}}>
            <View style={{backgroundColor: 'black', width: '100%', height: 130}}>
              <Image
                source={require('../assets/images/post-pic.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View style={{backgroundColor: 'white', width: '100%', height: 70, padding: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>
                {'Kanon Character and Endin...'.toUpperCase()}
              </Text>
              <Text style={{marginTop: 5, color: 'grey'}}>july 28, 2017</Text>
            </View>
          </View>


          <View style={{backgroundColor: 'white', width: 150, height: 200, borderRadius: 10, marginRight: 20, marginTop: 18, overflow: 'hidden',}}>
            <View style={{backgroundColor: 'black', width: '100%', height: 130}}>
              <Image
                source={require('../assets/images/post-pic.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View style={{backgroundColor: 'white', width: '100%', height: 70, padding: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>
                {'Kanon Character and Endin...'.toUpperCase()}
              </Text>
              <Text style={{marginTop: 5, color: 'grey'}}>july 28, 2017</Text>
            </View>
          </View>


          <View style={{backgroundColor: 'white', width: 150, height: 200, borderRadius: 10, marginRight: 20, marginTop: 18, overflow: 'hidden',}}>
            <View style={{backgroundColor: 'black', width: '100%', height: 130}}>
              <Image
                source={require('../assets/images/post-pic.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View style={{backgroundColor: 'white', width: '100%', height: 70, padding: 10}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>
                {'Kanon Character and Endin...'.toUpperCase()}
              </Text>
              <Text style={{marginTop: 5, color: 'grey'}}>july 28, 2017</Text>
            </View>
          </View>



        </ScrollView>
      </View>
    );
  }




}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121923',
    flex: 1,
    paddingTop: (Platform.OS == 'ios') ? 40 : 0,
    paddingHorizontal: 10
  }
});
