import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { f, auth, database, storage } from '../../config/config';
import { Header, Icon, Button } from 'react-native-elements';
import Logo from '../logo';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_feed: [],
      refresh: false,
      loading: true,
      saved_flatlist:{}
    }
  }

  static navigationOptions = {
    title: 'SAVED'
  };

  componentDidMount = () => {
    this.loadFeed();
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

    console.log('this is the state', this.state)
    return (
      <View style={{ flex: 1, backgroundColor: '#2C2A2A' }}>
        <Header containerStyle={{
          backgroundColor: 'black',
          borderBottomWidth: 0,
        }}
          centerComponent={<Logo />}
        />
      </View >
    )
  }
}


export default Saved; 