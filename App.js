import React from 'react';

//import ReduxProvider from './ReduxProvider';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import { StyleSheet, View, Dimensions } from 'react-native'
import { layout } from './assets/layout';
import NiceButton from './components/NiceButton';

const loadIcon = require('./assets/load.png');
const saveIcon = require('./assets/save.png');
const removeIcon = require('./assets/remove.png');

export default class App extends React.Component {

  render() {

    let icons = [
      {
        image: removeIcon,
        onPress: () => {alert('r')}
      },
      {
        image: loadIcon,
        onPress: () => {alert('l')}
      },
      {
        image: saveIcon,
        onPress: () => {alert('s')}
      },
    ]

    return (
      //<ReduxProvider/>
      
      <NiceButton options={icons}/>
    );
  }
}

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: layout.colors.primary,
    flexDirection: 'column',
    zIndex: 0
  },
  body: {
    backgroundColor: layout.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    zIndex: 1
  },
  circleButton: {
    position: 'absolute',
    height: 70,
    transform: [
      { translateY: height - 95 },
      { translateX: width - 95 }
    ],
    zIndex: 2
  }
});
