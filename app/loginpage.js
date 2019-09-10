import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import { f, auth, database } from '../config/config';

class LoginModalScreen extends React.Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, password) => {
        // console.log('email: ' + this.state.email + ' password: ' + this.state.password)
    }

    // goBack = () => {
    //     this.props.navigation.goBack()
    // }

    // combinefunction = () => {
    //     this.login();
    //     this.goBack();
    // }
    
    loginDummyUser = async (email, password) => {
        console.log('email', email)
        console.log('password', password)
        if (email != '' && password != '') {
          //
          try {
            let user = await auth.signInWithEmailAndPassword(email, password);
            console.log(user);
          }
          catch (error) {
            console.log(error)
          }
        }
        else {
          alert('missing email or password')
        }
    
    
      }
      loginUser = async (email, password) => {
        console.log('email', email)
        console.log('password', password)
        if (email != '' && password != '') {
          //
          try {
            let user = await auth.signInWithEmailAndPassword(email, password);
            console.log(user);
            if (user){
                this.props.loginSuccessful();
            }
          }
          catch (error) {
            console.log(error)
          }
        }
        else {
          alert('missing email or password')
        }
    
    
      }

    render() {
        console.log('this is new state', this.state)
        return (
            <View style={{ position: 'absolute', opacity: .9, top: 300, left: '7.25%', right: 0, bottom: 0, width: 350,height: 500, zIndex: 1, backgroundColor: 'black'}}>
                <Text style={{marginLeft: 25 ,marginTop: 100,color:'white'}}>Username</Text>
                <TextInput style={styles.input}
                    autoCapitalize="none"                    
                    onChangeText={this.handleEmail} />
                <Text style={{marginLeft: 25 ,marginTop: 30,color:'white'}}>Password</Text>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        // () => this.login(this.state.email, this.state.password);
                        // () => this.combinefunction()
                        // pass the state of the function back to the app component
                        ()=> this.loginUser(this.state.email, this.state.password)
                    //    () => this.props.loginSuccessful()
                    }>
                    <Text style={styles.submitButtonText}> LOGIN </Text>
                </TouchableOpacity>
                {/* <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Submit"
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
       margin: 25,
       marginTop: 10,
       height: 40,
       borderColor: 'white',
       borderWidth: 1,
       width: 300,
       color: 'black',
       backgroundColor:'white',
       alignContent: 'center',
       justifyContent: 'center'
    },
    submitButton: {
       backgroundColor: 'transparent',
       padding: 10,
    //    margin: 25,
       height: 40,
       width: 100,
       left: '36%', 
       right: '50%',
       borderWidth: 1,
       borderColor: 'black',
    //    flexDirection:'row',
    //    alignItems:'center'
    //    alignContent: 'center',
    //    justifyContent:'center'
    },
    submitButtonText:{
       color: 'white',
       textAlign:'center',
       letterSpacing: 3
    }
 })
 

export default LoginModalScreen;