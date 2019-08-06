import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import RestaurantContainer from '../../app/restaurantcontainer';
import { f, auth, database, storage } from '../../config/config';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Header, Icon, Button  } from 'react-native-elements';
import Logo from '../logo';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photo_feed: [],
            refresh: false,
            loading: true
        }
    }

    componentDidMount = () => {
        this.loadFeed();
    }

    loadFeed = () => {
        this.setState({
            refresh: true,
            photo_feed: []
        });

        var that = this;

        database.ref('photos').orderByChild('keyid').once('value').then(function (snapshot) {
            const exists = (snapshot.val() !== null);
            if (exists) data = snapshot.val();
            var photo_feed = that.state.photo_feed;
            console.log('this is photo feed', photo_feed)
            console.log('this is data', data)
            for (var photo in data){
                var photoObj = data[photo]
                photo_feed.push({
                    id: photoObj.keyid,
                    url: photoObj.url
                })
            }
            
            console.log('this is photo feed', photo_feed)
            // for (var photo in data) {
            //     var photoObj = data[photo];

            //     database.ref('users').orderByChild('photoObj.author').once('value').then(function (snapshot) {
            //         const exists = (snapshot.val() !== null);
            //         if (exists) data = snapshot.val();
            //         photo_feed.push({
            //             id: photo,
            //             url: photoObj.url,
            //             caption: photoObj.caption,
            //             posted: photoObj.posted,
            //             author: data.username
            //         });

            //         that.setState({
            //             refresh: false,
            //             loading: false
            //         });
            //     }).catch(error => console.log());

            // }
        
            
        }).catch(error => console.log())
    }
    render() {
        console.log('home component has been rendered')
        return (
            <View style={{ flex: 1, backgroundColor: '#5A5A5A' }}>
                <Header containerStyle={{
                    backgroundColor: 'black',
                    borderBottomWidth: 0,
                    }}
                    centerComponent={<Logo/>}
                    rightComponent={<Button
                        onPress={() => this.props.navigation.navigate('MyModal')}
                        type = "clear"
                        icon={
                          <Icon
                            name="add"
                            // size={15}
                            color="white"
                          />
                        }
                      />}
                />
            
                <View style={{ alignItems: 'center' }}>
                    {/* <RestaurantContainer /> */}
                    {/* <FlatList
                    data = {this.state.photo_feed}
                    renderItem = {{item} => }
                    
                    /> */}
                </View>

            </View>
        )
    }
}

// const HeaderNavigator = createAppContainer(MainStack);

export default Home; 