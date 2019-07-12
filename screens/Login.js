import React from 'react';
import { View, Text, StyleSheet,Image, Button, Picker, TextInput, ScrollView,TouchableWithoutFeedback } from 'react-native';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            Identity: '',
            inputPassword: ''
        }
    }

  render() {
    return(
      <ScrollView>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image source={require('../src/Images/noimage.jpg')}
          style={{ width: 100, height: 100 }}/>
        </View>
        <View style={styles.container3}>
            
            <Picker
                selectedValue={this.state.Identity}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({Identity: itemValue})
                }>
                <Picker.Item label="Student" value="Student" />
                <Picker.Item label="Teacher" value="Teacher" />
                <Picker.Item label="Parent" value="Parent" />
            </Picker>
        <View style={styles.inputContainer}>        
            <TextInput style = {styles.input}
                keyboardType= 'email-address'
                placeholder= 'Email Address'
                value= {this.state.inputValue}
                selectionColor='#FFF'
                onChangeText={inputValue =>
                    this.setState({
                        inputValue
                    })
                }
            />
        </View>
        <View style={styles.inputContainer}>        
            <TextInput 
                
                secureTextEntry={true} 
                style = {styles.input}
                selectionColor='#FFF'
                keyboardType= 'default'
                placeholder= 'Password'
                value= {this.state.inputPassword}
                onChangeText={inputPassword =>
                    this.setState({
                        inputPassword
                    })
                }
            />
        </View>
        <View style={{paddingTop: 10, width:210, height:60}}>  
            <Button 
            title='Log In'
            // onPress={() => {this.props.navigation.navigate('CreateNewAccount')}}
            />
        </View>

        </View>
        
      </View>
      <View style={styles.empty}></View>
      </ScrollView>
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
    flex:2, 
    marginRight: 55,
    marginLeft:80 

  },
  container3: { 
    flex:2, 
    marginLeft: 70, 
    marginTop: 200,
    paddingBottom: 10 
  },
  input: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignContent: 'center'
  },
  picker: {
      height: 50,
      width: 200,
      paddingBottom: 5
  },
  inputContainer: {
    height: 50,
    width: 210,
    borderEndColor: 'black',
    backgroundColor: '#EAF0F1',
    borderWidth: 2,
    borderRadius:5

  },
  empty: {
    height: 300,
    backgroundColor: '#fff'
  }

})