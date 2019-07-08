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
import { YellowBox } from "react-native";
import HomeDrawer from "./navigation/HomeDrawer";
import Register, { navigationOptionsRegister } from "./screens/Register";

YellowBox.ignoreWarnings([
  "Warning: Async Storage has been extracted from react-native core"
]); // <- insert the warning text here you wish to hide.

const Root = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: navigationOptionsLogin
  },
  HomeDrawerScreen: {
    screen: HomeDrawer,
    navigationOptions: {header: null}
  },
  RegisterScreen: {
    screen: Register,
    navigationOptions: navigationOptionsRegister
  },
});

const RootContainer = createAppContainer(Root);

export default RootContainer;
