/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './Components/MainScreen';
export default class App extends Component<{}> {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator(
  {
    Home: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);