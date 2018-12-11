import React from 'react';

import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

import { layout } from '../assets/layout';

export default class CircleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressStatus: false
    };

    this._onHideUnderlay = this._onHideUnderlay.bind(this);
    this._onShowUnderlay = this._onShowUnderlay.bind(this);
  }

  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }

  _onShowUnderlay() {
    this.setState({ pressStatus: true });
  }

  render() {
    switch (this.props.content.type) {
      case 'image': // TODO
      case 'text':
      default:
        return (
          <TouchableWithoutFeedback
            onPress={this.props.onPress}
            onPressIn={this._onShowUnderlay}
            onPressOut={this._onHideUnderlay}
            style={this.props.style}
          >
            <View
              style={[this.state.pressStatus ?
                [layout.buttons.button.pressed.button, {
                  width: 2 * this.props.radius,
                  height: 2 * this.props.radius,
                  maxWidth: 2 * this.props.radius,
                  maxHeight: 2 * this.props.radius,
                  borderRadius: this.props.radius
                }] : [layout.buttons.button.button, {
                  width: 2 * this.props.radius,
                  height: 2 * this.props.radius,
                  maxWidth: 2 * this.props.radius,
                  maxHeight: 2 * this.props.radius,
                  borderRadius: this.props.radius
                }]
                , this.props.style]}
            >
              <Text
                style={[this.state.pressStatus ?
                  layout.buttons.button.pressed.text : layout.buttons.button.text
                ]}
              >
                +
            </Text>
            </View>
          </TouchableWithoutFeedback>
        )
    }
  }
}