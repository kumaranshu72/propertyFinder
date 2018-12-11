/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';


type Props = {};

const RootStack = createStackNavigator({
  Home: { screen: SearchPage },
   Results: { screen: SearchResults },
});

const App = createAppContainer(RootStack);

export default App;
