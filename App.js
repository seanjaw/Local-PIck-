import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import {f ,auth, database} from './config/config.js';
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    // this.registerUser('testemailaddress@gmail.com', 'fakepassword')
    // this.state = {
    //   loggedin: false
    // };

    // var that =this 
    auth.signOut()
    .then(()=>{
      console.log('logged out...')
    }).catch((error) =>{
      console.log('error:',error);
    })
    f.auth().onAuthStateChanged(function(user){
      if (user){
        console.log('logged in')
      }else{
        console.log('logged out')
      }
    });
  }
  registerUser = (email,password) =>{
    auth.createUserWithEmailAndPassword(email,password)
    .then((userObj) => console.log(email,password,userObj))
    .catch((error) => console.log('error logging in', error));
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <TouchableHighlight
        style ={{backgroundColor: 'green'}}
        >
        <Text style = {{color:'white'}}>Login With FB</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
