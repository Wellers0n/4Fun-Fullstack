import React from "react";
import { View, Text } from "react-native";

export const navigationOptionsDetail = () => ({
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
  headerLeft: <View style={{ flex: 1 }} />,
  headerRight: <View style={{ flex: 1 }} />
});

const Detail = () => {
  return (
    <View>
      <Text>Detail screen</Text>
    </View>
  );
};

export default Detail;
