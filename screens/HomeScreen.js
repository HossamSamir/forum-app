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
import PostCard from '../components/PostCard';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {


  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <ScrollView>

          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Anime & Manga
          </Text>
          <ScrollView horizontal={true}>
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic.png')}
               date = 'july 28, 2017' />
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic4.jpg')}
               date = 'july 28, 2017' />
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic.png')}
               date = 'july 28, 2017' />
            <PostCard
              title = 'see more'
              source = {require('../assets/images/see-more.png')}
              date = '...' />
          </ScrollView>





          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 50}}>
            MyAnimeList
          </Text>

          <ScrollView horizontal={true}>
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic2.jpg')}
               date = 'july 28, 2017' />
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic5.jpg')}
               date = 'july 28, 2017' />
            <PostCard
              title = 'see more'
              source = {require('../assets/images/see-more.png')}
              date = '...' />
          </ScrollView>




          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 50}}>
            heres another categorey
          </Text>

          <ScrollView horizontal={true}>
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic3.jpg')}
               date = 'july 28, 2017' />
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic6.jpg')}
               date = 'july 28, 2017' />
            <PostCard
               title = 'see more'
               source = {require('../assets/images/see-more.png')}
               date = '...' />
          </ScrollView>




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
