import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  speak() {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  }

  render() {
    return (
      <SafeAreaProvider>
      <View style = {styles.container}>
        <Header
            backgroundColor={'#990099'}
            centerComponent={{
              text: 'TEXT to SPEECH Converter',
              style: { color: '#fff', fontSize: 28, fontFamily: 'cursive'},
            }}
          />

        <Image
            style={styles.imageIcon}
            source={require('./pronunciation.jpg')}/>
          
        <TextInput
            style = {styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}
            defaultValue = {"The"}
            placeholder = "Type your text here"
          />

<TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.state.text === '' || this.state.text == ' '
          ? alert("Please type some text to hear the speech.")
          : this.speak();
        }}>
          <Text style = {styles.displayText}>Hear Speech</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffccff'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 20,
    borderColor: '#ff007f',
    color: '#2C5361',
    borderRadius: 10
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#770077',
    fontFamily: 'Signika'
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#ff007f'
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  }
});