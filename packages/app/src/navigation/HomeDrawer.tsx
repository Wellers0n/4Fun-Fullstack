import React from 'react'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'
import HomeStack from './HomeStack'

const Root = createDrawerNavigator({
    HomeStackScreen: {
        screen: HomeStack,
        navigationOptions: {title: "Home"}
    },
   
})

const ContainerRoot = createAppContainer(Root);

export default ContainerRoot