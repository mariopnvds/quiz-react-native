import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import QuestionAttachment from './QuestionAttachment';
import Question from './Question';
import Answer from './Answer';

// Assets
import {layout} from '../assets/layout';

export default class Content extends React.Component {
  render() {
    return (
      <View style={this.props.style}>
        <QuestionAttachment 
          url={this.props.question.attachment.url} 
          style={styles.attachment}
        />
        <Question 
          style={styles.question}
          question={this.props.question.question}
          currentQuestion={this.props.currentQuestion}   
        />
        <Answer
          style={styles.answer}
          userAnswer={this.props.question.userAnswer}
          onQuestionAnswer={this.props.onQuestionAnswer} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: layout.spacing.md
  },
  attachment: {
    flex: 2
  },
  question: {
    flex: 1,
    alignItems: 'center'
  },
  answer: {
    flex: 1
  }
});