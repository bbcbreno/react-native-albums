import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

// JSX - use babel to simulate
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('album', () => App);
