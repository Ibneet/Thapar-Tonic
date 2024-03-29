import React from 'react';
import { View, Text, StyleSheet,Image, TextInput,TouchableOpacity,ScrollView, KeyboardAvoidingView} from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Entypo } from '@expo/vector-icons'
import { Button } from 'native-base'

export default class TeacherSignup extends React.Component {

    static navigationOptions = {
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
            username: ''
        }
    }

  render() {

    let photo = this.props.navigation.getParam('photo', 'empty')

    return(
        <KeyboardAvoidingView behavior='height' enabled>
        <ScrollView>
            <View style={styles.container1}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                this.props.navigation.navigate('CameraTeacher')
                }}>
                <View style={[styles.imageHolder]}>
                <Image 
                resizeMode = 'center'
                style={{height:101,width:101,alignSelf:'center'}}
                source={
                    photo === 'empty'? require('../assets/teacher.png') : photo
                }
                />
                </View>
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
                            keyboardType= 'default'
                            placeholder= 'Employee Username'
                            value= {this.state.username}
                            selectionColor='#FFF'
                            onChangeText={username =>
                                this.setState({
                                    username
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
                        style={styles.button3}
                        full
                        rounded
                        // onPress={() => {this.props.navigation.navigate('CreateNewAccount')}}
                        >
                            <Text style={styles.text}>Submit</Text>
                        </Button>
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
        padding: 8
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
    justifyContent:'center',
    backgroundColor: '#fff'
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
      backgroundColor: '#333945'
    },
    button3: {
        margin: 10,
        padding: 8,
        borderColor: '#111212',
        borderWidth:1
     },
     text: {
       fontWeight: 'bold',
       color: '#fff',
       fontSize: 18
     }  

})