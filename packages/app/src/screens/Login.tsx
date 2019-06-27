import React, { useState } from "react";
import { View, StyleSheet, Image, AsyncStorage, Alert } from "react-native";
import { Form, Text, Button } from "native-base";
import styled from "styled-components";
import Input from "./../components/input";
import { LoginQueryResponse } from "./__generated__/LoginQuery.graphql";
import PlanetIcon from "./../images/planet.png";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";

export const navigationOptionsLogin = {
  title: "Login"
};

const ContainerButton = styled(View)`
  background: red;
  margin-top: 30px;
`;

const Container = styled(View)`
  display: flex;
  height: 100%;
  margin-top: 30px;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = graphql`
    mutation LoginQuery($input: singInMutationInput!) {
      signInMutation(input: $input) {
        token
        error
      }
    }
  `;

  const loginIn = () => {
    commitMutation(Environment, {
      mutation,
      variables: { input: { email, password } },
      onCompleted: (response: any, errors:any) => {
        if (errors) {
           Alert.alert(errors.toString())
        } 

        const token = response.signInMutation.token;
        if (token) {
          AsyncStorage.setItem("token", token);
          return navigation.navigate("Home");
        }
        Alert.alert(response.signInMutation.error.toString());
      },
      
      onError: (err: any) => {
        return Alert.alert(err.toString())
      }
    });
  }
  

  function _inputChange(email: any, password: any) {
    if (email) {
      setEmail(email);
    } else {
      setPassword(password);
    }
  }

  return (
    <Container>
      <ContainerForm>
        <Image source={PlanetIcon} />
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
          <Button onPress={loginIn} primary>
            <Text> Login </Text>
          </Button>
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default Login


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

