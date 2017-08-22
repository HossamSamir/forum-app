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
import { GiftedChat } from 'react-native-gifted-chat';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       messages: [],
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello Admin, lets test 😁',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Hossam Samir',
            avatar: 'https://avatars1.githubusercontent.com/u/15352675?v=4&s=460',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }


  static navigationOptions = ({navigation}) => ({
      title: navigation.state.params.title,
    });

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={{ width: '100%', height: '100%' }}>
          <GiftedChat
            style={{ backgroundColor: 'crimson', flex: 1 }}
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              _id: 1,
          }} />
        </View>
    );
  }




}

const SimpleApp = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  Post: { screen: Post },
});


const styles = StyleSheet.create({


});
