import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from '../../app/header';
class Profile extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            loggedIn: false 
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <View style={{ flex: 1 }}>
                    <Text>Hi</Text>
                    
                </View>
            </View>
        )
    }
}


export default Profile; 