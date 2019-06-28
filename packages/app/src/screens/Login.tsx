import React, { useState } from "react";
import { View, AsyncStorage, Image, Alert } from "react-native";
import { Form } from "native-base";
import styled from "styled-components";
import Input from "./../components/input";
// import { LoginQueryResponse } from "./__generated__/LoginQuery.graphql";
import PlanetIcon from "./../images/planet.png";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";
import Button from "./../components/button";

export const navigationOptionsLogin = {
  title: "Login"
};

const Container = styled(View)`
  display: flex;
  height: 100%;
  background: #272425;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width:90%;
`;

const ContainerButton = styled(View)`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonRegister = styled(Button)`
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;
const ButtonLogin = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const IconPlanet = styled(Image)`
  width: 200px;
  height: 200px;
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
      onCompleted: (response: any, errors: any) => {
        if (errors) {
          Alert.alert(errors.toString());
        }

        const token = response.signInMutation.token;
        if (token) {
          AsyncStorage.setItem("token", token);
          return navigation.navigate("HomeScreen");
        }
        Alert.alert(response.signInMutation.error.toString());
      },

      onError: (err: any) => {
        return Alert.alert(err.toString());
      }
    });
  };

  function _inputChange(email: any, password: any) {
    if (email) {
      setEmail(email);
    } else {
      setPassword(password);
    }
  }

  return (
    <Container>
      <IconPlanet source={PlanetIcon} />
      <ContainerForm>
        <Input
          tintColor="white"
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
          <ButtonRegister
            light
            onPress={() => navigation.navigate("RegisterScreen")}
            color="#272425"
            nameButton="register"
          />
          <ButtonLogin
            light
            bordered
            onPress={loginIn}
            color="#272425"
            nameButton="login"
          />
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default Login;
