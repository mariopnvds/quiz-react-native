import React from 'react';

import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';

import { layout } from '../assets/layout';

export default class IconButton extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.button}
        >
          <Image style={styles.img}
            source={this.props.image}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    tintColor: layout.colors.dark,
    height: 30,
    width: 30,
  },
  button: {
    backgroundColor: layout.colors.background,
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    padding: layout.spacing.xs,
    margin: layout.spacing.xs
  }
});