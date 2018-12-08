import React from 'react';

import { View, StatusBar } from 'react-native';

import { layout } from '../assets/layout';

export default class Navbar extends React.Component {
  render() {
    return(
      <View style={layout.navbar}>
        <StatusBar 
          backgroundColor={layout.colors.primary}
          barStyle='light-content' 
        />
      </View>
    );
  }
}