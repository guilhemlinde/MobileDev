import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = () => {
  return <View>{myButton}</View>;
};

const myButton = (
  <Icon.Button
    name="reddit"
    style="height"
    backgroundColor="rgb(255,69,0)"
    onPress={this.loginWithReddit}>
    <Text style={{fontFamily: 'Arial', fontSize: 30, color: 'white'}}>
      Login with Reddit
    </Text>
  </Icon.Button>
);

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998"></Icon.Button>
);

export default SettingsScreen;
