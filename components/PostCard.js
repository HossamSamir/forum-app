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

export default class PostCard extends React.Component {
  render() {
    return (
      <View
        style={{backgroundColor: 'white', width: 150, borderRadius: 10, marginRight: 20, marginTop: 18, overflow: 'hidden',}}>
        <View style={{backgroundColor: 'white', width: '100%', height: 130}}>
          <Image
            source={this.props.source}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={{backgroundColor: 'white', width: '100%', height: 70, padding: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 12}}>
            {this.props.title.toUpperCase()}
          </Text>
          <Text style={{marginTop: 5, color: 'grey'}}>
            {this.props.date}
          </Text>
        </View>
      </View>
    );
  }
}
