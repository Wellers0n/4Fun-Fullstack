import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home, { navigationOptionsHome } from "./../screens/Home";
import Detail, { navigationOptionsDetail } from "./../screens/Detail";

const Root = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: navigationOptionsHome
  },
  DetailScreen: {
    screen: Detail,
    navigationOptions: navigationOptionsDetail
  }
});

const ContainerRoot = createAppContainer(Root);

export default ContainerRoot;
