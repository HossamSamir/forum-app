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
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import { EvilIcons } from '@expo/vector-icons';

export default class Post extends React.Component {
  static navigationOptions = {
      header: null
    };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={styles.container}>
        <Image
          source={params.imgsource}
          style={{
            width: '100%',
            height: 200,
          }}
        />



      <Text style={styles.title}>{params.title}</Text>
          <MonoText style={{fontSize: 13, marginBottom: 5}}>
            <EvilIcons name='clock' size={15} /> {params.date}
          </MonoText>
        <Text style={styles.postText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Image
          style={{width: '100%', height: 200, marginVertical: 18}}
          source={{uri: 'http://68.media.tumblr.com/96e6455f3f957d07c84e47007bc1b5ca/tumblr_nepmcii7fk1st0ypno1_500.jpg'}}
        />
        <Text style={styles.postText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <View style={{height: 50, marginTop: 30, borderTopColor: '#F2F2F2', borderTopWidth: 2, flexDirection: 'row', alignItems: 'center'}}>
          <EvilIcons name='heart' size={35} style={{backgroundColor: 'transparent', flex: .16,}} />
          <EvilIcons name='comment' size={35} style={{backgroundColor: 'transparent', flex: .16}} />
          <EvilIcons name='share-apple' size={35} style={{backgroundColor: 'transparent', flex: .16}} />
          <Text style={{backgroundColor: 'transparent', color: '#C1C1C1', flex: .3}}> 153 Likes</Text>
          <Text style={{backgroundColor: 'transparent', color: '#C1C1C1', flex: .5}}> 10 Responnses</Text>
        </View>



      </ScrollView>
    );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    color: '#272727',
    textAlign: 'center',
    marginVertical: 18,
  },
  postText: {
    paddingHorizontal: 10,
    fontSize: 18,
    lineHeight: 27
  }
});
