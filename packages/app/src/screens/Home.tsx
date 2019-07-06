import React from "react";
import {
  Text,
  View,
  YellowBox,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { graphql, createFragmentContainer } from "react-relay";
import { Home_planets } from "./__generated__/Home_planets.graphql";
import { withNavigation } from "react-navigation";
import styled from "styled-components";
import imgDistance from "./../images/ic_distance.png";
import imgGravity from "./../images/ic_gravity.png";

export const navigationOptionsHome = (navigation: any) => ({
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
  headerLeft: <View style={{ flex: 1 }} />,
  headerRight: <View style={{ flex: 1 }} />
});

const Container = styled(View)`
  height: 100%;
  background: #463064;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerCard = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  margin: 10px 0px;
  background: transparent;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerImage = styled(View)`
  background: transparent;
  justify-content: center;
  z-index: 2;
  margin-right: -50px;
`;

const Img = styled(Image)`
  width: 100px;
  height: 100px;
  background: yellow;
`;

const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const ContainerInfo = styled(View)`
  background: #5d4a81;
  height: 130px;
  justify-content: center;
  padding-left: 75px;
  border-radius: 10px;
  width: 80%;
`;

const ContainerMain = styled(View)`
  height: 110px;
  overflow: hidden;
`;

const Title = styled(Text).attrs(() => ({
  fontWeight: "bold"
}))`
  margin-top: 5px;
  font-size: 22;
  color: white;
`;

const SubTitle = styled(Text)`
  margin-top: 2px;
  font-size: 15;
  color: #8774af;
`;

const BorderLine = styled(View)`
  width: 30px;
  margin-top: 8px;
`;

const Head = styled(View)``;

const Body = styled(View)`
  padding-right: 10px;
  height: 50px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const ContainerIcon = styled(View)`
  flex-direction: row;
`;

const TextIcon = styled(Text)`
  margin-left: 5;
  color: "#8774af";
`;

type Props = {
  planets: Home_planets;
};

const Home = ({ planets }: Props) => {
  YellowBox.ignoreWarnings([
    "Warning: Async Storage has been extracted from react-native core"
  ]); // <- insert the warning text here you wish to hide.
  const CardItem = ({ item }: any) => {
    return (
      <ContainerCard>
        <ContainerImage>
          <Img
            resizeMode="cover"
            borderRadius={50}
            source={{ uri: item.img }}
          />
        </ContainerImage>
        <ContainerInfo>
          <ContainerMain>
            <Head>
              <Title style={{ fontWeight: "bold" }}>{item.name}</Title>
              <SubTitle style={{ fontWeight: "bold" }}>
                Milkyway Glaxey
              </SubTitle>
              <BorderLine
                style={{
                  borderBottomColor: "#00baff",
                  borderBottomWidth: 3,
                  borderRadius: 50
                }}
              />
            </Head>
            <Body>
              <ContainerIcon>
                <Icon source={imgDistance} resizeMode="contain" />
                <TextIcon>
                  0.7b km
                </TextIcon>
              </ContainerIcon>
              <ContainerIcon>
                <Icon source={imgGravity} resizeMode="contain" />
                <TextIcon>
                  11.5 m/s²
                </TextIcon>
              </ContainerIcon>
            </Body>
          </ContainerMain>
        </ContainerInfo>
      </ContainerCard>
    );
  };

  return (
    <Container>
      <FlatList
        data={planets}
        keyExtractor={(item, index: number) => index.toString()}
        renderItem={({ item: DataItem, separators }: any) => (
          <CardItem key={separators} item={DataItem} />
        )}
      />
    </Container>
  );
};

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
