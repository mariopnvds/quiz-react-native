import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';

// Components
import Button from './Button';

// Assets
import {layout} from '../assets/layout';

export default class Actionbar extends React.Component {
  constructor(props) {
        super(props);
        this.saveData = this.saveData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.loadData = this.loadData.bind(this);
    }
  async saveData(){
      try {
          AsyncStorage.setItem('@P7_2018_IWEB:quiz', JSON.stringify(this.props.questions));
          alert('Data successfully saved')
      } catch (e) {
          alert('There was a problem saving data')
      }
  };
  async loadData(){
      try{
          let quests = await AsyncStorage.getItem('@P7_2018_IWEB:quiz');
          if(quests === null){
              alert('Empty data')
          } else {
              let parsed = JSON.parse(quests);
              this.props.onInit()
              this.props.onReceive(parsed);
              alert('Data successfully loaded')
          }
      } catch (e) {
          //alert('There was a problem loading data');}
          alert(e.message);
      }
  };
  async deleteData(){
      try {
          await AsyncStorage.removeItem('@P7_2018_IWEB:quiz');
          alert("Data successfully deleted")
      } catch (e) {
          alert('There was a problem deleting data');
      }
  };
  render() {
    return (
      <View>
          <View style={[styles.container, this.props.style]}>
            <Button
              text='Submit'
              type='pill'
              onPress={() => {this.props.onSubmit()}}
            />
            <Button
              text='Previous'
              type='pill'
              onPress={() => {this.props.onChangeQuestion('PREV')}}
              disabled={this.props.currentQuestion === 0 ? true : false}
            />
            <Button
              text='Next'
              type='pill'
              onPress={() => {this.props.onChangeQuestion('NEXT')}}
              disabled={this.props.currentQuestion === 9 ? true : false}
            />
          </View>
          <View style={[styles.container, this.props.style]}>
            <Button
              text='Save'
              type='pill'
              onPress={() => {this.saveData()}}
              />
            <Button
              text='Load'
              type='pill'
              onPress={() => {this.loadData()}}
            />
            <Button
              text='Delete'
              type='pill'
              onPress={() => {this.deleteData()}}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: layout.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
