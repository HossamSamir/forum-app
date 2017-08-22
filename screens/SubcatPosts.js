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
      date: 'july 28, 2017'
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



          <TouchableOpacity
            onPress={() => navigate(
              'Post',
              {
                title: this.state.title,
                imgsource: this.state.imgsource,
                date: this.state.date,
              })}
          >
            <PostCardFullWidth
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
            <PostCardFullWidth
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
            <PostCardFullWidth
               title = {this.state.title}
               source = {this.state.imgsource}
               date = {this.state.date} />
          </TouchableOpacity>










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
