import React from 'react';

import { TouchableOpacity, Image, View } from 'react-native';

import { layout } from '../assets/layout';

export default class IconButton extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={layout.iconButton.button}
        >
          <Image style={layout.iconButton.img}
            source={this.props.image}
          />
        </TouchableOpacity>
      </View>
    )
  }
}