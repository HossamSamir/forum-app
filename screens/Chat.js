import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  ListView,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello Admin 👍🏻💥 !',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Developer',
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


    static navigationOptions = {
      header: null
    };

  render() {
    return (
        <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }} />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  }
});
