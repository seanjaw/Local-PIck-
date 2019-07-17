import React from 'react';
import { View, Text } from 'react-native';

class Header extends React.Component {

    render() {
        return (
            <View style={{ height: 80, paddingTop: 23, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', borderColor: 'white', borderWidth: 0.5, width: 150, textAlign: 'center', fontSize: 24 }}>Local Pick</Text>
            </View>
        )
    }
}


export default Header; 