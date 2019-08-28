import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'

class ModalScreen extends React.Component {
    state = {
        email: '',
        password: ''
        
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, password) => {
        // console.log('email: ' + this.state.email + ' password: ' + this.state.password)
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    combinefunction = () => {
        this.login();
        this.goBack();
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                <Text style={{ fontSize: 30, color: 'white' }}>ADD RESTAURANT</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="white"
                    autoCapitalize="none"                    
                    onChangeText={this.handleEmail} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />

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
    submitButtonText:{
       color: 'white'
    }
 })
 

export default ModalScreen;