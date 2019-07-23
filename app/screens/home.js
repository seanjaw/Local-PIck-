import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../../app/header';
import axios from 'axios';
import config from '../../config/yelp';
class Home extends React.Component {
    state = {
        restaurantPic: ''
    }

    async componentDidMount() {
        const restaurantPic = await axios.get('https://api.yelp.com/v3/businesses/search', config)
        this.setState({
            restaurantPic: restaurantPic.data.businesses[0].image_url
        })
    }

    render() {
        console.log('home component has been rendered')
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{ flex: 1 }}>
                    <Image style={{ width: 200, height: 200 }} source={ this.state.restaurantPic ? {uri: this.state.restaurantPic} : null} />
                </View>
            </View>
        )
    }
}


export default Home; 