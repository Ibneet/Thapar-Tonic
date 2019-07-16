import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import SomeText from '../src/components/SomeText';
import { Button } from 'native-base'
import { LinearGradient } from 'expo'

export default class CreateNewAccount extends React.Component {
  render() {
    return(
      <LinearGradient colors={['#2F363F','#F5BCBA','#2B2B52']} style={styles.container1}>
        <View style={styles.container2}>
          <Image source={require('../assets/noimage.jpg')}
          style={{ width: 100, height: 100 }}/>
        </View>
        <View style={{marginBottom:180, flex: 1, alignItems:'center', justifyContent: 'center'}}>
          <SomeText name='Who are you'/>
          
            <Button 
            full
            rounded
            style={styles.button}
            onPress={() => {this.props.navigation.navigate('Student')}}
            >
              <Text style={styles.text}>Student</Text>
            </Button>  
         
          
            <Button 
            full
            rounded
            style={styles.button}
            onPress={() => {this.props.navigation.navigate('TeacherSignup')}}
            >
              <Text style={styles.text}>Teacher</Text>
            </Button>
          
          
            <Button 
            full 
            rounded
            style={styles.button}
            onPress={() => {this.props.navigation.navigate('ParentSignup')}}
            >
              <Text style={styles.text}>Parent</Text>
            </Button>
            </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:8,
  },
  container2: { 
    flex:1,
    marginRight: 55,
    marginLeft: 275,
  },
  button: {
      margin: 10,
      paddingHorizontal: 90,
      borderColor: '#111212',
      borderWidth:1
   },
   text: {
     fontWeight: 'bold',
     color: '#fff',
     fontSize: 18
   }
  
})