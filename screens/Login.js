import React from 'react';
import { View, Text, StyleSheet,Image, Picker, ScrollView, TextInput } from 'react-native';
import Student from './Student';
import * as firebase from 'firebase'
import { Button } from 'native-base'

export default class Login extends React.Component {

    static navigationOptions = {
    title: 'Thapar Tonic'
    }
    constructor(props){
        super(props);
        this.state = {
            email: '',
            Identity: '',
            password: ''
        }
    }

    signInUser = (email, password, Identity) => {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        if(Identity === 'Student'){
          this.props.navigation.replace('HomeStudent')
        }else if(Identity === 'Teacher'){
          this.props.navigation.replace('HomeTeacher')
        } else if(Identity === 'Parent'){
          this.props.navigation.replace('HomeParent')
        } else {
          alert('Select option')
        }

      })
      .catch(error => {
        alert(error.message)
      })
    }

  render() {
    return(
      <ScrollView>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image source={require('../assets/noimage.jpg')}
          style={{ width: 100, height: 100 }}/>
        </View>
          
            <Picker
                selectedValue={this.state.Identity}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({Identity: itemValue})
                }>
                <Picker.Item label="Select" value="" />
                <Picker.Item label="Student" value="Student" />
                <Picker.Item label="Teacher" value="Teacher" />
                <Picker.Item label="Parent" value="Parent" />
            </Picker>

            <TextInput style = {styles.input}
                keyboardType= 'email-address'
                placeholder= 'Email Address'
                value= {this.state.email}
                selectionColor='#FFF'
                onChangeText={email =>
                    this.setState({
                        email
                    })
                }
            />
            
            <TextInput 
                
                secureTextEntry={true} 
                style = {styles.input}
                selectionColor='#FFF'
                keyboardType= 'default'
                placeholder= 'Password'
                value= {this.state.password}
                onChangeText={password =>
                    this.setState({
                        password
                    })
                }
            />
           
            <Button 
            full
            rounded
            onPress={() => {this.signInUser(
              this.state.email,
              this.state.password,
              this.state.Identity
            )}}
            >
              <Text >Login</Text>
            </Button>
           
        
          
        
      </View>
      <View style={styles.empty}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#333945',
    margin: 10,
    padding: 8,
    borderRadius: 14,
    borderColor: '#fff',
    borderWidth:1,
    fontSize: 18,
    color: '#fff'
  },
container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333945',
    padding:8
},
  picker: {
      height: 50,
      width: 350,
      paddingBottom: 5,
      color: '#fff',
      fontSize: 18

  },
  container2: { 
    flex:1,
    marginRight: 55,
    marginLeft: 275,
    marginBottom: 100
  },
  empty: {
    height: 300,
    backgroundColor: '#333945'
  },
  button: {
    margin: 10,
    paddingHorizontal: 50,
    borderColor: '#111212',
    borderWidth:1
 },
 text: {
   fontWeight: 'bold',
   color: '#fff',
   fontSize: 18
 }

})