import React, { useState } from "react";
import { AsyncStorage, View, Alert, Text } from "react-native";
import { Form } from "native-base";
import styled from "styled-components";
import Input from "./../components/input";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";
import Button from "./../components/button";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationScreenProp } from "react-navigation";

// Option navigation
export const navigationOptionsRegister = ({navigation}: Props) => ({
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
        Register
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

const ButtonBack = styled(Button)`
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  width: 35%;

`;
const ButtonRegister = styled(Button)`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 35%;
`;

const IconMeteor = styled(Icon)`
  font-size: 150px;
  color: white;
`;

type Props = {
  navigation: NavigationScreenProp<any, any>;
};

const Register = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function _inputChange(name: any, email: any, password: any) {
    if (name) {
      setName(name);
    } else if (email) {
      setEmail(email);
    } else {
      setPassword(password);
    }
  }

  return (
    <Container>
      <IconMeteor name="md-planet" />
      <ContainerForm>
        <Input
          tintColor="white"
          nameInput="name"
          value={name}
          onChangeText={(value: any) => _inputChange(value, null, null)}
        />
        <Input
          tintColor="white"
          nameInput="Email"
          value={email}
          onChangeText={(value: any) => _inputChange(null, value, null)}
        />
        <Input
          nameInput="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(value: any) => _inputChange(null, null, value)}
        />
        <ContainerButton>
          <ButtonBack
            light
            onPress={() => navigation.goBack()}
            color="#463064"
            nameButton="back"
          />
          <ButtonRegister
            light
            bordered
            // onPress={loginIn}
            color="#463064"
            nameButton="register"
          />
        </ContainerButton>
      </ContainerForm>
    </Container>
  );
};

export default Register;
