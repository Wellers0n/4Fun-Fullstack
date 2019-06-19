import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";
import { RouterProps } from "react-router";
import { SignupMutationResponse } from "./__generated__/SignupMutation.graphql";
import Input from "./../components/Input";
import MsgError from "./../components/MsgError";
import Button from "./../components/Button";
import {
  Container,
  Title,
  PlanetIcon,
  InputTitle,
  ContainerBottom,
  Header,
  Form
} from "./Login";

const Signup = ({ history }: RouterProps) => {
  // useState's
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  // mutation
  const mutation = graphql`
    mutation SignupMutation($input: SingUpUserLoginWithEmailInput!) {
      singUpMutation(input: $input) {
        msg
        userExist
      }
    }
  `;

  const registre = (e:any) => {
    e.preventDefault()
    commitMutation(Environment, {
      mutation,
      variables: { input: { name, email, password } },
      onCompleted: (response: SignupMutationResponse, errors) => {
        if (errors) return console.log(errors);
        const msg = response.singUpMutation.msg;
        const userExist = response.singUpMutation.userExist;
        if (msg) {
          console.log('sucess create user');
          return setTimeout(() => {
            history.push("/");
          }, 1000);
        }

        return setMsg(userExist);
      },
      onError: err => console.error(err)
    });
  };

  type ValueChange = {
    value: string;
  };

  type onChangeValue = {
    target: ValueChange;
  };

  return (
    <Container>
        <Header>
          <PlanetIcon className="fas fa-globe-americas" />
        </Header>
        <Form onSubmit={registre}>
          <Title>Registre</Title>
          <InputTitle>Name</InputTitle>
          <Input
            iconName="fas fa-user"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e: onChangeValue) => setName(e.target.value)}
          />
          <InputTitle>E-mail</InputTitle>
          <Input
            iconName="fas fa-envelope"
            type="email"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(e: onChangeValue) => setEmail(e.target.value)}
          />
          <InputTitle>Password</InputTitle>
          <Input
            iconName="fas fa-unlock-alt"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e: onChangeValue) => setPassword(e.target.value)}
          />
          <ContainerBottom>
            <Button onClick={() => history.push("/")} name="Back" />
            <Button verse type="submit" name="Registre" />
          </ContainerBottom>
        </Form>
        <MsgError msg={msg} />
      </Container>
  );
};

export default Signup;
