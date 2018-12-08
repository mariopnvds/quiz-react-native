import React from 'react';

import {View, Image, StyleSheet} from 'react-native';
import { layout } from '../assets/layout';

export default class QuestionAttachment extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image 
          style={styles.image}
          source={{uri: this.props.url}} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: layout.spacing.md
  },
  image: {
    flex: 1,
  }
});