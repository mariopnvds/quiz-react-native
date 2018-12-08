import { combineReducers } from 'redux';
import {
  QUESTION_ANSWER, SUBMIT, INIT_QUESTIONS, CHANGE_QUESTION,
  RESTART, RECEIVE_QUESTIONS, INVALIDATE_QUESTIONS
} from './actions'

import { questions as sampleQuestions } from '../assets/mock-data'

function score(state = 0, action = {}) {
  switch (action.type) {
    case SUBMIT:
      state = 0;
      action.payload.map((question) => {
        if (question.userAnswer === question.answer) state++
      })
      return state;
    case RESTART:
      return 0;
    default:
      return state;
  }
}

function finished(state = false, action = {}) {
  switch (action.type) {
    case SUBMIT:
      return true;
    case RESTART:
      return false;
    default:
      return state;
  }
}

function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    case CHANGE_QUESTION:
      if (action.payload.indication === "NEXT") {
        if (action.payload.index === 9) return action.payload.index;
        let newQuestion = action.payload.index + 1;
        return newQuestion;
      } else if (action.payload.indication === "PREV") {
        if (action.payload.index === 0) return action.payload.index;
        let newQuestion = action.payload.index - 1;
        return newQuestion;
      }
      break;
    case RESTART:
      return 0;
    default:
      return state;
  }
}

function questions(state = {
  isFetching: false,
  didInvalidate: false,
  questions: [],
  token: ''
}, action = {}) {
  switch (action.type) {
    case QUESTION_ANSWER:
      // Update questions array adding the user answer
      let updatedQuestions = [];
      state.questions.map((question, i) => {
        updatedQuestions.push({
          ...question,
          // si i se pone la respuesta, si no se deja la que había o undefinded si nunca se ha respondido
          userAnswer: (action.payload.index === i && !action.payload.finished) ? action.payload.answer : question.userAnswer
        });
      });
      // Update just questions field
      return Object.assign({}, state, { questions: updatedQuestions })
    case INIT_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      })
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        questions: action.payload.json
      })
    case INVALIDATE_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true,
        questions: [...sampleQuestions]
      })
    case RESTART:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        questions: []
      })
    default:
      return state;
  }
}

const GlobalState = (combineReducers({
  score,
  finished,
  currentQuestion,
  questions
}));

export default GlobalState;