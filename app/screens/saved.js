import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { f, auth, database, storage } from '../../config/config';
import { Header, Icon, Button } from 'react-native-elements';
import Logo from '../logo';
// import {increment} from '../actions/index';
// import {useSelector, useDispatch} from 'react-redux';
// import { connect } from 'react-redux';

class Saved extends React.Component {

  static navigationOptions = {
    title: 'SAVED'
  };


  componentDidMount = () => {
    // this.loadFeed();
    console.log('saved component mounted')
  }

  loadFeed = () => {
    this.setState({
      refresh: true,
      photo_feed: [],
      saved_flatlist: {} 
      
    });

    var that = this;
    database.ref('comments').orderByChild('comment').once('value').then(function (snapshot) {
      const exists = (snapshot.val() !== null);
      var photo_feed = that.state.photo_feed;
      if (exists) data = snapshot.val();
      for (var photo in data) {
        for (var comments in data[photo]) {
          var userId = f.auth().currentUser.uid;
          if (data[photo][comments]['author'] === userId) {
            database.ref('photos/' + photo).orderByChild('keyid').once('value').then(function (snapshot) {
              const exists = (snapshot.val() !== null);
              if (exists) data = snapshot.val();
              let savedFlatlist = []; 
              savedFlatlist.push(data.url)
              console.log('this is flatlist', savedFlatlist)

            })
          }
          else {
            console.log('this isnt correct')
          }
        }
      }
      that.setState({
        photo_feed: photo_feed,
        refresh: true
      })
    }).catch(error => console.log())
  }

  render() {
    // const counter = useSelector(state => state.counter);
    // const dispatch = useDispatch();
    // dispatch(displayUserFlatlist(['hi']))

    // console.log('this is the state', counter)
    return (
      <View style={{ flex: 1, backgroundColor: '#2C2A2A' }}>
        <Header containerStyle={{
          backgroundColor: 'black',
          borderBottomWidth: 0,
        }}
          centerComponent={<Logo />}
        />
        {/* <Button
        onPress ={()=>dispatch(increment(5))}
        /> */}
        {/* <Text>{counter}</Text> */}
      </View >
    )
  }
}
// const mapStateToProps = state => {
// 	console.log("STATE", state.counter)
//   return {
//     counter: state.counter
//   }
// } 


export default Saved; 
// export default connect(mapStateToProps, {
//   increment
// })(Saved);

