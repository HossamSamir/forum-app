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
  TextInput,
  KeyboardAvoidingView,
  Picker,
  Item,
  AsyncStorage
} from 'react-native';
import { WebView } from 'react-native';
import { ImagePicker } from 'expo';
import { EvilIcons } from '@expo/vector-icons';


export default class AddPost extends React.Component {

  componentDidMount() {
    this.fetchData()
    this.fetchSubData()
  }

  fetchData() {
    fetch('https://forum-app-api.herokuapp.com/api/categories')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((cat) => {
        this.state.categories.push(cat)
      })
    })
    .then(
      this.setState({doneFetchingCats: true})
    )
  }

  fetchSubData() {
    fetch('https://forum-app-api.herokuapp.com/api/sub_categories?category_id=1')
    .then((res) => res.json())
    .then((resJson) => {
      resJson.map((cat) => {
        this.state.subCategories.push(cat)
      })
    })
    .then(
      this.setState({doneFetchingSubcats: true})
    )
  }

  renderCategories() {
    if (this.state.doneFetchingCats == false) {
      return(
        <Text>LOADINGGGGGGGGGGGGG</Text>
      )
    } else {
      return (
        <Picker style={styles.picker} selectedValue={this.state.category.value} onValueChange={(itemValue, itemIndex) => {
            this.setState({ category: {value: itemValue, id: itemIndex+1}})
            console.log(itemValue, itemIndex+1);
          }}>
          {
            this.state.categories.map((cat) => {
              return (
                <Picker.Item key={cat.id} label={cat.title}  value={cat.title} />
              )
            })
          }
        </Picker>
      )
    }
  }

  renderSubCategories() {
    if (this.state.doneFetchingSubcats == false) {
      return(
        <Text>LOADINGGGGGGGGGGGGG</Text>
      )
    } else {
      return (
        <Picker style={styles.picker} selectedValue={this.state.subcategory.value} onValueChange={(itemValue, itemIndex) => {
            this.setState({ subcategory: {value: itemValue, id: itemIndex+1}})
            console.log(itemValue, itemIndex+1);
          }}>
          {
            this.state.subCategories.map((cat) => {
              return (
                <Picker.Item key={cat.id} label={cat.title}  value={cat.title} />
              )
            })
          }
        </Picker>
      )
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      image: 'https://support.e2ma.net/@api/deki/files/783/placeholder.png?revision=1&size=bestfit&width=468&height=186',
      imageBase64: '',
      title: '',
      categories: [],
      subCategories: [],
      doneFetchingCats: false,
      doneFetchingSubCats: false,
      description: '',
      category: {},
      subcategory: {},
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 3],
      base64: true
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri, imageBase64: result.base64 });
    }
  };

    // updateCategory = (category) => {
    //   console.log(category)
    //   this.setState({ category: category })
    // }

    updatesubCategory = (subcategory) => {
      this.setState({ subcategory: subcategory })
    }

    _handlePublish = () => {
      AsyncStorage.getItem("ID").then((userID) => {

        fetch('https://forum-app-api.herokuapp.com/api/post/add', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category_id: this.state.category.id,
            sub_category_id: this.state.subcategory.id,
            user_id: userID,
            post: this.state.description,
            title: this.state.title,
            image: this.state.imageBase64,
          })
        })
        .then((res) => console.log(res))
        .then(() => {
          this.setState({
            image: 'https://support.e2ma.net/@api/deki/files/783/placeholder.png?revision=1&size=bestfit&width=468&height=186',
            category: 'Anime',
            subcategory: 'Anime subCat. #1'
           })
          this.refs['titleInput'].setNativeProps({text: ''});
          this.refs['descriptionInput'].setNativeProps({text: ''});
          Alert.alert('published :D !')
        })


      });
    }


  static navigationOptions = {
    header: null,
  };

  render() {
     let { image } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>

        <TouchableOpacity onPress={this._pickImage}>
            {image &&
              <Image source={{ uri: image }} style={{ height: 200, width: '100%' }} />}
        </TouchableOpacity>


          <TextInput
            onChangeText={(title) => this.setState({ title })}
            ref='titleInput'
            selectionColor='crimson'
            returnKeyType = {"next"}
            keyboardAppearance='dark'
            autoFocus = {false}
            onSubmitEditing={(event) => {
              this.refs.descriptionInput.focus();
            }}
            autoCapitalize='characters'
            style={{
              fontSize: 30,
              color: '#282828',
              marginTop: 18,
              fontWeight: 'bold'
            }}
            placeholder="Type a title" />


          <TextInput
            onChangeText={(description) => this.setState({ description })}
            ref='descriptionInput'
            keyboardAppearance='dark'
            multiline={true}
            selectionColor='crimson'
            blurOnSubmit={true}
            returnKeyType='done'
            style={{
              fontSize: 20,
              color: '#808080',
              lineHeight: 100,
              marginTop: 15,
              width: '100%'
            }}
            placeholder="Tell a story" />


          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <Text style = {styles.category}> category:</Text>
              { this.renderCategories() }
            </View>

            <View style={{ flex: 1 }}>
                <Text style = {styles.category}> subCategory:</Text>
              { this.renderSubCategories() }
            </View>
          </View>




          <TouchableOpacity style={{ marginVertical: 10, borderRadius: 10, borderColor: 'green', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={ this._handlePublish }>
              <Text style={styles.publish}>Publish</Text>
          </TouchableOpacity>


        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 40
  },
  category: {
      fontSize: 20,
      marginTop: 100,
   },
   publish: {
     flex: 1,
     fontSize: 28,
     color: 'green',
     paddingVertical: 8
   }
});
