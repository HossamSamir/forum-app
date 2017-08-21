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
import Subcat from '../screens/Subcat';
import PostCard from '../components/PostCard';
import { MonoText } from '../components/StyledText';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'this is a title',
      imgsource: {uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg'},
      date: 'july 28, 2017',
      categoreyTitle: 'Anime & Manga'
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

          {
            /*
             ---------------------
            |   CATEGOREY START   |
             ---------------------
            */
          }
          <TouchableOpacity
            onPress={() => navigate(
              'Subcat',
              {
                title: this.state.categoreyTitle,
              })}
          >
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              { this.state.categoreyTitle }
            </Text>
          </TouchableOpacity>
          <ScrollView style={{ marginBottom: 30 }} horizontal={true}>
            {/* CARD */}
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

            {/* CARD */}
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

            {/* SEE MORE CARD */}
            <TouchableOpacity
              onPress={() => navigate(
                'Subcat',
                {
                  title: this.state.categoreyTitle,
                })}
            >
              <PostCard
                title = 'see more'
                source = {require('../assets/images/see-more.png')}
                date = '...' />
            </TouchableOpacity>
          </ScrollView>
          {
            /*
             -------------------
            |   CATEGOREY END   |
             -------------------
            */
          }

















          {
            /*
             ---------------------
            |   CATEGOREY START   |
             ---------------------
            */
          }
          <TouchableOpacity
            onPress={() => navigate(
              'Subcat',
              {
                title: this.state.categoreyTitle,
              })}
          >
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              { this.state.categoreyTitle }
            </Text>
          </TouchableOpacity>
          <ScrollView style={{ marginBottom: 30 }} horizontal={true}>
            {/* CARD */}
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

            {/* CARD */}
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

            {/* SEE MORE CARD */}
            <TouchableOpacity
              onPress={() => navigate(
                'Subcat',
                {
                  title: this.state.categoreyTitle,
                })}
            >
              <PostCard
                title = 'see more'
                source = {require('../assets/images/see-more.png')}
                date = '...' />
            </TouchableOpacity>
          </ScrollView>
          {
            /*
             -------------------
            |   CATEGOREY END   |
             -------------------
            */
          }

















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
