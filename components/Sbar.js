import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

import {layout} from '../assets/layout';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export default class Sbar extends React.Component {
  render() {
    return (
      <View style={{
        height: STATUSBAR_HEIGHT,
        backgroundColor: layout.colors.transparentPrimary
      }}>
        <StatusBar backgroundColor={layout.colors.transparentPrimary} barStyle="light-content" />
      </View>
    )
  }
}