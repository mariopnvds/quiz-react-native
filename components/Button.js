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

    if (props.className) {
      switch (props.className) {
        case 'pill':
          this.state.styles = roundedStyles;
          break;
      }
    }

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
            style={this.state.pressStatus ?
              this.state.styles.textPress : this.state.styles.text
            }
          >
            {this.props.text}
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
    margin: layout.spacing.xs,
    backgroundColor: layout.colors.dark,
    elevation: 1
  },
  buttonPress: {
    margin: layout.spacing.xs,
    backgroundColor: layout.colors.bright
  }
});

const roundedStyles = StyleSheet.create({
  text: {
    color: layout.colors.bright,
    marginLeft: layout.spacing.md,
    marginRight: layout.spacing.md,
    marginTop: layout.spacing.sm,
    marginBottom: layout.spacing.sm,
    fontSize: layout.fontSizes.md,
  },
  textPress: {
    color: layout.colors.dark,
    marginLeft: layout.spacing.md,
    marginRight: layout.spacing.md,
    marginTop: layout.spacing.sm,
    marginBottom: layout.spacing.sm,
    fontSize: layout.fontSizes.md,
  },
  button: {
    margin: layout.spacing.xs,
    backgroundColor: layout.colors.dark,
    borderRadius: 100,
    elevation: 1
  },
  buttonPress: {
    margin: layout.spacing.xs,
    backgroundColor: layout.colors.bright,
    borderRadius: 100
  }
});