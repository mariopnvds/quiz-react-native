import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { layout } from '../assets/layout';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 50;


export default class Navbar extends React.Component {
  render() {
    return(
      <View style={[{height: APPBAR_HEIGHT}, layout.navbar]}>
        <Text style={[layout.headers.h3, styles.title]}>Quiz 2018/19</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 0,
    color: layout.colors.bright
  }
})