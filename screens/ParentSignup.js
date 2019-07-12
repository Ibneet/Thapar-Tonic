import React from 'react';
import { View, Text, StyleSheet,Image, Button, TextInput,TouchableOpacity,ScrollView, KeyboardAvoidingView } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Entypo } from '@expo/vector-icons'

export default class ParentSignup extends React.Component {

    static navigationOption = {
        title: 'Thapar Tonic'
    }

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            Identity: '',
            phone:'',
            inputPassword: '',
            date:"1999-06-06",
            email:'',
            roll:''
        }
    }

  render() {

    let photo = this.props.navigation.getParam('photo', 'empty')

    return(
        <KeyboardAvoidingView behavior='height' enabled>
        <ScrollView>
            <View style={styles.container1}>
                <Text>*Fill up the following details.</Text>
                <View style={[styles.imageHolder]}>
                <Image 
                resizeMode = 'center'
                style={{height:101,width:101,alignSelf:'center'}}
                source={
                    photo === 'empty'? require('../assets/parent.jpg') : photo
                }
                />
                </View>
                
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    this.props.navigation.navigate('CameraParent')
                }}>
                    <Entypo 
                    name='camera'
                    size={30}
                    />
                </TouchableOpacity>
                
                
                    <TextInput style = {styles.input}
                            keyboardType= 'default'
                            placeholder= 'Name'
                            value= {this.state.inputValue}
                            selectionColor='#FFF'
                            onChangeText={inputValue =>
                                this.setState({
                                    inputValue
                                })
                            }
                        />
                        <TextInput style = {styles.input}
                            keyboardType= 'numeric'
                            placeholder= 'Roll Number'
                            value= {this.state.roll}
                            selectionColor='#FFF'
                            onChangeText={roll =>
                                this.setState({
                                    roll
                                })
                            }
                        />
                            
                        <TextInput 
                            style = {styles.input}
                            selectionColor='#FFF'
                            keyboardType= 'numeric'
                            placeholder= 'Phone Number'
                            value= {this.state.phone}
                            onChangeText={phone =>
                                this.setState({
                                    phone
                                })
                            }
                        />
                
                    <DatePicker
                        style={styles.input}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="1950-01-01"
                        maxDate='3000-12-31'
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'relative'
                            
                        },
                        dateInput: {
                            marginLeft: 0
                        }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                        />  

                        <TextInput style = {styles.input}
                            keyboardType= 'email-address'
                            placeholder= 'Email'
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
                            value= {this.state.inputPassword}
                            onChangeText={inputPassword =>
                                this.setState({
                                    inputPassword
                                })
                            }
                        />
                
                        
                    
                    
                    <View style={styles.button}>  
                        <Button 
                        title='Submit'
                        // onPress={() => {this.props.navigation.navigate('CreateNewAccount')}}
                        />
                    </View>
                </View>
                <View style={styles.empty}></View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        borderRadius: 14,
        borderColor: '#111212',
        borderWidth:1
      },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
  inputContainer: {
    height: 50,
    width: 210,
    borderEndColor: 'black',
    backgroundColor: '#EAF0F1',
    borderWidth: 2,
    borderRadius:5
  },
  imageHolder: {
    height:100,
    width:100,
    borderColor:'black',
    borderWidth:2,
    borderRadius:50,
    overflow: 'hidden',
    justifyContent:'center'
  },
  imageButton: {
      height: 40,
      width: 40
  },
  button: {
      paddingTop: 10, 
      width:210, 
      height:60},
  button1: {
    width:60, 
    paddingBottom:10,
    backgroundColor: '#fff',
    height: 40
    },
    empty: {
      height: 80,
      backgroundColor: '#fff'
    } 

})