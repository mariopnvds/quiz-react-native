import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import Content from './Content';
import Actionbar from './Actionbar';

// Assets
import {layout} from '../assets/layout';

export default class Game extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Content 
          style={styles.content} 
          question={this.props.question}
          currentQuestion={this.props.currentQuestion}
          onQuestionAnswer={this.props.onQuestionAnswer}
        />
        <Actionbar
          questions={this.props.questions}
          style={styles.actionbar}
          onChangeQuestion={this.props.onChangeQuestion}
          onSubmit={this.props.onSubmit}
          onInit={this.props.onInit}
          onReceive={this.props.onReceive}
          onRestart={this.props.onRestart}
          currentQuestion={this.props.currentQuestion}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 6
  },
  actionbar: {
    flexGrow: 1,
    alignItems: 'center'
  }
});