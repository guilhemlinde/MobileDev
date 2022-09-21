/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, View} from 'react-native';
import MainContainer from './navigation/MainContainer';

const App: () => Node = () => {
  return(
    <MainContainer />
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }
})

export default App;
