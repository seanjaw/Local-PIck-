import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';
import Logo from '../logo';
import { f, auth, database, storage } from '../../config/config';

class Profile extends React.Component {
    static navigationOptions = {
        title: 'PROFILE'
    };

    constructor(props) {
        super(props);
        this.state = {
            title_feed:[],
            refresh: false
        }
    }

    loadtitles = () =>{

    }
    refresh = () => {
        // console.log('from the refresh function', this.state)
        this.loadFeed();
    }


    render() {
        var user = f.auth().currentUser;
        console.log("TCL: Profile -> user", user)
        var userId = f.auth().currentUser.uid;
        var avatar = f.database().ref('/users/' + userId).once('value').then(function (snapshot) {
            console.log("TCL: Profile -> render -> snapshot", snapshot)
            console.log('this is avatar', snapshot.val().avatar)

            return snapshot.val().avatar
        });
        console.log('this is uid', user.uid)
        return (
            <View style={{ flex: 1, backgroundColor: '#2C2A2A', alignItems: 'center' }}>
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
                                name="ios-log-out"
                                type="ionicon"
                                color="white"
                            />
                        }
                    />}
                />
                {/* <View style={{ flex: 1, backgroundColor: '#2C2A2A', alignItems: 'center' }}> */}
                <View style={{ paddingTop: 50 }}>
                    <Image
                        style={{ width: 100, height: 100 , borderRadius: 50 }}
                        source={{ uri: 'https://randomuser.me/api/portraits/men/65.jpg' }}

                    />
                </View>

                <Text style={{ color: 'white', fontSize: 28, padding: 30 }}>{user.email}</Text>
                <Text style={{ color: 'white', fontSize: 18 }}>All Picks:</Text>
                {/* <View style={{ backgroundColor: 'black', borderColor: 'lightgrey', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style ={{fontSize: 25, color: 'white' , borderColor: 'white', borderWidth: 1, width: 250, textAlign: 'center'}}>Chipotle</Text>
                </View>
                <View style={{ backgroundColor: 'black', borderColor: 'lightgrey', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style ={{fontSize: 25, color: 'white' , borderColor: 'white', borderWidth: 1, width: 250, textAlign: 'center'}}>Panda Express</Text>
                </View>
                <View style={{ backgroundColor: 'black', borderColor: 'lightgrey', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style ={{fontSize: 25, color: 'white' , borderColor: 'white', borderWidth: 1, width: 250, textAlign: 'center'}}>McDonald's</Text>
                </View> */}



                {/* <Image style={{ height: 160 }} source={ {uri: this.avatar} ? { uri: this.avatar } : null} /> */}
                {/* <Image style={{ height: 160 }} source={{ uri: "https://i.pravatar.cc/300" }} /> */}

                {/* </View> */}



            </View>
        )
    }
}


export default Profile; 