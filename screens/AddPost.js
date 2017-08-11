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
  KeyboardAvoidingView
} from 'react-native';
import { WebView } from 'react-native';
import { ImagePicker } from 'expo';


export default class AddPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: 'https://support.e2ma.net/@api/deki/files/783/placeholder.png?revision=1&size=bestfit&width=468&height=186'
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

  static navigationOptions = {
    header: null,
  };

  render() {
     let { image } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
        <ScrollView>

        <TouchableOpacity onPress={this._pickImage}>
            {image &&
              <Image source={{ uri: image }} style={{ height: 200, width: '100%' }} />}
        </TouchableOpacity>


          <TextInput
            style={{
              fontSize: 30,
              color: '#272727',
              marginTop: 18,
            }}
            placeholder="Type a title" />

          <TextInput
            style={{
              fontSize: 20,
              color: '#272727',
              marginTop: 15,
              width: '100%'
            }}
            placeholder="Tell a story" />

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    paddingTop: 40
  },
});
