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
  ListView,
  AsyncStorage
} from 'react-native';
import { WebBrowser } from 'expo';
import Post from '../screens/Post';
import Subcat from '../screens/Subcat';
import PostCard from '../components/PostCard';
import Category from '../screens/Category';
import { MonoText } from '../components/StyledText';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {

  componentDidMount() {
    AsyncStorage.getItem("session").then((value) => {
      Alert.alert(value)
    });
    AsyncStorage.getItem("ID").then((value) => {
      Alert.alert(value)
    });
    this.fetchData();
  }

  fetchData() {
    fetch('https://forum-app-api.herokuapp.com/api/home')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((category) => {
        this.state.categories.push(category);
      })
      // console.log(this.state.categories);
      this.setState({
        doneFetching: true
      })
    })
    .done();
  }

  showPosts(id) {
      return (
        this.state.categories.map((postTest) => {
          console.log(postTest);
        })
      )
  }


  constructor(props) {
    super(props);
    this.state = {
      title: 'this is a title',
      imgsource: {uri: 'https://i.ytimg.com/vi/2W8e0nU-j84/maxresdefault.jpg'},
      date: 'july 28, 2017',
      categoreyTitle: 'Anime & Manga',
      categories: [],
      doneFetching: false,
    }
  }

  showCategories() {
    if (this.state.doneFetching == false) {
      return (
        <Text>LOADINGGGGGGGGGGGGG</Text>
      )
    } else {
      return (
        this.state.categories.map((cat) => {
          const { navigate } = this.props.navigation;
          return (
            <View key={cat.id}>
              <TouchableOpacity
                onPress={() => navigate(
                  'Subcat',
                  {
                    title: cat.title,
                    id: cat.id
                  })}
              >
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                  { cat.title }
                </Text>
              </TouchableOpacity>
              <ScrollView style={{ marginBottom: 30 }} horizontal={true}>

                { cat.latest_four_posts.map((post) => {
                  return (
                    <TouchableOpacity
                      key = {post.id}
                      onPress={() => navigate(
                        'Post',
                        {
                          title: post.title,
                          imgsource: this.state.imgsource,
                          date: this.state.date,
                        })}
                    >
                      <PostCard
                         title = {post.title}
                         source = {this.state.imgsource}
                         date = {this.state.date} />
                  </TouchableOpacity>
                  )
                }) }

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
            </View>
          )
        })
      )
    }
  }

static navigationOptions = {
    header: null
  };

  render() {
      return (
        <View style={styles.container}>
          <ScrollView>
            { this.showCategories() }
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
