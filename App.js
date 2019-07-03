import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import { f, auth, database } from './config/config.js';
import  BottomTabNavigator from './app/bottomtabnavigator';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false
    };

    var that = this
    // this.registerUser('sjaw94@gmail.com', 'fakepassword')

    f.auth().onAuthStateChanged(function (user) {
      if (user) {
        that.setState({
          loggedin: true
        });
        console.log('logged in')
      } else {
        that.setState({
          loggedin: false
        });
        console.log('logged out')
      }
    });
  }
  registerUser = (email, password) => {
    console.log(email, password)
    auth.createUserWithEmailAndPassword(email, password)
      .then((userObj) => console.log(email, password, userObj))
      .catch((error) => console.log('error logging in', error));
  }

  signUserOut = () => {
    auth.signOut()
      .then(() => {
        console.log('user had logged out...')
      }).catch((error) => {
        console.log('error:', error);
      })
  }

  loginUser = async (email, password) => {
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

  render() {
    return (
      // <View style={styles.container}>
      //   {this.state.loggedin == true ? (
      //     <View>
      //       <TouchableHighlight
      //         onPress={() => this.signUserOut()}
      //         style={{ backgroundColor: 'red' }}>
      //         <Text>Log Out</Text>
      //       </TouchableHighlight>
      //     </View>
      //   ) : (
      //       <View>

      //         {this.state.emailloginview == true ? (

      //           <View>
      //             <Text>Email:</Text>
      //             <TextInput
      //               onChangeText={(text) => this.setState({ email: text })}
      //               value={this.state.email}
      //             />
      //             <Text>Password:</Text>
      //             <TextInput
      //               onChangeText={(text) => this.setState({ pass: text })}
      //               secureTextEntry={true}
      //               value={this.state.pass}
      //             />
      //             <TouchableHighlight
      //               onPress={() => this.loginUser(this.state.email, this.state.pass)}
      //               style={{ backgroundColor: 'green' }}>
      //               <Text>Log In</Text>
      //             </TouchableHighlight>
      //           </View>

      //         ) : (
      //             <View>
      //               <TouchableHighlight
      //                 onPress={() => this.setState({ emailloginview: true })}
      //                 style={{ backgroundColor: 'green' }}>
      //                 <Text style={{ color: 'white' }}>LOGIN</Text>
      //               </TouchableHighlight>
      //               <TouchableHighlight
      //                 onPress={() => this.setState({ signupview: true })}
      //                 style={{ backgroundColor: 'green' }}>
      //                 <Text style={{ color: 'white' }}>SIGN UP</Text>
      //               </TouchableHighlight>
      //             </View>
      //           )
      //         }




      //       </View>
      //     )}
      // </View>
      <BottomTabNavigator/>
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

