import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Alert,
  ListView
} from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Left, Body, Right, Thumbnail } from 'native-base';
import { StackNavigator } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';

const datas = [
  'Hossam Samir',
  'Ahmed Clyne',
  'Dejan Lovren',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      showChat: true,
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


  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  _handleShowChat = () => {
     this.setState({
       showChat: true
     });
   }

   _NotificationsPlaceholder = () => {
      if (this.state.showChat == true) {
        return (
          <GiftedChat
            style={{ backgroundColor: 'crimson', flex: 1 }}
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              _id: 1,
          }} />
      )
      } else {
        return (
          <View style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <List
                style={{
                  width: '100%',
                  marginTop: 20,
                  }}
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data =>
                  <ListItem avatar
                    onPress={ this._handleShowChat }
                    style={{
                    width: '100%',
                    marginVertical: 6,
                    }}>
                    <Left>
                      <Thumbnail source={{ uri: 'https://avatars1.githubusercontent.com/u/15352675?v=4&s=460' }} />
                    </Left>
                    <Body>
                      <Text> {data} </Text>
                      <Text note> Liked Your Post</Text>
                    </Body>
                    <Right>
                      <Text note>8 mins ago</Text>
                    </Right>
                  </ListItem>}
                renderLeftHiddenRow={data => {}}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button style={{ marginVertical: 6 }} full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={.1}
                rightOpenValue={-75}
              />
        </View>
        );
      }
    }

    static navigationOptions = {
      header: null
    };

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <View style={styles.container}>
        { this._NotificationsPlaceholder() }
      </View>
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
