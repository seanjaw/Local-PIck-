import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image } from 'react-native';
import { f, auth, database } from './config/config.js';
import BottomTabNavigator from './app/bottomtabnavigator.js';

class App extends React.Component {
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
          loggedin: false
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


  render() {
    var user = f.auth().currentUser;
    // console.log('this is the current user', user)

    return (
      <View style={styles.container}>
        {this.state.loggedin == true ? (
          // <View>
          //   <TouchableHighlight
          //     onPress={() => this.signUserOut()}
          //     style={{ backgroundColor: 'red' }}>
          //     <Text>Log Out</Text>
          //   </TouchableHighlight>
          // </View>

          // <BottomTabNavigator/>
          <View style={{ flex: 1 }}>
            {/* <AppContainer/> */}
            <BottomTabNavigator />
          </View>



        ) : (
            <View>

              {this.state.emailloginview == true ? (

                <View>
                  <Text>Email:</Text>
                  <TextInput
                    onChangeText={(text) => this.setState({ email: text })}
                    value={this.state.email}
                  />
                  <Text>Password:</Text>
                  <TextInput
                    onChangeText={(text) => this.setState({ pass: text })}
                    secureTextEntry={true}
                    value={this.state.pass}
                  />
                  <TouchableHighlight
                    onPress={() => this.loginUser(this.state.email, this.state.pass)}

                    style={{ backgroundColor: 'green' }}>
                    <Text>Log In</Text>
                  </TouchableHighlight>
                </View>

              ) : (
                  // <View style ={{paddingTop:30}}>
                  //   <Image style={{resizeMode: 'cover'}} source={require('./assets/loginpage.jpg')}/>
                  //   <TouchableHighlight
                  //     // onPress={() => this.setState({ emailloginview: true })}
                  //     onPress={() => this.loginDummyUser('sjaw94@gmail.com', 'password')}
                  //     style={{ backgroundColor: 'green' }}>
                  //     <Text style={{ color: 'white' }}>LOGIN</Text>
                  //   </TouchableHighlight>
                  //   <TouchableHighlight
                  //     onPress={() => this.setState({ signupview: true })}
                  //     style={{ backgroundColor: 'green' }}>
                  //     <Text style={{ color: 'white' }}>SIGN UP</Text>
                  //   </TouchableHighlight>
                  // </View>
                  <View>
                    <View style={{ position: 'absolute', backgroundColor: 'black', top: 0, left: 0, right: 0, bottom: 0, height: 240, zIndex: 1, opacity: .9, justifyContent: 'center', alignItems: 'center' }}>
                      {/* <Text style={{ fontSize: 25, color: 'white', borderColor: 'white', borderWidth: 1, width: 180, textAlign: 'center', zIndex: 1 }}>Local Pick</Text> */}
                      <Text style={{ padding: 10, fontSize: 50, borderColor: 'white', borderWidth: 1, color: 'white', textAlign: 'center', width: 340 }}>Local Pick</Text>
                      <Text style={{ paddingTop: 30, fontSize: 25, color: 'white', textAlign: 'center' }}>Discover. Eat. Recommend. </Text>
                    </View>
                    <View style={{ position: 'absolute', backgroundColor: '#121212', left:0, right: 0, bottom: 0, height: 120, width: '50%', zIndex: 1, opacity: .9, justifyContent: 'center', alignItems: 'center' }}>
                      <View style ={{position: 'relative' , left: '44%'}}>
                        <Text style={{letterSpacing: 3, color: 'white', fontSize: 20 }}>SIGN UP</Text>
                      </View>
                    </View>
                    <View style={{ position: 'absolute', backgroundColor: 'black', left:'50%', right: '50%', bottom: 0, height: 120, width: '50%', zIndex: 1, opacity: .9, justifyContent: 'center', alignItems: 'center' }}>
                      <View style ={{position: 'relative' , right: '44%'}}>
                        <Text style={{letterSpacing: 3, color: 'white', fontSize: 20 }}>LOGIN</Text>
                      </View>
                    </View>

                    {/* <View style={{position: 'absolute', backgroundColor: 'black', left: 0, right: 0, bottom: 0, height: 120, width: '50%', zIndex: 1, opacity: .85, justifyContent:'center', alignItems: 'center' }}>
                      <Text style={{color: 'white'}}>Sign Up</Text>
                    </View> */}


                    <Image style={{ flex: 1, backgroundColor: "red" }}
                      source={require('./assets/loginpage.jpg')} resizeMode='contain' />
                  </View>

                )
              }




            </View>
          )
        }
      </View>





    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center"
  },
});

export default App;

