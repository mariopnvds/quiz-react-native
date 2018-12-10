import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Dimensions, ActivityIndicator, StatusBar, Text, Platform } from 'react-native';
import { connect } from 'react-redux';

// Redux
import { questionAnswer, submit, fetchQuestions, changeQuestion, restart } from './redux/actions';

// Components
import Navbar from './components/Navbar';
import Game from './components/Game';
import NiceButton from './components/NiceButton';
import Button from './components/Button';

// Assets
import { layout } from './assets/layout';
const loadIcon = require('./assets/load.png');
const saveIcon = require('./assets/save.png');
const removeIcon = require('./assets/remove.png');

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
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

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
          <StatusBar style={styles.statusBar} backgroundColor={layout.colors.transparentPrimary} barStyle="light-content" />
          <View style={styles.body}>
            <Navbar style={styles.navbar} />
            <Text>Your score was {this.props.score}</Text>
            <Button
              text='RESET'
              type='pill'
              onPress={() => { this.props.dispatch(restart(this.props.questions.token)) }}
            />
          </View>
          <NiceButton options={icons} style={styles.niceButton} direction='down' />
        </View>
      )
    } else {
      if (this.props.questions.questions.length > 0 && !this.props.questions.isFetching) {
        return (
          <View style={styles.container}>
            <View style={styles.statusBar}>
              <StatusBar backgroundColor={layout.colors.transparentPrimary} barStyle="light-content" />
            </View>
            <View style={styles.body}>
              <Navbar style={styles.navbar} />
              <Game
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
              />
            </View>
            <NiceButton options={icons} style={styles.niceButton} direction='down' />
          </View>
        );
      }
      return (
        <View>
          <ActivityIndicator size="large" color={layout.colors.dark} />
        </View>
      )
    }
  }
}

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: layout.colors.background,
    flexDirection: 'column',
    zIndex: 0
  },
  body: {
    backgroundColor: layout.colors.background,
    height: height,
    zIndex: 1,
    flex: 1
  },
  niceButton: {
    position: 'absolute',
    top: 30 + STATUSBAR_HEIGHT,
    right: 10,
    zIndex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: layout.colors.transparentPrimary
  },
  navbar: {
    height: APPBAR_HEIGHT
  }
});

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(QuizScreen);