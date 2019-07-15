import React from 'react';
import { View, Text, StyleSheet,Image, Button, TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView } from 'react-native';
import DatePicker from 'react-native-datepicker'
import {Picker} from 'native-base'
import { Entypo } from '@expo/vector-icons'
import * as firebase from 'firebase'

export default class Student extends React.Component {

    static navigationOptions = {
        title: 'Thapar Tonic'
    }
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            roll:'',
            inputPassword: '',
            date:"1999-06-06",
            email:'',
            phone: ''
            // Branch:'',
            // degree:''
        }
    }

  signupUser =(name, roll, phone, date, email, inputPassword)=>{
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, inputPassword)
        .then(authenticate => {
            return authenticate.user
            .updateProfile({
                displayName: name,
                displayEmail: email,
                displayRoll: roll,
                displayPhone: phone
            })
            .then(() => {
                this.props.navigation.replace('Login')
            })
        })
        .catch( error => {
            alert(error.message)
        } )

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
                    photo === 'empty'? require('../assets/profileIcon.png') : photo
                }
                />
                </View>
                
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    this.props.navigation.navigate('CameraScreen')
                }}>
                    <Entypo 
                    name='camera'
                    size={30}
                    />
                </TouchableOpacity>
                
                
                    <TextInput style = {styles.input}
                            keyboardType= 'default'
                            placeholder= 'Name'
                            value= {this.state.name}
                            selectionColor='#FFF'
                            onChangeText={name =>
                                this.setState({
                                    name
                                })
                            }
                        />
                            
                        <TextInput 
                            style = {styles.input}
                            selectionColor='#FFF'
                            keyboardType= 'numeric'
                            placeholder= 'Roll Number'
                            value= {this.state.roll}
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
                    {/* <View style={styles.input}>
                    <Picker
                        selectedValue={this.state.degree}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({degree: itemValue})
                        }>
                        <Picker.Item label="Undergraduate" value="UG" />
                        <Picker.Item label="Postgraduate" value="PG" />
                        <Picker.Item label="Ph.D." value="Phd" />
                        <Picker.Item label="MBA" value="mba" />
                    </Picker>    
                    </View>

                    <View style={styles.input}>
                    <Picker
                        selectedValue={this.state.Branch}
                        style={{}}
                        placeholder='Program'
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({Branch: itemValue})
                        }>
                        <Picker.Item label="Chemical Eng." value="CHE" />
                        <Picker.Item label="Civil Eng." value="Civil" />
                        <Picker.Item label="Computer Eng." value="COE" />
                        <Picker.Item label="Electrical Eng." value="electrical" />
                        <Picker.Item label="Electronics & Communication Eng." value="ENC" />
                        <Picker.Item label="Electronics(Instrumentation & Control) Eng." value="electronic(instrument)" />
                        <Picker.Item label="Electronics & Computer Eng." value="ECE" />
                        <Picker.Item label="Mechanical Eng." value="mechanical" />
                        <Picker.Item label="Mechanical Eng.(Production)" value="Mechanical(production)" />
                        <Picker.Item label="Mechatronics" value="Mechatronics" />
                        <Picker.Item label="Biotechnology" value="Biotechnology" />

                    </Picker> 
                    </View>        */}

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
                        onPress={() => {
                            this.signupUser(
                                this.state.name,
                                this.state.roll,
                                this.state.phone,
                                this.state.date,
                                this.state.email,
                                this.state.inputPassword
                            )
                            
                        }}
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