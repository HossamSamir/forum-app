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




          <ScrollView style={{ marginBottom: 20 }} horizontal={true}>


            <TouchableOpacity style={{ marginHorizontal: 6 }}
              onPress={() => navigate(
                'SubcatPosts',
                {
                  title: 'subcat #1'
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
              <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20, position: 'absolute', width: '100%', textAlign: 'center', top: 20 }}>subcat #1</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginHorizontal: 6 }}
              onPress={() => navigate(
                'SubcatPosts',
                {
                  title: 'subcat #2'
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
              <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20, position: 'absolute', width: '100%', textAlign: 'center', top: 20 }}>subcat #2</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ marginHorizontal: 6 }}
              onPress={() => navigate(
                'SubcatPosts',
                {
                  title: 'subcat #3'
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
              <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20, position: 'absolute', width: '100%', textAlign: 'center', top: 20 }}>subcat #3</Text>
            </TouchableOpacity>


          </ScrollView>




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
