import React from 'react';
import {View} from 'react-native';
import { StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

// Redux
import {questionAnswer, submit, fetchQuestions, changeQuestion} from './redux/actions';

// Components
import Navbar from './components/Navbar';
import Game from './components/Game';
import NiceButton from './components/NiceButton';

// Assets
import {layout} from './assets/layout';
const loadIcon = require('./assets/load.png');
const saveIcon = require('./assets/save.png');
const removeIcon = require('./assets/remove.png');

class QuizScreen extends React.Component {

  render() {

    if (this.props.questions.questions.length > 0 && !this.props.questions.isFetching) {
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

      return (
        <View style={styles.container}>
          <View style={styles.body}>
            <Navbar />
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
          <NiceButton options={icons} style={styles.niceButton} />
        </View>
      );
    } else if (!this.props.questions.isFetching && this.props.questions.questions.length === 0) {
      this.props.dispatch(fetchQuestions(this.props.questions.token));
    }
    return (
      <View>
        <ActivityIndicator size="large" color={layout.colors.dark} />
      </View>
    )
  }
}

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: layout.colors.primary,
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
    top: height - 115,
    left: width - 85
  }
});

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(QuizScreen);