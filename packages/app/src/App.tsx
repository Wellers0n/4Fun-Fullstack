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
import Login, { navigationOptionsLogin } from "./screens/Login";
import Home, { navigationOptionsHome } from "./screens/Home";
import Register, { navigationOptionsRegister } from "./screens/Register";

const Root = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: navigationOptionsLogin
  },
  HomeScreen: {
    screen: Home,
    navigationOptions: navigationOptionsHome
  },
  RegisterScreen: {
    screen: Register,
    navigationOptions: navigationOptionsRegister
  }
});

const RootContainer = createAppContainer(Root);

export default RootContainer;
