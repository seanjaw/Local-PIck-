import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image } from 'react-native';
import { f, auth, database } from './config/config.js';
import BottomTabNavigator from './app/bottomtabnavigator.js';
import LoginModalScreen from './app/loginpage';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loginModal: true
    };

    var that = this
    // this.registerUser('sjaw94@gmail.com', 'fakepassword')
    // f.auth().onAuthStateChanged(function (user) {
    //   if (user) {
    //     that.setState({
    //       loggedIn: true
    //     });
    //     console.log('logged in')
    //   } else {
    //     that.setState({
    //       loggedIn: true
    //     });
    //     console.log('logged out')
    //   }
    // });
  }

  componentDidMount = () => {
    console.log('component mounted')
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

  loginSuccessful = async () => {
    await this.setState({
      loggedIn: true,
      loginModal: false
    })
    console.log('the state has been changed and this is new state in app', this.state)

  }


  render() {
    var user = f.auth().currentUser;
    console.log('this is the current user', user)

    return (
      <View style={styles.container}>
        {this.state.loggedIn == true ? (
          // <View>
          //   <TouchableHighlight
          //     onPress={() => this.signUserOut()}
          //     style={{ backgroundColor: 'red' }}>
          //     <Text>Log Out</Text>
          //   </TouchableHighlight>
          // </View>
          // <BottomTabNavigator/>
          <View style={{ flex: 1}}>
            {/* <AppContainer/> */}
            <BottomTabNavigator />
          </View>
        ) : (
            <View>
              {this.state.loginModal == true ? (
                <View >
                  <View style={{ position: 'absolute', backgroundColor: 'black', top: 0, left: 0, right: 0, bottom: 0, height: 240, zIndex: 1, opacity: .9, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ padding: 10, fontSize: 50, borderColor: 'white', borderWidth: 1, color: 'white', textAlign: 'center', width: 340 }}>Local Pick</Text>
                    <Text style={{ paddingTop: 30, fontSize: 25, color: 'white', textAlign: 'center' }}>Discover. Eat. Recommend. </Text>
                  </View>
                  <LoginModalScreen loginSuccessful={this.loginSuccessful} />
                    <Image style={{ position: 'absolute', backgroundColor: 'black', height: 2000, width: 600,top: -550 , left: -100, right: 0, bottom: 0}}
                      source={require('./assets/loginpage.jpg')} resizeMode='contain' />
                </View>

              ) : (
                  <View>
                    <View style={{ position: 'absolute', backgroundColor: 'black', top: 0, left: 0, right: 0, bottom: 0, height: 240, zIndex: 1, opacity: .9, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ padding: 10, fontSize: 50, borderColor: 'white', borderWidth: 1, color: 'white', textAlign: 'center', width: 340 }}>Local Pick</Text>
                      <Text style={{ paddingTop: 30, fontSize: 25, color: 'white', textAlign: 'center' }}>Discover. Eat. Recommend. </Text>
                    </View>
                    <TouchableHighlight style={{ position: 'absolute', backgroundColor: '#121212', left: 0, right: 0, bottom: 0, height: 120, width: '50%', zIndex: 1, opacity: .9, justifyContent: 'center', alignItems: 'center' }}
                      onPress={() => this.setState({ emailloginview: true })}
                      onPress={() => this.loginDummyUser('sjaw94@gmail.com', 'password')}
                    >
                      <View style={{ position: 'relative', left: '44%' }}>
                        <Text style={{ letterSpacing: 3, color: 'white', fontSize: 20 }}>SIGN UP</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ position: 'absolute', backgroundColor: '#070707', left: '50%', right: '50%', bottom: 0, height: 120, width: '50%', zIndex: 1, opacity: .9, justifyContent: 'center', alignItems: 'center' }}
                      // onPress={() => this.setState({ emailloginview: true })}
                      // onPress={() => this.loginDummyUser('sjaw94@gmail.com', 'password')}
                      onPress={() => this.setState({ loginModal: true })}
                    >
                      <View style={{ position: 'relative', right: '44%' }}>
                        <Text style={{ letterSpacing: 3, color: 'white', fontSize: 20 }}>LOGIN</Text>
                      </View>
                    </TouchableHighlight>
                    <Image style={{ position: 'relative', backgroundColor: 'black', top: 0, left: 0, right: 0, bottom: 0,flex: 1, zIndex:20, justifyContent: 'center', alignItems: 'center'}}
                      source={require('./assets/loginpage.jpg')} resizeMode='contain' />
                      {/* <Image style={{ zIndex:20 , width: 200, height: 600}}
                      source={require('./assets/loginpage.jpg')} /> */}
                    {/* <Image style={{ flex: 1 }}
                    source={require('./assets/loginpage.jpg')} resizeMode='contain' /> */}
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
    backgroundColor: 'red',
    // style ={{backgroundImage: 'url(./assets/loginpage.jpg)'}}
    // alignItems: "center",
    // justifyContent: "center"
  },
});

export default App;

