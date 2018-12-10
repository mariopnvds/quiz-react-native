import React from 'react';
import { View, LayoutAnimation, NativeModules } from 'react-native';

// Components
import CircleButton from './CircleButton';
import IconButton from './IconButton';

// Assets
import { layout } from '../assets/layout';

// Enable animations
const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

// show/hide animation
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

let spacing = -55; // Spacing between iconButtons

export default class NiceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      direction: '',
      radius: 32 // Pair number pls
    }

    this._onPress = this._onPress.bind(this);
    this._setStyle = this._setStyle.bind(this);
  }

  // indicate on self state what is the direction (yes, this could be bypassed)
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

  // Huge hedeache here
  _setStyle(i) {
    switch (this.state.direction) {
      case 'up':
        return [
          { top: this.state[i] || 5 },  // Magic number. Yea, I don't like it either
          layout.niceButton.iconButton] 
      case 'down':
        return [
          { top: ((2 * this.state.radius - layout.iconButton.button.height) - (this.state[i] || 5)) },
          layout.niceButton.iconButton]
      case 'right':
        return [
          {
            left: - (layout.iconButton.button.width - this.state.radius) - this.state[i],
            top: (this.state.radius - layout.iconButton.button.height / 2) + 5
          },
          layout.niceButton.iconButton]
      default:
        return [
          {
            left: - this.state.radius + this.state[i],
            top: (this.state.radius - layout.iconButton.button.height / 2) + 5
          },
          layout.niceButton.iconButton
        ]
    }
  }

  render() {

    return (
      <View style={[layout.niceButton.view, this.props.style]}>
        {
          // map imgs and onPress funcs to each IconButton
          this.props.options.map((opt, i) => {
            return (<IconButton
              image={opt.image}
              style={this._setStyle(i)}
              onPress={opt.onPress}
              key={i} />)
          })
        }
        <CircleButton
          content={this.props.content}
          style={layout.niceButton.circleButton}
          onPress={this._onPress}
          radius={this.state.radius}
        />
      </View>
    );
  }
}