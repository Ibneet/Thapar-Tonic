import React from 'react';
import { View, Text, StyleSheet,Image, Button } from 'react-native';
import SomeText from '../src/components/SomeText';

export default class HomeParent extends React.Component {

    static navigationOptions = {
        title: 'Thapar Tonic',
        headerLeft: null,
        gestureEnabled: false
        }
  render() {
    return(
      <View style={styles.container1}>
          <SomeText name='Parent Home Screen'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex:1, 
    flexDirection: 'row-reverse', 
    marginTop: 40
  }
})