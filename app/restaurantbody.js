import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import axios from 'axios';
import config from '../config/yelp';

class RestaurantBody extends Component {
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
        return (
                <View style={{ backgroundColor: 'black', height: 160 }}>
                    <Image style={{ height: 160 }} source={this.state.restaurantPic ? { uri: this.state.restaurantPic } : null} />
                </View>

        );
    }
}

export default RestaurantBody;