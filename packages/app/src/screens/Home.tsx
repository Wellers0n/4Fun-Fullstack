/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Form, Item, Label, Text, Button } from "native-base";
import styled from "styled-components";
import Input from "./../components/input";

const ContainerButton = styled(View)`
  background: red;
  margin-top: 30px;
`;

const Container = styled(View)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ContainerForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function _inputChange(email: any, password: any) {
    setEmail(email);
    setPassword(password);
    Alert.alert(password)
  }
  return (
    <Container>
      <ContainerForm>
        <Input
          nameInput="Email"
          value={email}
          onChangeText={(value: any) => _inputChange(value, null)}
        />
        <Input
          nameInput="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(value: any) => _inputChange(null, value)}
        />
        <ContainerButton>
          <Button primary>
            <Text> Login </Text>
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
