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

const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
      NotsExists: true
    };
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  _handleShowNotifications = () => {
     this.setState({
       NotsExists: true
     });
   }

   _NotificationsPlaceholder = () => {
      if (this.state.NotsExists == true) {
        return (
        <View style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 10
            }}>
            <List
              style={{
                width: '100%',
                marginTop: 20,
                }}
              dataSource={this.ds.cloneWithRows(this.state.listViewData)}
              renderRow={data =>
                <ListItem avatar style={{
                  width: '100%',
                  marginVertical: 6,
                  }}>
                  <Left>
                    <Thumbnail source={{ uri: 'https://avatars1.githubusercontent.com/u/15352675?v=4&s=460' }} />
                  </Left>
                  <Body>
                    <Text> {data} </Text>
                    <Text note>Did something..</Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
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
      )
      } else {
        return (
          <View style={styles.container}>
            <Image source={require('../assets/images/illustration.jpg')} style={{ width: 150, height: 150 }} />
            <Text style={{ color: '#9a9b9f', fontWeight: 'bold', fontSize: 23 }}>Nothing here!!!</Text>
            <Text style={{ textAlign: 'center', color: '#d1d1d1', fontSize: 16, marginTop: 15 }}>Tab the notifications button below to add a fake test notifications to check them</Text>
            <TouchableOpacity onPress={this._handleShowNotifications}>
              <Text style={{ color: 'white', backgroundColor: '#ff717f', marginTop: 20, borderRadius: 8, paddingHorizontal: 20, paddingVertical: 10 }}>Fake Notifications</Text>
            </TouchableOpacity>
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
  }
});
