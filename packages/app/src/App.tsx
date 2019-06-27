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
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from './screens/Home'

const Root = createStackNavigator({
  Home: {
    screen: HomeScreen 
  }
})

const RootContainer = createAppContainer(Root)

export default RootContainer