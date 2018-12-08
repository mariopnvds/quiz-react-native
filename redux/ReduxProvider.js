import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';
//const loggerMiddleware = createLogger();

// Redux
import GlobalState from './reducers'

// Components
import QuizScreen from '../QuizScreen';

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
      }
    }

    this.configureStore = this.configureStore.bind(this);
    this.store = this.configureStore();
  }

  render() {
      return (
        <Provider store={this.store}>
          <QuizScreen/>
        </Provider>
      );
  }

  configureStore() {
    return createStore(GlobalState, this.initialState,
      applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
      ));
  }
}