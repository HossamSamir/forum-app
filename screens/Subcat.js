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
import PostCard from '../components/PostCard';
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
        <ScrollView horizontal={true}>

          <TouchableOpacity style={{ marginHorizontal: 6 }}
            onPress={() => navigate(
              'Post',
              {
                title: 'asags'
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
            <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20, position: 'absolute', width: '100%', textAlign: 'center', top: 20 }}>Romance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 6 }} onPress={ () => Alert.alert('asf') }>
            <Image
              style={{
                width: 130,
                height: 70,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
               }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjU3-XFrnu8szUNxHWq3yUl1RfSKgd0rtOhZ6teq2dNyXYGhKO' }} />
            <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20, position: 'absolute', width: '100%', textAlign: 'center', top: 20 }}>Sad</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 6 }} onPress={ () => Alert.alert('asf') }>
            <Image
              style={{
                width: 130,
                height: 70,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
               }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjU3-XFrnu8szUNxHWq3yUl1RfSKgd0rtOhZ6teq2dNyXYGhKO' }} />
            <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20, position: 'absolute', width: '100%', textAlign: 'center', top: 20 }}>test</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 6 }} onPress={ () => Alert.alert('asf') }>
            <Image
              style={{
                width: 130,
                height: 70,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
               }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjU3-XFrnu8szUNxHWq3yUl1RfSKgd0rtOhZ6teq2dNyXYGhKO' }} />
            <Text style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 20, position: 'absolute', width: '100%', textAlign: 'center', top: 20 }}>test</Text>
          </TouchableOpacity>

        </ScrollView>

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
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Anime & Manga
            </Text>
          </TouchableOpacity>
          <ScrollView horizontal={true}>

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






            <PostCard
              title = 'see more'
              source = {require('../assets/images/see-more.png')}
              date = '...' />
          </ScrollView>





          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 50}}>
            MyAnimeList
          </Text>

          <ScrollView horizontal={true}>
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic2.jpg')}
               date = 'july 28, 2017' />
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic5.jpg')}
               date = 'july 28, 2017' />
            <PostCard
              title = 'see more'
              source = {require('../assets/images/see-more.png')}
              date = '...' />
          </ScrollView>




          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 50}}>
            heres another categorey
          </Text>

          <ScrollView horizontal={true}>
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic3.jpg')}
               date = 'july 28, 2017' />
            <PostCard
               title = 'Kanon Character and Endin...'
               source = {require('../assets/images/post-pic6.jpg')}
               date = 'july 28, 2017' />
            <PostCard
               title = 'see more'
               source = {require('../assets/images/see-more.png')}
               date = '...' />
          </ScrollView>




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
