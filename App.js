import React from 'react';

import ReduxProvider from './redux/ReduxProvider';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Index: {
    screen: HomeScreen
  },
  Quiz: {
    screen: ReduxProvider
  }
}, {
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
