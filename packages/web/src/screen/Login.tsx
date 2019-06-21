import React, { useState } from "react";
import styled from "styled-components";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";
import { RouterProps } from "react-router";
import { LoginQueryResponse } from "./__generated__/LoginQuery.graphql";
import Input from "./../components/Input";
import MsgError from "./../components/MsgError";
import Button from "./../components/Button";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #272425;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const PlanetIcon = styled.i`
  color: white;
  font-size: 3em;
  display: flex;
  aligm-items: center;
`;

export const Form = styled.form`
  z-index: 1;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.span`
  font-size: 2.5rem;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  padding: 30px 0px;
  color: white;
  text-align: left;
`;

export const InputTitle = styled.span`
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  color: white;
  padding: 10px 0px;
  width: 350px;
`;

export const ContainerBottom = styled.div`
  display: flex;
  margin-top: 25px;
  width: 350px;
  align-items: center;
  justify-content: space-evenly;
`;

const Login = ({ history }: RouterProps) => {
  // useState's()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const mutation = graphql`
    mutation LoginQuery($input: singInMutationInput!) {
      signInMutation(input: $input) {
        token
        error
      }
    }
  `;

  const loginIn = (e: any) => {
    e.preventDefault();
    commitMutation(Environment, {
      mutation,
      variables: { input: { email, password } },
      onCompleted: (response: LoginQueryResponse, errors) => {
        if (errors) return console.log(errors);

        const token = response.signInMutation.token;
        if (token) {
          localStorage.setItem("token", token);
          return history.push("/home");
        }
        console.log(response.signInMutation.error);
        return setMsg(response.signInMutation.error);
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
      <Form onSubmit={loginIn}>
        <Title>Login</Title>
        <InputTitle>Email</InputTitle>
        <Input
          iconName="fas fa-envelope"
          type="email"
          placeholder="Email"
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
          <Button onClick={() => history.push("/signup")} name="Registre" />
          <Button verse type="submit" name="Login" />
        </ContainerBottom>
      </Form>
      <MsgError msg={msg} />
    </Container>
  );
};

export default Login;
