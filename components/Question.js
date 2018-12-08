import React from 'react';

import {View, Text, StyleSheet } from 'react-native';

import {layout} from '../assets/layout';

export default class Question extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={[layout.headers.h2, styles.title]}>
          Question {this.props.currentQuestion}
        </Text>
        <Text style={layout.text}>
          {this.props.question}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: layout.spacing.md
  },
  title: {
    marginTop: 0,
    marginBottom: 0
  }
});