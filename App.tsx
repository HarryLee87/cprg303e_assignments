/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyComp from './my-comp';


function App(): JSX.Element {

  const [inputText, setInputText] = useState('');

  let condition = false;
  let dynamicStyles = condition ? styles.text : styles.textRed;

  const data = [];
  for (let n = 0; n < 20; n++) {
    const item = { "id": n, "text": `Item ${n}`};
    data.push(item);    
  }

  const renderItem = ({...item}) => <Text>{item.text}</Text> 

  const handleTextInput = (text) => {
    setInputText(text);
  }

  const handlePress = () => {
    //some code..
  }

  return (
    <ScrollView style={styles.container}>
      <Text>CPRG_303_E: Lab Assignment 1: Spinning Up React Native App</Text>
      <Text style={dynamicStyles}>Hello World!</Text>
      <MyComp />
      <Image source={require("./cat.jpg")} style={styles.image} />
      <TextInput placeholder='Please enter your name' value={inputText} onChangeText={handleTextInput} />
      <Button title="A Button!" onPress={handlePress} />
      <FlatList data={data} renderItem={renderItem} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    //alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'green'
  },
  textRed: {
    fontSize: 20,
    color: 'red'
  },
  image:{
    width: 200,
    height: 150,
  }
});



export default App;
