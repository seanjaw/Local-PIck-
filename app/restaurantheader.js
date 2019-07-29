import React, { Component } from 'react';
import {View,Text} from 'react-native';
class RestaurantHeader extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black', height: 40}}>
                <Text style={{ paddingLeft: 10, color: 'white' }}>Capital Noodle Bar</Text>
            </View>
        );
    }
}

export default RestaurantHeader;
