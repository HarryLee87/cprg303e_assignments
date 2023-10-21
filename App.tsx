/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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


function App(): JSX.Element {
  
  const age = 20;
  //age = 30;

  const myArr = [1,2,3];
  //myArr = [4,5,6];

  myArr[3] = 4;

  let newArr = [...myArr, 4];

  //functionCall((arg) => {});

  let name = "Harry";

  let welcome = "Welcome, " + name + " to my first app";
  let welcome2 = `Welcome ${name}`;

  return (
    <View>
      <Text>CPRG_303_E: Lab Assignment 1: Spinning Up React Native App</Text>
      <Text>Hello World!</Text>
      <Text>Hello, {name}</Text>
      <TextInput defaultValue={name} />
      <Text>{welcome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
