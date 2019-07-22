import React from 'react';
import {FlatList, StyleSheet, Text, View, Image, Button } from 'react-native'; 
import Header from '../../app/header';

class Profile extends React.Component{
    static navigationOptions = {
        title: 'PROFILE'
      };
    render()
    {
        return(
            <View style={{ flex: 1}}>
        {/* <Text>Profile!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Saved"
          onPress={() => this.props.navigation.navigate('Saved')}
        /> */}
        <Header/>
      </View>
        )
    }
}


export default Profile; 