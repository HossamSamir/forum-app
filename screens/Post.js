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
  TextInput,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default class Post extends React.Component {

  componentDidMount() {
    this.fetchComments()
  }

  fetchComments() {
    fetch('https://forum-app-api.herokuapp.com/api/comments?post_id=1')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((comment) => {
        this.state.commentsData.push(comment)
      })
      this.setState({doneFetchingComments : true})
    })
  }

  renderComments() {
    if (this.state.doneFetchingComments == false) {
      return (<Text>LOADINGGGGGGGGGGGGG</Text>)
    } else {
      return (
        this.state.commentsData.map((c) => {
          return (
            <View key={c.comment.id} style={{ padding: 10, flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Image source={{ uri: 'https://avatars1.githubusercontent.com/u/15352675?v=4&s=460' }}
                  style={{ width: 55, height: 55, borderRadius: 27.5 }}
                 />
              </View>
             <Text style={{ flex: 3 }}>
               <Text style={{ fontWeight: 'bold' }}>{c.user.name} </Text>
               {c.comment.comment}
               <Text style={{ color: '#D8DBDE' }}>{'\n 10m ago'}</Text>
             </Text>
            </View>
          )
        })
      )
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      likeicon: 'ios-heart-outline',
      likecolor: 'black',
      addAComment: '',
      commentsData: [],
      doneFetchingComments: false
    }
  }

  _handleLike = () => {
    this.setState({
      likeicon: 'ios-heart',
      likecolor: 'red'
    })
  }

  _handleAddComment = () => {
    AsyncStorage.getItem("ID").then((value) => {
      fetch(`https://forum-app-api.herokuapp.com/api/comment/add?user_id=${value}&post_id=${this.props.navigation.state.params.id}&comment=${this.state.addAComment}`)
      .then((res) => res.json())
      .then((resJson) => console.log(resJson))
      .then(() => {
        this.refs.commentInput.setNativeProps({text: ''})
      })
      console.log(this.state.addAComment);
      console.log(value);
      console.log(this.props.navigation.state.params.id);
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


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

          <TouchableOpacity onPress={ this._handleLike } style={{ flex: .16 }}>
            <Ionicons name={this.state.likeicon} size={31} color={this.state.likecolor} style={{backgroundColor: 'transparent', padding: 6}} />
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: .16 }} onPress={() => {
            this.setModalVisible(true)
          }}>
            <EvilIcons name='comment' size={35} style={{backgroundColor: 'transparent',}} />
          </TouchableOpacity>


          <TouchableOpacity style={{ flex: .16 }}>
            <EvilIcons name='share-apple' size={35} style={{backgroundColor: 'transparent',}} />
          </TouchableOpacity>

          <Text style={{backgroundColor: 'transparent', color: '#C1C1C1', flex: .3}}> 153 Likes</Text>
          <Text style={{backgroundColor: 'transparent', color: '#C1C1C1', flex: .5}}> 10 Responnses</Text>
        </View>


        <View>
                <Modal
                  animationType={"slide"}
                  transparent={true}
                  visible={this.state.modalVisible}
                  >

                    <TouchableHighlight style={{ flex: .2, width: '100%' }} onPress={() => {
                      this.setModalVisible(!this.state.modalVisible)
                    }}>
                      <Text> </Text>
                    </TouchableHighlight>

                 <View style={{
                     flex: 1,
                     width: '100%',
                     backgroundColor: 'white',
                     shadowColor: "#000000",
                     shadowOpacity: 0.8,
                     shadowRadius: 2,
                     shadowOffset: {
                       height: 1,
                       width: 0
                     },
                     }}>
                  <ScrollView style={{
                      flex: 3,
                     }}>

                     <TextInput
                       returnKeyType = 'send'
                       ref='commentInput'
                       onChangeText={ (addAComment) => this.setState({addAComment}) }
                       onSubmitEditing = { this._handleAddComment }
                       editable = {true}
                       placeholder='Write a comment'
                       style={{
                         margin: 10,
                         fontSize: 15,
                         fontSize: 18,
                         color: 'crimson',
                     }} />

                   { this.renderComments() }


                  </ScrollView>
                 </View>
                </Modal>
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
