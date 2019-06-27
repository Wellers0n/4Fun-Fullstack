/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { View, StyleSheet } from "react-native";
import { Form, Item, Label, Text, Button } from "native-base";
import styled from "styled-components";
import Input from "./../components/input";

const ContainerButton = styled(View)`
  background: red;
`;

const Container = styled(View)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: yellow;
`;

const ContainerForm = styled(Form)`
  display: flex;
  background: green;
`;

const Home = () => {
  return (
    <Container>
      <ContainerForm>
        <Input nameInput="Email" />
        <Input nameInput="Password" secureTextEntry={true} />
        <ContainerButton>
          <Button primary>
            <Text> Primary </Text>
          </Button>
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default Home;
