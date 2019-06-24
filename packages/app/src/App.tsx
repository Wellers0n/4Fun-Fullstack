/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import {createAppContainer, createStackNavigator} from 'react-navigation'
import Home from './screens/Home'
import Login from './screens/Login'

const App = createStackNavigator({
  LoginScreen:{
    screen: Login
  },
  HomeScreen:{
    screen: Home
  }
})

const ContainerApp = createAppContainer(App)

export default ContainerApp