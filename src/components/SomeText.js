import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';


export default class SomeText extends Component {

  render() {
    return <Text style={styles.textStyle}>
    {this.props.name}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingBottom:20
  }
})