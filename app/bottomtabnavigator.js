import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/home';
import Profile from './screens/profile'
import Saved from './screens/saved'
import Icon from 'react-native-vector-icons/Ionicons';
import ModalScreen from './modalscreen';

const MainStack = createBottomTabNavigator(
  {
    Home: { screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="ios-home"
                color={tintColor}
                size={24}
                />
        )
    })
    },
    Profile: { screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="ios-contact"
                color={tintColor}
                size={24}
            />
        )
    })
    },
    Saved: { screen: Saved,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="ios-bookmark"
                color={tintColor}
                size={24}
            />
        )
    })
    }

  },
  {
    tabBarOptions: {
      activeTintColor: '#690618',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#DDDDDD',
      }
    }
  }

)


const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
// const BottomTabNavigator = createAppContainer(MainStack);

const BottomTabNavigator = createAppContainer(RootStack);


export default BottomTabNavigator;