import React from "react";
import { Text, View, FlatList } from "react-native";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { graphql, createFragmentContainer } from "react-relay";
import { Home_planets } from "./__generated__/Home_planets.graphql";
import { withNavigation } from "react-navigation";

export const navigationOptionsHome = {
  title: "Home"
};

type Props = {
  planets: Home_planets;
};

const Home = () => {
//   const CardItem = ({ value }: any) => {
//     return (
//       <View>
//         <Text>aqui</Text>
//       </View>
//     );
//   };

  return (
    <View>
      {/* <FlatList
        data={planets}
        RenderItem={() => <CardItem />}
        keyExtractor={(v, i) => i.toString()}
      /> */}
    </View>
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
