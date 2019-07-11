import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home, { navigationOptionsHome } from "./../screens/Home";
import Detail, { navigationOptionsDetail } from "./../screens/Detail";
import CreatePlanet, {navigationOptionsCreatePlanet} from './../screens/CreatePlanet'

const Root = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: navigationOptionsHome
  },
  DetailScreen: {
    screen: Detail,
    navigationOptions: navigationOptionsDetail
  },
  CreatePlanetScreen: {
    screen: CreatePlanet,
    navigationOptions: navigationOptionsCreatePlanet
  }
});

const ContainerRoot = createAppContainer(Root);

export default ContainerRoot;
