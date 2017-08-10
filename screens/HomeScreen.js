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
import Post from '../screens/Post';
import PostCard from '../components/PostCard';
import { MonoText } from '../components/StyledText';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'this is a title',
      imgsource: {uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg'},
      date: 'july 28, 2017'
    }
  }

static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>


          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Anime & Manga
          </Text>
          <ScrollView horizontal={true}>

            <TouchableOpacity
              // onPress={() => {
                // getting data from the server
                // fetch('https://forum-app-api.herokuapp.com/api/post?post_id=41').then((res) => console.log(res))
                // navigate(
                //   'Post',
                //   {
                //     title: this.state.title,
                //     imgsource: this.state.imgsource,
                //     date: this.state.date,
                //   })
              // }}
              onPress={() => navigate(
                'Post',
                {
                  title: this.state.title,
                  imgsource: this.state.imgsource,
                  date: this.state.date,
                })}
            >
              <PostCard
                 title = {this.state.title}
                 source = {this.state.imgsource}
                 date = {this.state.date} />
            </TouchableOpacity>




            <TouchableOpacity
              onPress={() => navigate(
                'Post',
                {
                  title: this.state.title,
                  imgsource: this.state.imgsource,
                  date: this.state.date,
                })}
            >
              <PostCard
                 title = {this.state.title}
                 source = {this.state.imgsource}
                 date = {this.state.date} />
            </TouchableOpacity>




            <TouchableOpacity
              onPress={() => navigate(
                'Post',
                {
                  title: this.state.title,
                  imgsource: this.state.imgsource,
                  date: this.state.date,
                })}
            >
              <PostCard
                 title = {this.state.title}
                 source = {this.state.imgsource}
                 date = {this.state.date} />
            </TouchableOpacity>






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

const SimpleApp = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  Post: { screen: Post },
});


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121923',
    flex: 1,
    paddingTop: (Platform.OS == 'ios') ? 40 : 0,
    paddingHorizontal: 10
  }
});
