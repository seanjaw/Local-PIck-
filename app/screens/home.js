import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../../app/header';
class Home extends React.Component {

    render() {
        console.log('home component has been rendered')
        return (
            <View style={{ flex: 1 }}>    
                <Header/>
                <View style ={{flex:1}}>
                    <Text>Hi</Text>
                </View>
            </View>
        )
    }
}


export default Home; 