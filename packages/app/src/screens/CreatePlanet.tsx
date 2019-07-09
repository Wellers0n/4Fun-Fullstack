import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { Form } from "native-base";
import styled from "styled-components";
import Input from "./../components/input";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";
import Button from "./../components/button";
import Icon from "react-native-vector-icons/Ionicons";
import IconBody from "react-native-vector-icons/Entypo";
import { NavigationScreenProp } from "react-navigation";
import { createPlanetMutationInput } from "./__generated__/CreatePlanetQuery.graphql";

// Option navigation
export const navigationOptionsCreatePlanet = ({ navigation }: Props) => ({
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
        Create Planet
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

const Container = styled(View)`
  height: 100%;
  background: #463064;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const ContainerButton = styled(View)`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonRegister = styled(Button)`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 35%;
`;

const IconAddPlanet = styled(IconBody)`
  font-size: 150px;
  color: white;
`;

type Props = {
  navigation: NavigationScreenProp<any, any>;
};

const CreatePlanet = ({ navigation }: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function _inputChange(name: any, description: any, image: any) {
    if (name) {
      setName(name);
    } else if (description) {
      setDescription(description);
    } else {
      setImage(image);
    }
  }

  const mutation = graphql`
    mutation CreatePlanetQuery($input: createPlanetMutationInput!) {
      createPlanetMutation(input: $input) {
        success
        error
        planets {
          id
          name
          img
          description
          idUser
        }
      }
    }
  `;

  const createPlanet = () => {
    commitMutation(Environment, {
      mutation,
      variables: { input: { name, description, img: image } },
      onCompleted: async (response: any, errors: any) => {
        if (errors) {
          return Alert.alert(errors.toString());
        }
        if (response.createPlanetMutation.success) {
          return navigation.goBack();
        }

        return Alert.alert(response.createPlanetMutation.error.toString());
      },

      onError: (err: any) => {
        return Alert.alert(err.toString());
      }
    });
  };

  return (
    <Container>
      <IconAddPlanet name="add-to-list" />
      <ContainerForm>
        <Input
          tintColor="white"
          nameInput="Name"
          value={name}
          onChangeText={(value: any) => _inputChange(value, null, null)}
        />
        <Input
          tintColor="white"
          nameInput="Description"
          value={description}
          onChangeText={(value: any) => _inputChange(null, value, null)}
        />
        <Input
          nameInput="Image link"
          value={image}
          onChangeText={(value: any) => _inputChange(null, null, value)}
        />
        <ContainerButton>
          <ButtonRegister
            light
            bordered
            onPress={createPlanet}
            color="#463064"
            nameButton="Create"
          />
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default CreatePlanet;
