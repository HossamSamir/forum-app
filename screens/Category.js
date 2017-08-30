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
        <TouchableOpacity
          onPress={() => navigate(
            'Subcat',
            {
              title: this.state.categoreyTitle,
            })}
        >
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            { this.state.categoreyTitle }
          </Text>
        </TouchableOpacity>
        <ScrollView style={{ marginBottom: 30 }} horizontal={true}>
          {/* CARD */}
            <TouchableOpacity
              onPress={() => navigate(
                'Post',
                {
                  title: this.state.title,
                  imgsource: this.state.imgsource,
                  date: this.state.date,
                })}
            >
              <PostCard
                 title = {this.state.title}
                 source = {this.state.imgsource}
                 date = {this.state.date} />
          </TouchableOpacity>

          {/* CARD */}
            <TouchableOpacity
              onPress={() => navigate(
                'Post',
                {
                  title: this.state.title,
                  imgsource: this.state.imgsource,
                  date: this.state.date,
                })}
            >
              <PostCard
                 title = {this.state.title}
                 source = {this.state.imgsource}
                 date = {this.state.date} />
          </TouchableOpacity>

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
    );
}
}


const styles = StyleSheet.create({

});
const SimpleApp = StackNavigator({
  Post: { screen: Post },
});
