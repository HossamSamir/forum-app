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
import InnerChat from '../screens/InnerChat';

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
      listViewData: datas,
    };
  }


  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }


    static navigationOptions = {
      header: null
    };

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
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
                  onPress={() => navigate(
                    'InnerChat',
                    {
                      title: 'subcat #1'
                    })}
                  style={{
                  width: '100%',
                  marginVertical: 6,
                  }}>
                  <Left>
                    <Thumbnail source={{ uri: 'https://avatars1.githubusercontent.com/u/15352675?v=4&s=460' }} />
                  </Left>
                  <Body>
                    <Text> {data} </Text>
                    <Text note> heyy, how r u?</Text>
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
