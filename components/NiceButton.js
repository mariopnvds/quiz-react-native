import React from 'react';

import { View, LayoutAnimation, NativeModules, StyleSheet } from 'react-native';

import CircleButton from './CircleButton';
import IconButton from './IconButton';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

let CustomAnimation = {
  duration: 500,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 1
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 1
  }
};

let spacing = -55;

export default class NiceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      direction: ''
    }

    this._onPress = this._onPress.bind(this);
    this._setStyle = this._setStyle.bind(this);
  }

  componentDidMount() {
    if (this.props.direction) {
      switch (this.props.direction) {
        case 'up':
          this.setState({ direction: 'up' });
          break;
        case 'down':
          this.setState({ direction: 'down' });
          break;
        case 'right':
          this.setState({ direction: 'right' });
          break;
        default:
          break;
      }
    }
  }

  _onPress() {
    // show/hide buttons nicely
    if (this.state.pressed) {
      if (this.props.options) {
        for (let opt in this.props.options) {
          LayoutAnimation.configureNext(CustomAnimation);
          this.setState({ [opt]: 0 });
        }
      }
      this.setState({ pressed: false });
    } else {
      if (this.props.options) {
        let top = spacing;
        for (let opt in this.props.options) {
          LayoutAnimation.configureNext(CustomAnimation);
          this.setState({ [opt]: top });
          top += spacing;
        }
      }
      this.setState({ pressed: true });
    }
  }

  _setStyle(i) {
    switch (this.state.direction) {
      case 'up':
        return [
          { top: this.state[i] }, 
          styles.iconButton,
          {
            transform: [
              { translateY: 0 },
              { translateX: 10 }
            ]
          }]
      case 'down':
      spacing = spacing * (-1);
        return [
          { top: this.state[i] }, 
          styles.iconButton,
          {
            transform: [
              { translateY: 20 },
              { translateX: 10 }
            ]
          }]
      case 'right':
      spacing = spacing * (-1);
        return [
          { left: this.state[i] }, 
          styles.iconButton,
          {
            transform: [
              { translateY: 10 },
              { translateX: 20 }
            ]
          }]
      default:
        return [
          { left: this.state[i] }, 
          styles.iconButton,
          {
            transform: [
              { translateY: 10 },
              { translateX: 0 }
            ]
          }]
    }
  }

  render() {

    return (
      <View style={this.props.style}>
        {
          // map imgs and onPress funcs
          this.props.options.map((opt, i) => {
            return (<IconButton
              image={opt.image}
              style={this._setStyle(i)}
              onPress={opt.onPress}
              key={i} />)
          })
        }
        <CircleButton style={styles.circleButton} onPress={this._onPress} />
      </View>
    );
  }
}

// gotta check out this damn thing
const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    height: 70,
    zIndex: 100
  },
  iconButton: {
    position: 'absolute',
    zIndex: 99
  }
});