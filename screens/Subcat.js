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
import SubcatPosts from '../screens/SubcatPosts';
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
      subcats: [],
      catPosts: [],
      doneFetchingSubcats: false,
      doneFetchingCatposts: false
    }
  }

  componentDidMount() {
    this.fetchData()
    this.fetchCatPosts()
  }

  fetchData() {
    fetch('https://forum-app-api.herokuapp.com/api/sub_categories?category_id=' + this.props.navigation.state.params.id)
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((subcat) => {
        this.state.subcats.push(subcat)
      })
      // console.log(this.state.subcats);
      this.setState({
        doneFetchingSubcats: true
      })
    })
  }

  fetchCatPosts() {
    fetch('https://forum-app-api.herokuapp.com/api/posts_by_category?category_id=' + this.props.navigation.state.params.id + '&page=1&limit=8')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((post) => {
        this.state.catPosts.push(post)
      })
      // console.log(this.state.catPosts)
      this.setState({doneFetchingCatposts: true})
    })
  }

  renderSubCats() {
    if (this.state.doneFetchingSubcats == true) {
      return (
        this.state.subcats.map((s) => {
          const { navigate } = this.props.navigation;
          return (
            <TouchableOpacity
              key={s.id}
              style={{ marginHorizontal: 6 }}
              onPress={() => navigate(
                'SubcatPosts',
                {
                  title: s.title,
                  id: s.id
                })}
              >
              <Image
                style={{
                  width: 130,
                  height: 70,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjU3-XFrnu8szUNxHWq3yUl1RfSKgd0rtOhZ6teq2dNyXYGhKO' }} />
              <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20, position: 'absolute', width: '100%', textAlign: 'center', top: 20 }}> { s.title } </Text>
            </TouchableOpacity>
          )
        })
      )
    }
  }

  renderCatPosts() {
    if (this.state.doneFetchingCatposts == false) {
      return (
        <Text>LOADINGGGGGGGGGGGGG</Text>
      )
    } else {
      const { navigate } = this.props.navigation;
      return (
        this.state.catPosts.map((post) => {
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

          <ScrollView style={{ marginBottom: 20 }} horizontal={true}>
            { this.renderSubCats() }
          </ScrollView>

          { this.renderCatPosts() }

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
