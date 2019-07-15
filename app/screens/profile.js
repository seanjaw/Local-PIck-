import React from 'react';
import {FlatList, StyleSheet, Text, View, Image, Button } from 'react-native'; 

class Profile extends React.Component{
    static navigationOptions = {
        title: 'PROFILE'
      };
    render()
    {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>Profile!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Saved"
          onPress={() => this.props.navigation.navigate('Saved')}
        /> */}
      </View>
        )
    }
}


export default Profile; 