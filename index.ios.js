import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';

// JSX - use babel to simulate
const App = () => (
  <Header/>
);

AppRegistry.registerComponent('album', () => App);
