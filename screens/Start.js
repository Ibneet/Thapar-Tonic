import React from 'react';
import { View, Text, StyleSheet,Image, Button } from 'react-native';
import SomeText from '../src/components/SomeText';

export default class Start extends React.Component {
  render() {
    return(
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image source={require('../src/Images/noimage.jpg')}
          style={{ width: 100, height: 100 }}/>
        </View>
        <View style={styles.container3 }>
          <SomeText name='Thapar Tonic'/>
          <View style={{paddingBottom: 10}}>
            <Button 
            title='Create New Account'
            onPress={() => {this.props.navigation.navigate('CreateNewAccount')}}
            />
          </View>
          <View style={{paddingBottom: 10}}>
            <Button 
            title='Login'
            onPress={() => {this.props.navigation.navigate('Login')}}
            />
          </View>
          <View style={{paddingBottom: 10}}>
            <Button 
            title='Over view'
            // onPress={() => {this.props.navigation.navigate('CreateNewAccount')}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex:1, 
    flexDirection: 'row-reverse', 
    marginTop: 40
  },
  container2: { 
    flex:1, 
    marginRight: 55 
  },
  container3: { 
    flex:2, 
    marginLeft: 140, 
    marginTop: 200,
    paddingBottom: 10 
  }
})