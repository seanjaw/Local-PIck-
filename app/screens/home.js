import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../../app/header';
import RestaurantContainer from '../../app/restaurantcontainer';
class Home extends React.Component {
   

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