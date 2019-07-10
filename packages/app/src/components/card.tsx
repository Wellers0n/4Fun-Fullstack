import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import imgDistance from "./../images/ic_distance.png";
import imgGravity from "./../images/ic_gravity.png";
import { NavigationScreenProp } from "react-navigation";

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

const Title = styled(Text)`
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
  margin-left: 5px;
  color: #8774af;
`;

type Props = {
  item: any;
  navigation: NavigationScreenProp<any, any>;
};

// FlatList item card render()
const CardItem = ({ item, navigation }: Props) => {
  return (
    <ContainerCard
      onPress={() => navigation.navigate("DetailScreen", { id: item._id })}
    >
      <ContainerImage>
        <Img resizeMode="cover" borderRadius={50} source={{ uri: item.img }} />
      </ContainerImage>
      <ContainerInfo>
        <ContainerMain>
          <Head>
            <Title style={{ fontWeight: "bold" }}>{item.name}</Title>
            <SubTitle style={{ fontWeight: "bold" }}>Milkyway Glaxey</SubTitle>
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
              <TextIcon>0.0b km</TextIcon>
            </ContainerIcon>
            <ContainerIcon>
              <Icon source={imgGravity} resizeMode="contain" />
              <TextIcon>00.0 m/s²</TextIcon>
            </ContainerIcon>
          </Body>
        </ContainerMain>
      </ContainerInfo>
    </ContainerCard>
  );
};

export default CardItem;
