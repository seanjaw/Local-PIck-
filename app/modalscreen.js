import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import axios from 'axios';
import config from '../config/yelp';
import { f, auth, database, storage } from '../config/config';

class ModalScreen extends React.Component {
    state = {
        name: '',
    }
    handleName = (text) => {
        this.setState({ name: text })
    }

    // addName = (name) => {
    //     console.log('name: ' + this.state.name)
    // }

    goBack = () => {
        this.props.navigation.state.params.onGoBack()
        this.props.navigation.goBack()
    }

    combinefunction = () => {
        // this.addName();
        // this.props.navigation.navigate('Home', {refresh: refreshFunction});
        this.makeYelpSearch();
        // this.goBack();

    }

    componentDidMount = () => {
        console.log('modal component is mounted')
    }

    makeYelpSearch = async () => {
        restaurantPic = await axios.get('https://api.yelp.com/v3/businesses/search' + '?term=' + this.state.name + '&location=irvine', config)
        var name = restaurantPic.data.businesses[0].name
        var imageUrl = restaurantPic.data.businesses[0].image_url
        console.log('this is name after search', restaurantPic.data.businesses[0].name)
        console.log('this is url after search', restaurantPic.data.businesses[0].image_url)
        this.writeUserData(name, imageUrl);


    }

    //send name and image url to the database
    writeUserData = async (name, imageUrl) => {
        await f.database().ref('photos/' + 'photoex').set({
            keyid: name,
            url: imageUrl,

        });
        this.goBack()

    }
    render() {
        console.log('this.state', this.state)
        console.log('this.props.navigation.state', this.props.navigation.state)
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                <Text style={{ fontSize: 30, color: 'white' }}>ADD RESTAURANT</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Name"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={this.handleName} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        // () => this.login(this.state.email, this.state.password);
                        () => this.combinefunction()
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
                {/* <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Submit"
                /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        width: 300,
        color: 'white'
    },
    submitButton: {
        backgroundColor: 'transparent',
        padding: 10,
        margin: 15,
        height: 40,
        borderWidth: 1,
        borderColor: 'white'
    },
    submitButtonText: {
        color: 'white'
    }
})


export default ModalScreen;