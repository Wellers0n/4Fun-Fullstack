import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import { View, Text } from "react-native";

// const sideMenu = () => {
//     return (
//         <View>
//             <Text>Sair</Text>
//         </View>
//     )
// }
const Root = createDrawerNavigator(
  {
    HomeStackScreen: {
      screen: HomeStack,
      navigationOptions: { title: "Home" }
    }
  },
  {
    // contentComponent: sideMenu,
    drawerWidth: 300,
    initialRouteName: 'HomeStackScreen',
    
  }
);

const ContainerRoot = createAppContainer(Root);

export default ContainerRoot;
