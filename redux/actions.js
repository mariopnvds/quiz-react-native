import fetch from 'cross-fetch'

export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const INVALIDATE_QUESTIONS = 'INVALIDATE_QUESTIONS';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const RESTART = 'RESTART';

export function questionAnswer(index, answer, finished) {
  return {
    type: QUESTION_ANSWER,
    payload: {
      index,
      answer,
      finished
    }
  }
}

export function submit(questions) {
  return {
    type: SUBMIT,
    payload: [
      ...questions
    ]
  }
}

// Called by fetchQuestions when we make the query
export function initQuestions(token) {
  return {
    type: INIT_QUESTIONS,
    payload: {
      token
    }
  }
}

// Called by fetchQuestions when we recieve a 200
export function receiveQuestions(token, json) {
  return {
    type: RECEIVE_QUESTIONS,
    payload: {
      token,
      json
    }
  }
}

// Called by fetchQuestions when there's an error
export function invalidateQuestions(token, err) {
  return {
    type: INVALIDATE_QUESTIONS,
    payload: {
      token,
      err
    }
  }
}

// Handles the download of the quizzes. It should be called on the first load
export function fetchQuestions(token) {
  return (dispatch) => {
    dispatch(initQuestions(token));

    return fetch(`https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=${token}`)
      .then(
        res => res.json(),
        err => dispatch(invalidateQuestions(token, err))
      )
      .then(
        json => dispatch(receiveQuestions(token, json))
      )
  }
}

export function changeQuestion(index, indication) {
  return {
    type: CHANGE_QUESTION,
    payload: {
      index,
      indication
    }
  }
}

// Restarts the scenario, it will call fetch, which will handle the quizzes side while reset inits the rest
export function restart(token) {
  return {
    type: RESTART
  }
}