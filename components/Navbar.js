import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { layout } from '../assets/layout';

export default class Navbar extends React.Component {
  render() {
    return(
      <View style={layout.navbar}>
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