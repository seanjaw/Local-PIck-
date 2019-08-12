import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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
        //Here is the Trick
        // const { navigation } = this.props;
        // //Adding an event listner om focus
        // //So whenever the screen will have focus it will set the state to zero
        // this.focusListener = navigation.addListener('didFocus', () => {
        //   this.setState({ count: 0 });
        // });
        console.log('home component mounted')
    }

    // componentWillUnmount() {
    //     // Remove the event listener before removing the screen from the stack
    //     this.focusListener.remove();
    //   }


    refresh = () => {
        // that.setState({refresh: false})
        console.log('from the refresh function', this.state)
        this.loadFeed();
    }

    loadFeed = () => {
        this.setState({
            refresh: true,
            photo_feed: []
        });

        var that = this;

        database.ref('photos').orderByChild('keyid').once('value').then(function (snapshot) {
            console.log('this is snapshot', snapshot)
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
                photo_feed: photo_feed,
                refresh: true
            })
        }).catch(error => console.log())

        // console.log('this is this.data', this.data)
        // database.ref('photos').orderByChild('keyid').on('value' , function (snapshot) {
        //     console.log('this is snapshot', snapshot)
        //     const exists = (snapshot.val() !== null);
        //         if (exists) data = snapshot.val();
        //         var photo_feed = that.state.photo_feed;
        //         // console.log('this is photo feed', photo_feed)
        //         // console.log('this is data', data)
        //         for (var photo in data) {
        //             var photoObj = data[photo]
        //             photo_feed.push({
        //                 id: photoObj.keyid,
        //                 url: photoObj.url
        //             })
        //         }
        //         that.setState({
        //             photo_feed: photo_feed,
        //             refresh: true
        //         })
        // })    
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2C2A2A' }}>
                <Header containerStyle={{
                    backgroundColor: 'black',
                    borderBottomWidth: 0,
                }}
                    centerComponent={<Logo />}
                    rightComponent={<Button
                        onPress={() => this.props.navigation.navigate('MyModal', {
                            onGoBack: () => this.refresh()
                        })}
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
                    contentContainerStyle={{ alignItems: 'center' }}
                    data={this.state.photo_feed}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View style={{ paddingTop: 15, backgroundColor: '#2C2A2A', height: 200, width: 335 }}>
                            <View style={{ backgroundColor: 'black', height: 40, justifyContent: 'center' }}>
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

            </View>
        )
    }
}

// const HeaderNavigator = createAppContainer(MainStack);

export default Home; 