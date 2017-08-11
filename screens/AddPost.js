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
  Item
} from 'react-native';
import { WebView } from 'react-native';
import { ImagePicker } from 'expo';
import { EvilIcons } from '@expo/vector-icons';


export default class AddPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: 'https://support.e2ma.net/@api/deki/files/783/placeholder.png?revision=1&size=bestfit&width=468&height=186',
      title: '',
      description: '',
      category: '',
      subcategory: '',
      showCategoreis: false,
      showsubCategoreis: false
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
      this.setState({ image: result.uri });
    }
  };

    updateCategory = (category) => {
      this.setState({ category: category })
    }

    updatesubCategory = (subcategory) => {
      this.setState({ subcategory: subcategory })
    }

    _categories = () => {
      if (this.state.showCategoreis) {
        return (
            <Picker style={styles.picker} selectedValue = {this.state.category} onValueChange = {this.updateCategory}>
              <Picker.Item label = "Anime category 1" value = "Anime category 1" />
              <Picker.Item label = "Anime category 2" value = "Anime category 2" />
              <Picker.Item label = "Anime category 3" value = "Anime category 3" />
              <Picker.Item label = "Anime category 4" value = "Anime category 4" />
              <Picker.Item label = "Anime category 5" value = "Anime category 5" />
              <Picker.Item label = "Anime category 6" value = "Anime category 6" />
              <Picker.Item label = "Anime category 7" value = "Anime category 7" />
              <Picker.Item label = "Anime category 8" value = "Anime category 8" />
              <Picker.Item label = "Anime category 9" value = "Anime category 9" />
            </Picker>
        );
      }
    }

    _subcategories = () => {
      if (this.state.showsubCategoreis) {
        return (
            <Picker style={styles.picker} selectedValue = {this.state.subcategory} onValueChange = {this.updatesubCategory}>
              <Picker.Item label = "Anime subcategory 1" value = "Anime subcategory 1" />
              <Picker.Item label = "Anime subcategory 2" value = "Anime subcategory 2" />
              <Picker.Item label = "Anime subcategory 3" value = "Anime subcategory 3" />
              <Picker.Item label = "Anime subcategory 4" value = "Anime subcategory 4" />
              <Picker.Item label = "Anime subcategory 5" value = "Anime subcategory 5" />
              <Picker.Item label = "Anime subcategory 6" value = "Anime subcategory 6" />
              <Picker.Item label = "Anime subcategory 7" value = "Anime subcategory 7" />
              <Picker.Item label = "Anime subcategory 8" value = "Anime subcategory 8" />
              <Picker.Item label = "Anime subcategory 9" value = "Anime subcategory 9" />
            </Picker>
        );
      }
    }

    _handlePublish = () => {
      this.setState({
        image: 'https://support.e2ma.net/@api/deki/files/783/placeholder.png?revision=1&size=bestfit&width=468&height=186',
        category: 'Anime',
        subcategory: 'Anime subCat. #1'
       })
      this.refs['titleInput'].setNativeProps({text: ''});
      this.refs['descriptionInput'].setNativeProps({text: ''});
      Alert.alert('published :D !')
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
            onCHangeText={(title) => this.setState({ title })}
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
              <TouchableOpacity onPress={ () => this.setState({ showCategoreis: true }) }>
                <Text style = {styles.category}> category:</Text>
              </TouchableOpacity>

              <Picker style={styles.picker} selectedValue = {this.state.category} onValueChange = {this.updateCategory}>
                <Picker.Item label = "Anime" value = "Anime" />
                <Picker.Item label = "Anime & Manga" value = "Anime & Manga" />
                <Picker.Item label = "Anime category 3" value = "Anime category 3" />
                <Picker.Item label = "Anime category 4" value = "Anime category 4" />
              </Picker>
            </View>




            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={ () => this.setState({ showCategoreis: true }) }>
                <Text style = {styles.category}> subcategory:</Text>
              </TouchableOpacity>

              <Picker style={styles.picker} selectedValue = {this.state.subcategory} onValueChange = {this.updatesubCategory}>
                <Picker.Item label = "Anime subCat. #1" value = "Anime subCat. #1" />
                <Picker.Item label = "Anime subCat. #2" value = "Anime subCat. #2" />
                <Picker.Item label = "Anime subCat. #3" value = "Anime subCat. #3" />
                <Picker.Item label = "Anime subCat. #4" value = "Anime subCat. #4" />
                <Picker.Item label = "Anime subCat. #5" value = "Anime subCat. #5" />
              </Picker>
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
