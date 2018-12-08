import React from 'react';

import { View, LayoutAnimation, NativeModules, StyleSheet, Dimensions } from 'react-native';

import CircleButton from './CircleButton';
import IconButton from './IconButton';
import { layout } from '../assets/layout';

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

const spacing = -55;

export default class NiceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    }

    this._onPress = this._onPress.bind(this);
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

  render() {
    return (
      <View style={this.props.style}>
        {
          // map imgs and onPress funcs
          this.props.options.map((opt, i) => {
            return (<IconButton
              image={opt.image}
              style={[{ left: this.state[i] }, styles.iconButton]}
              onPress={opt.onPress}
              key={i} />)
          })
        }
        <CircleButton style={styles.circleButton} onPress={this._onPress} />
      </View>
    );
  }
}

let { height, width } = Dimensions.get('window');

// gotta check out this damn thing
const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    height: 70,
    zIndex: 100
  },
  iconButton: {
    position: 'absolute',
    transform: [
      { translateY: 9 },
      { translateX: 0 }
    ],
    zIndex: 99
  }
});