import React from 'react';
import { View, StyleSheet } from 'react-native';

// Components
import Button from './Button';
import NiceButton from './NiceButton';

// Assets
import {layout} from '../assets/layout';

const loadIcon = require('../assets/load.png');
const saveIcon = require('../assets/save.png');
const removeIcon = require('../assets/remove.png');

let icons = [
  {
    image: removeIcon,
    onPress: () => { alert('r') } // To be changed by corresponding action
  },
  {
    image: loadIcon,
    onPress: () => { alert('l') } // To be changed by corresponding action
  },
  {
    image: saveIcon,
    onPress: () => { alert('s') } // To be changed by corresponding action
  },
]

export default class Actionbar extends React.Component {
  
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Button
          text='Submit'
          type='pill'
          onPress={() => {this.props.onSubmit()}}
        />
        <Button
          text='Previous'
          type='pill'
          onPress={() => {this.props.onChangeQuestion('PREV')}}
          disabled={this.props.currentQuestion === 0 ? true : false}
        />
        <Button
          text='Next'
          type='pill'
          onPress={() => {this.props.onChangeQuestion('NEXT')}}
          disabled={this.props.currentQuestion === 9 ? true : false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: layout.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
