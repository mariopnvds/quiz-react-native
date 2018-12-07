import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GlobalState from './reducers'

import Button from '../components/Button'

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: {
        isFetching: false,
        didInvalidate: false,
        token: 'e2922fc0105402baef54',
        questions: []
      },
      timerId: 0,
      timeLeft: 90000,
      storageKey: '@P7_2018_IWEB:quiz'
    }

    this.configureStore = this.configureStore.bind(this);
    this.store = this.configureStore();
  }

  render() {
    return(
      <Provider store={this.store}>
        <Button text='Button'/>
      </Provider>
    );
  }

  configureStore() {
    return createStore(GlobalState, this.initialState);
  }
}