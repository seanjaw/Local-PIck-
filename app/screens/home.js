import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import RestaurantContainer from '../../app/restaurantcontainer';
import { f, auth, database, storage } from '../../config/config';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Header, Icon, Button } from 'react-native-elements';
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
        // this.setState({
        //     refresh: true,
        //     photo_feed: []
        // });

        var that = this;

        database.ref('photos').orderByChild('keyid').once('value').then(function (snapshot) {
            const exists = (snapshot.val() !== null);
            if (exists) data = snapshot.val();
            var photo_feed = that.state.photo_feed;
            // console.log('this is photo feed', photo_feed)
            // console.log('this is data', data)
            for (var photo in data) {
                var photoObj = data[photo]
                photo_feed.push({
                    id: photoObj.keyid,
                    url: photoObj.url
                })
            }
            that.setState({
                photo_feed: photo_feed
            })

            // console.log('this is photo feed', photo_feed)
            // console.log('this is data', data)

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
   
        // console.log('this is this.data', this.data)

    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#5A5A5A'}}>
                <Header containerStyle={{
                    backgroundColor: 'black',
                    borderBottomWidth: 0,
                }}
                    centerComponent={<Logo />}
                    rightComponent={<Button
                        onPress={() => this.props.navigation.navigate('MyModal')}
                        type="clear"
                        icon={
                            <Icon
                                name="add"
                                color="white"
                            />
                        }
                    />}
                />

                <FlatList
                    contentContainerStyle = {{ alignItems: 'center'}}
                    data={this.state.photo_feed}
                    renderItem={({ item }) =>
                        <View style={{paddingTop: 15, backgroundColor: '#5A5A5A', height: 200, width: 335}}>
                            <View style={{ backgroundColor: 'black', height: 40 }}>
                                <Text style={{ paddingLeft: 10, color: 'white' }}>{item.id}</Text>
                            </View>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: 'black', height: 160 }}>
                                    <Image style={{ height: 160 }} source={item.url ? { uri: item.url } : null} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                />
            
            </View>
        )
    }
}

// const HeaderNavigator = createAppContainer(MainStack);

export default Home; 