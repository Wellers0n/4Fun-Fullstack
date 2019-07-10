import React from "react";
import { View, Text } from "react-native";
import styled from 'styled-components'
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationScreenProp } from "react-navigation";

export const navigationOptionsDetail = ({navigation}: Props) => ({
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
        Detail
      </Text>
    </View>
  ),
  headerLeft: (
    <View style={{ flex: 1 }}>
      <IconMenuLeft
        onPress={() => navigation.goBack()}
        color="white"
        size={40} 
        name="md-arrow-round-back"
      />
    </View>
  ),
  headerRight: <View style={{ flex: 1 }} />
});

const IconMenuLeft = styled(Icon)`
  padding-left: 10px;
`;

type Props = {
  navigation: NavigationScreenProp<any, any>;
};

const Detail = ({navigation}: Props) => {

  const itemId = navigation.getParam('id');

  return (
    <View>
      <Text>{itemId.toString()}</Text>
    </View>
  );
};

export default Detail;
