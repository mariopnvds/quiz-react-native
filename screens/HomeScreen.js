import React from 'react';
import { ScrollView, StyleSheet, Dimensions, Platform, View } from 'react-native';

import Button from '../components/Button';
import Sbar from '../components/Sbar';
import Navbar from '../components/Navbar';

import { layout } from '../assets/layout';
import Card from '../components/Card';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Sbar />
        <Navbar />
        <ScrollView style={styles.body}>
          <Card 
            img='https://media.licdn.com/dms/image/C5603AQGIO6KFdi7zBA/profile-displayphoto-shrink_200_200/0?e=1550102400&v=beta&t=kuhcB1A_UEYG4Wb_ZU6DRScCt6svDf0P32kMrAAcyUE'
            description='Pablo Caraballo Llorente, Telecom. Engineering Student @ ETSIT, UPM'
            onPress={() => navigate('Web', {href: 'https://github.com/Paleloser'})}
            />
          <Card 
            img='https://media.licdn.com/dms/image/C5603AQF6coDBBF-Ifg/profile-displayphoto-shrink_800_800/0?e=1550102400&v=beta&t=X1X25v_EivVjZPrKfD6MWagyHBxIHYXntN_VZ7fLt9k'
            description='Mario Penavades Suárez, Telecom. Engineering Student @ ETSIT, UPM'
            onPress={() => navigate('Web', {href: 'https://github.com/mariopnvds'})}
            />
          <Button
            text='Empezar.'
            onPress={() => navigate('Quiz')}
          />
        </ScrollView>
      </View>
    )
  }
}

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height - 40,
    width: width,
    backgroundColor: layout.colors.background,
    flexDirection: 'column',
    zIndex: 0
  },
  body: {
    backgroundColor: layout.colors.background,
    height: height + 100,
    zIndex: 1,
    flex: 1
  }
});