import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => alert('This is the home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;
