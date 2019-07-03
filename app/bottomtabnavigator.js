// import React, { Component } from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Home from './screens/home';
import Profile from './screens/profile'
import Saved from './screens/saved'

const MainStack = createBottomTabNavigator(
    {
      Home: {screen: Home},
      Profile: {screen: Profile},
      Saved: {screen: Saved}
    }
  )
  const BottomTabNavigator = createAppContainer(MainStack);


export default BottomTabNavigator;