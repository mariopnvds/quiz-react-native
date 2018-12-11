import React from 'react';

import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';

import Button from './Button';

import { layout } from '../assets/layout';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: (<Image />)
    }

    if (props.img) {
      if (props.img[0] === '.') {
        this.state.img = (<Image
          source={props.img}
          style={styles.img}
          resizeMode='contain'
        />);
      } else {
        this.state.img = (<Image
          source={{ uri: props.img }}
          style={styles.img}
          resizeMode='contain'
        />);
      }
    }
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.top}>
          {this.state.img}
        </View>
        <View style={styles.middle}>
          <Text>
            {this.props.description}
          </Text>
        </View>
        <View style={styles.bottom}>
          <Button text='Ver Perfil' />
        </View>
      </View>
    )
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: layout.colors.background,
    margin: layout.spacing.xs,
    ...layout.elevations[2]
  },
  top: {
    flex: 3,
    padding: layout.spacing.xs,
    justifyContent: 'center'
  },
  img: {
    height: 400 > width ? width : 400
  },
  middle: {
    flex: 2,
    padding: layout.spacing.xs,
    ...layout.elevations[1]
  },
  bottom: {
    flex: 1,
    padding: layout.spacing.xs,
    flexDirection: 'row'
  }
})