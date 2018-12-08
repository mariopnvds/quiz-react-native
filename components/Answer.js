import React from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

import {layout} from '../assets/layout';

export default class Answer extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          style={layout.textInput}
          onChangeText={(text) => {this.props.onQuestionAnswer(text)}}
          value={this.props.userAnswer ? this.props.userAnswer : ''}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: layout.spacing.md
  }
})