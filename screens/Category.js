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
  Modal,
  TouchableHighlight,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Post from './Post';
import Subcat from './Subcat';
import PostCard from '../components/PostCard';

export default class Category extends React.Component {

  static navigationOptions = {
      header: null
    };

  render() {
    return (
      <View>
      </View>
    );
}
}


const styles = StyleSheet.create({

});
const SimpleApp = StackNavigator({
  Post: { screen: Post },
});
