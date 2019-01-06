import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Dimensions, ActivityIndicator, Text, Platform } from 'react-native';
import { connect } from 'react-redux';

// Redux
import {
  questionAnswer,
  submit,
  fetchQuestions,
  changeQuestion,
  restart,
  initQuestions,
  receiveQuestions
} from '../redux/actions';

// Components
import Navbar from '../components/Navbar';
import Game from '../components/Game';
import Button from '../components/Button';
import Sbar from '../components/Sbar';

// Assets
import { layout } from '../assets/layout';
const loadIcon = require('../assets/load.png');
const saveIcon = require('../assets/save.png');
const removeIcon = require('../assets/remove.png');

let icons = [
  {
    image: removeIcon,
    onPress: () => { alert('r') } // To be changed by corresponding action
  },
  {
    image: loadIcon,
    onPress: () => { alert('l') } // To be changed by corresponding action
  },
  {
    image: saveIcon,
    onPress: () => { alert('s') } // To be changed by corresponding action
  },
]

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

class QuizScreen extends React.Component {

  componentDidMount() {
    if (!this.props.questions.isFetching && this.props.questions.questions.length === 0) {
      this.props.dispatch(fetchQuestions(this.props.questions.token));
    }
  }

  componentDidUpdate() {
    if (!this.props.questions.isFetching && this.props.questions.questions.length === 0) {
      this.props.dispatch(fetchQuestions(this.props.questions.token));
    }
  }

  render() {
    if (this.props.finished) {
      return (
        <View style={styles.container}>
          <Sbar />
          <View style={styles.body}>
            <Navbar />
            <Text>Your score was {this.props.score}</Text>
            <Button
              text='RESET'
              type='pill'
              onPress={() => { this.props.dispatch(restart(this.props.questions.token)) }}
            />
          </View>
        </View>
      )
    } else {
      if (this.props.questions.questions.length > 0 && !this.props.questions.isFetching) {
        return (
          <View style={styles.container}>
            <Sbar />
            <Navbar />
            <View style={styles.body}>
              <Game
                questions={this.props.questions.questions}
                token={this.props.questions.token}
                question={this.props.questions.questions[this.props.currentQuestion]}
                currentQuestion={this.props.currentQuestion}
                onQuestionAnswer={(answer) => {
                  this.props.dispatch(questionAnswer(this.props.currentQuestion, answer, this.props.finished));
                }}
                onChangeQuestion={(indication) => {
                  this.props.dispatch(changeQuestion(this.props.currentQuestion, indication));
                }}
                onSubmit={() => {
                  this.props.dispatch(submit(this.props.questions.questions));
                }}
                onRestart={() => {
                  this.props.dispatch(restart(this.props.questions.token));
                }}
                onInit={() => {
                  this.props.dispatch(initQuestions(this.props.questions.token));
                }}
                onReceive={(quests) => {
                  this.props.dispatch(receiveQuestions(this.props.questions.token, quests));
                }}
              />
            </View>
          </View>
        );
      }
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <ActivityIndicator size="large" color={layout.colors.dark} style={{ transform: [{ translateY: height / 2 }] }} />
        </View>
      )
    }
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
    flex: 1,
    zIndex: 0
  },
  niceButton: {
    top: 20 + STATUSBAR_HEIGHT,
    right: 45
  }
});

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(QuizScreen);