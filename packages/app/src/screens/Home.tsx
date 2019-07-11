import React, { useEffect } from "react";
import {
  Text,
  View,
  YellowBox,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { graphql, createFragmentContainer } from "react-relay";
import { Home_planets } from "./__generated__/Home_planets.graphql";
import { withNavigation } from "react-navigation";
import styled from "styled-components";
import { NavigationScreenProp } from "react-navigation";
import IconHeader from "react-native-vector-icons/Entypo";
import IconFabButton from "react-native-vector-icons/Ionicons";
import CardItem from "./../components/card";

export const navigationOptionsHome = ({ navigation }: Props) => ({
  headerStyle: {
    backgroundColor: "#3479ff"
  },
  headerTitle: (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          fontSize: 24,
          alignSelf: "center"
        }}
      >
        Home
      </Text>
    </View>
  ),
  headerLeft: (
    <View style={{ flex: 1 }}>
      <IconMenu
        onPress={() => navigation.openDrawer()}
        color="white"
        size={40}
        name="menu"
      />
    </View>
  ),
  headerRight: <View style={{ flex: 1 }} />
});

const IconMenu = styled(IconHeader)`
  padding-left: 5px;
`;
const Container = styled(View)`
  height: 100%;
  background: #463064;
  justify-content: flex-start;
  align-items: center;
`;

const FabButton = styled(TouchableOpacity)`
  height: 50px;
  width: 50px;
  background: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const FabButtonIcon = styled(IconFabButton)`
  color: #3479ff;
`;

type Props = {
  planets: Home_planets;
  navigation: NavigationScreenProp<any, any>;
};

const Home = (props: Props) => {
  //props
  const { planets, navigation } = props;


  YellowBox.ignoreWarnings([
    "Warning: Async Storage has been extracted from react-native core"
  ]); // <- insert the warning text here you wish to hide.

  // render
  return (
    <Container>
      {console.log('qui')}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={planets}
        keyExtractor={(item, index: number) => index.toString()}
        renderItem={({ item: DataItem, separators }: any) => (
          <CardItem navigation={navigation} key={separators} item={DataItem} />
        )}
      />
      <FabButton
        style={{ borderRadius: 50 }}
        onPress={() => navigation.navigate("CreatePlanetScreen")}
      >
        <FabButtonIcon name="md-add" size={30} />
      </FabButton>
    </Container>
  );
};

// fragment
const FragmentContainerHome = createFragmentContainer(Home, {
  planets: graphql`
    fragment Home_planets on Planets @relay(plural: true) {
      _id
      name
      description
      img
    }
  `
});

export default withNavigation(
  createQueryRenderer(FragmentContainerHome, Home, {
    query: graphql`
      query HomeQuery {
        planets {
          ...Home_planets
        }
      }
    `
  })
);
