import React from 'react';
import {View, Text} from 'react-native';

class Header extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>    
                <View style={{ height: 90, paddingTop: 30, backgroundColor: 'black', borderColor: 'lightgrey', borderBottomWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style ={{color: 'white' , borderColor: 'white', borderWidth: 0.5, width: 100, textAlign: 'center'}}>Local Pick</Text>
                </View>
            </View>
        )
    }
}


export default Header; 