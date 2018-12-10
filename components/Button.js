import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native';

// Assets
import { layout } from '../assets/layout';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressStatus: false,
      styles: layout.buttons.button
    };

    if (props.type) {
      switch (props.type) {
        case 'pill':
          this.state.styles = layout.buttons.pill;
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
          onPress={this.props.disabled ? undefined : this.props.onPress}
          onPressIn={this._onShowUnderlay}
          onPressOut={this._onHideUnderlay}
          style={this.props.style}
        >
          <View
            style={(this.state.pressStatus || this.props.disabled) ?
              this.state.styles.pressed.button : this.state.styles.button
            }
          >
            <Text
              style={(this.state.pressStatus || this.props.disabled) ?
                this.state.styles.pressed.text : this.state.styles.text
              }
            >
              {this.props.text}
            </Text>
          </View>
        </TouchableWithoutFeedback>
    )
  }
}