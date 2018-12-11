import React from 'react';
import { WebView, StyleSheet, Dimensions, Platform, View } from 'react-native';

import Sbar from '../components/Sbar';
import Navbar from '../components/Navbar';

import { layout } from '../assets/layout';

export default class WebScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Sbar />
        <Navbar />
        <WebView source={{ uri: this.props.navigation.state.params.href }}
          style={styles.body} />
      </View>
    )
  }
}

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: layout.colors.background,
    flexDirection: 'column',
    zIndex: 0
  },
  body: {
    backgroundColor: layout.colors.background,
    height: height,
    zIndex: 1,
    flex: 1
  }
});