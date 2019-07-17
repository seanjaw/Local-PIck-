import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../../app/header';
class Home extends React.Component {

    render() {
        return (
            <View style={{ flex: 1}}>    
                <Header/>
                <View style ={{flex: 1, backgroundColor: '#323232'}}>
                    <Text>Hi</Text>
                    <Image
                        source = {{uri: 'https://images.unsplash.com/photo-1562197168-17259bdecd59?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'}}
                        style ={{resizeMode: 'cover', width: '100%', height: 275}}
                    />
                    
                   
    

                </View>
            </View>
        )
    }
}


export default Home; 