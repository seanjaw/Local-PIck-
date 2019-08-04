import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';
import { f, auth, database } from './config/config.js';
import BottomTabNavigator from './app/bottomtabnavigator.js';
// import result from './config/yelp';
import axios from 'axios';
import config from './config/yelp';



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
  // writeUserData = ('Y7myB7HcoHMIcVimNbI1SHkQgch2', '', email, imageUrl) => {
  //   firebase.database().ref('users/' + 'Y7myB7HcoHMIcVimNbI1SHkQgch2').set({
  //     email: name,
  //     name: email,
  //     username: imageUrl
  //   });
  // }

  componentWillMount(){
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response.data.businesses[0].image_url));
    database.ref('users/001').set(
      {
        name: 'Sean Jaw',
        age: 4 
      }
    ).then(() =>{
      console.log('Inserted!');
    })
    .catch(()=>{
      console.log(error);
    })
    }

  render() {
    var user = f.auth().currentUser;
    console.log('this is the current user', user)
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
          <View style= {{flex:1}}>
            {/* <AppContainer/> */}
            <BottomTabNavigator/>
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
                  <View style ={{paddingTop:40}}>
                    <TouchableHighlight
                      // onPress={() => this.setState({ emailloginview: true })}
                      onPress={() => this.loginDummyUser('sjaw94@gmail.com', 'password')}
                      style={{ backgroundColor: 'green' }}>
                      <Text style={{ color: 'white' }}>LOGIN</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={() => this.setState({ signupview: true })}
                      style={{ backgroundColor: 'green' }}>
                      <Text style={{ color: 'white' }}>SIGN UP</Text>
                    </TouchableHighlight>
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

  },
});


