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

    if (props.type) {
      switch (props.type) {
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
      <View>
        <TouchableWithoutFeedback
          onPress={this.props.disabled ? undefined : this.props.onPress}
          onPressIn={this._onShowUnderlay}
          onPressOut={this._onHideUnderlay}
          style={this.props.style}
        >
          <View
            style={(this.state.pressStatus || this.props.disabled) ?
              this.state.styles.buttonPress : this.state.styles.button
            }
          >
            <Text
              style={(this.state.pressStatus || this.props.disabled) ?
                this.state.styles.textPress : this.state.styles.text
              }
            >
              {this.props.text}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
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
    fontSize: layout.fontSizes.md,
    fontFamily: layout.fontFamily
  },
  textPress: {
    color: layout.colors.dark,
    marginLeft: layout.spacing.md,
    marginRight: layout.spacing.md,
    marginTop: layout.spacing.sm,
    marginBottom: layout.spacing.sm,
    fontSize: layout.fontSizes.md,
    fontFamily: layout.fontFamily
  },
  button: {
    margin: layout.spacing.xs,
    backgroundColor: layout.colors.dark,
    elevation: 1,
    maxHeight: 48
  },
  buttonPress: {
    margin: layout.spacing.xs,
    backgroundColor: layout.colors.bright,
    maxHeight: 48
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
    fontFamily: layout.fontFamily
  },
  textPress: {
    color: layout.colors.dark,
    marginLeft: layout.spacing.md,
    marginRight: layout.spacing.md,
    marginTop: layout.spacing.sm,
    marginBottom: layout.spacing.sm,
    fontSize: layout.fontSizes.md,
    fontFamily: layout.fontFamily
  },
  button: {
    margin: layout.spacing.xs,
    backgroundColor: layout.colors.dark,
    borderRadius: 100,
    elevation: 1,
    maxHeight: 48
  },
  buttonPress: {
    margin: layout.spacing.xs,
    backgroundColor: layout.colors.bright,
    borderRadius: 100,
    maxHeight: 48
  }
});