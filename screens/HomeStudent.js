import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import SomeText from '../src/components/SomeText';
import { Button } from 'native-base'
import * as firebase from 'firebase'

export default class HomeStudent extends React.Component {

    static navigationOptions = {
        title: 'Thapar Tonic',
        headerLeft: null,
        gestureEnabled: false
        }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if(authenticate) {
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName
        })
      }else {
        this.props.navigation.replace('Login')
      }
    })
  }   
  
  signOutUser =() => {
    firebase
    .auth()
    .signOut()
    .then(() => console.log('signOut'))
    .catch( error => alert(error.message) )
  }
        
  render() {
    return(
      <View style={styles.container1}>
          <SomeText name='Student Home Screen'/>
          <Button full rounded success
          onPress={() => {
            this.signOutUser()
          }}
          >
            <Text>SignOut</Text>  
          </Button> 
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