import React from 'react';

import { View, StyleSheet } from 'react-native';

import Button from './Button';

import {layout} from '../assets/layout';

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
          text='Prev'
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
    alignItems: 'flex-start'
  }
});
