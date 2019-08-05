import React from 'react';
import {View, Text} from 'react-native';

class Logo extends React.Component {

    render() {
        return (
                <View style={{ height: 90, backgroundColor: 'black', borderColor: 'lightgrey', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style ={{fontSize: 25, color: 'white' , borderColor: 'white', borderWidth: 1, width: 180, textAlign: 'center'}}>Local Pick</Text>
                </View>
        )
    }
}


export default Logo; 