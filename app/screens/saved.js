import React from 'react';
import {FlatList, StyleSheet, Text, View, Button, Image } from 'react-native'; 
import Header from '../../app/header';
class Saved extends React.Component{

    render()
    {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Saved!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
          <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
    
      </View>
        )
    }
}


export default Saved; 