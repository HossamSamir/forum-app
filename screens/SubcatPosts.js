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
import SubcatPosts from '../screens/SubcatPosts';
import Post from '../screens/Post';
import PostCardFullWidth from '../components/PostCardFullWidth';
import { MonoText } from '../components/StyledText';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'this is a title',
      imgsource: {uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg'},
      date: 'july 28, 2017',
      posts: [],
      doneFetchingPosts: false
    }
  }


  componentDidMount() {
    this.fetchPosts()
  }



  fetchPosts() {
    fetch('https://forum-app-api.herokuapp.com/api/posts_by_sub_category?sub_category_id=' + this.props.navigation.state.params.id + '&page=1&limit=8')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((post) => {
        this.state.posts.push(post)
      })
      // console.log(this.state.posts)
      this.setState({
        doneFetchingPosts: true
      })
    })
  }



  renderPosts() {
    if (this.state.doneFetchingPosts == false) {
      return (
        <Text>LOADINGGGGGGGGGGGGG</Text>
      )
    } else {
      const { navigate } = this.props.navigation;
      return (
        this.state.posts.map((post) => {
          return (
            <TouchableOpacity
              key={post.id}
              onPress={() => navigate(
                'Post',
                {
                  title: post.title,
                  desc: post.post,
                  date: post.created_at,
                  imgsource: {uri: 'https://forum-app-api.herokuapp.com/' + post.image},
                })}
            >
              <PostCardFullWidth
                 title = {post.title}
                 source = {{uri: 'https://forum-app-api.herokuapp.com/' + post.image}}
                 date = {post.created_at} />
            </TouchableOpacity>
          )
        })
      )
    }
  }


  static navigationOptions = ({navigation}) => ({
      title: navigation.state.params.title,
    });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>

          { this.renderPosts() }

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
