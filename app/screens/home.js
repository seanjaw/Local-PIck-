import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Header from '../../app/header';
import RestaurantContainer from '../../app/restaurantcontainer';
import {f, auth, database, storage} from '../../config/config';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            photo_feed:[],
            refresh: false,
            loading: true
        }
    }

    componentDidMount = () =>{
        this.loadFeed();
    }

    loadFeed =() =>{
        this.setState({
            refresh: true, 
            photo_feed: []
        });

        var that = this;
        database.ref('photos').orderByChild('posted').once('value').then(function(snapshot){
            const exists = (snapshot.val() !== null);
            if (exists) data = snapshot.val();
                var photo_feed = that.state.photo_feed;
                for (var photo in data){
                    var photoObj = data[photo];
                    database.ref('users').orderByChild('photoObj.author').once('value').then(function(snapshot){
                        const exists = (snapshot.val() !== null);
                        if (exists) data = snapshot.val();
                        photo_feed.push({
                            id: photo,
                            url: photoObj.url,
                            caption: photoObj.caption,
                            posted: photoObj.posted,
                            author: data.username
                        });

                        that.setState({
                            refresh: false, 
                            loading: false 
                        });
                    }).catch(error => console.log());
                    
                }
        }).catch(error => console.log())
    }
    render() {
        console.log('home component has been rendered')
        return (
            <View style={{ flex: 1, backgroundColor:'#5A5A5A'}}>
                <Header/>
                <View style ={{alignItems: 'center'}}>
                    <RestaurantContainer/>
                    <RestaurantContainer/>
                    <RestaurantContainer/>
                    <RestaurantContainer/>

                </View>
                
            </View>
        )
    }
}


export default Home; 