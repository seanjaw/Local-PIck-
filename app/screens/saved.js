import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { f, auth, database, storage } from '../../config/config';
import { Header, Icon, Button } from 'react-native-elements';
import Logo from '../logo';
// import {increment} from '../actions/index';
// import {useSelector, useDispatch} from 'react-redux';
// import { connect } from 'react-redux';

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      saved_flatlist: []
    }
  }

  static navigationOptions = {
    title: 'SAVED'
  };


  componentWillMount = async () => {
    await this.loadFeed();
    console.log('saved component mounted')
    console.log('the state has been set')

  }

  loadFeed = async () => {
    // this.setState({
    //   refresh: true,
    //   saved_flatlist: []
    // });

    var that = this;
    await database.ref('comments').orderByChild('comment').once('value').then( async function (snapshot) {
      console.log('this is sample text inside the first await database.ref');
      console.log('this is snapshot', snapshot)
      const exists = (snapshot.val() !== null);
      if (exists) data = snapshot.val();
      var saved_flatlist = that.state.saved_flatlist;
      for (var photo in data) {
        for (var comments in data[photo]) {
          var userId = f.auth().currentUser.uid;
          if (data[photo][comments]['author'] === userId) {
          //make function here
           await database.ref('photos/' + photo).orderByChild('keyid').once('value').then(async function (snapshot) {
              const exists = (snapshot.val() !== null);
              if (exists) data = snapshot.val();
              console.log('this is data', data )
              saved_flatlist.push({
                id: data.author,
                url: data.url
              })
              console.log('this is flatlist', saved_flatlist)
              await that.setState({
                refresh: true,
                saved_flatlist: saved_flatlist
              })
            })

          }
          else {
            // console.log('this isnt correct')
          }
        }
      }

    console.log('this.state.saved_flatlist', this.state.saved_flatlist)
    }).catch(error => console.log())
  }

  
  render() {
    // const counter = useSelector(state => state.counter);
    // const dispatch = useDispatch();
    // dispatch(displayUserFlatlist(['hi']))
    console.log('this is the state', this.state)

    return (
      <View style={{ flex: 1, backgroundColor: '#2C2A2A' }}>
        <Header containerStyle={{
          backgroundColor: 'black',
          borderBottomWidth: 0,
        }}
          centerComponent={<Logo />}
        />

        <FlatList
          contentContainerStyle={{ alignItems: 'center' }}
          data={this.state.saved_flatlist}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <View style={{ paddingTop: 15, backgroundColor: '#2C2A2A', height: 200, width: 335 }}>
              <View style={{ backgroundColor: 'black', height: 30, justifyContent: 'center' }}>
                <Text style={{ paddingLeft: 10, color: 'white', fontSize: 18 }}>{item.id}</Text>
              </View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'black', height: 160 }}>
                  <Image style={{ height: 160 }} source={item.url ? { uri: item.url } : null} />
                </View>
              </TouchableOpacity>
            </View>
          }
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

