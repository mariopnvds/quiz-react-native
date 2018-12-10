import React from 'react';

import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

import { layout } from '../assets/layout';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressStatus: false,
      styles: defaultStyles
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
    return (
      <TouchableWithoutFeedback
        onPress={this.props.onPress}
        onPressIn={this._onShowUnderlay}
        onPressOut={this._onHideUnderlay}
      >
        <View
          style={[this.state.pressStatus ?
            this.state.styles.buttonPress : this.state.styles.button
          , this.props.style]}
        >
          <Text
            style={[this.state.pressStatus ?
              this.state.styles.textPress : this.state.styles.text
            ]}
          >
            +
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const defaultStyles = StyleSheet.create({
  text: {
    color: layout.colors.bright,
    marginLeft: layout.spacing.md,
    marginRight: layout.spacing.md,
    marginTop: layout.spacing.sm,
    marginBottom: layout.spacing.sm,
    fontSize: layout.fontSizes.md
  },
  textPress: {
    color: layout.colors.dark,
    marginLeft: layout.spacing.md,
    marginRight: layout.spacing.md,
    marginTop: layout.spacing.sm,
    marginBottom: layout.spacing.sm,
    fontSize: layout.fontSizes.md
  },
  button: {
    borderWidth: 0,
    borderColor: layout.colors.background,
    backgroundColor: layout.colors.dark,
    elevation: 1,
    maxHeight: 70,
    width: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  buttonPress: {
    borderWidth: 0,
    borderColor: layout.colors.dark,
    backgroundColor: layout.colors.bright,
    maxHeight: 70,
    width: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }
});