import React, { useState } from "react";
import styled from "styled-components";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";
import { RouterProps } from "react-router";
import { LoginQueryResponse } from "./__generated__/LoginQuery.graphql";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #272425;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = styled.div`
  height: 80px;
  width: 100%;
`;

const PlanetIcon = styled.i`
  color: white;
  font-size: 5em;
  display: flex;
  aligm-items: center;
  padding-left: 20px;
`;

const RocketIcon = styled.i`
  z-index: -1;
  color: gray;
  font-size: 30em;
  position: absolute;
  opacity: 0.3;
  margin-bottom: -55px;
`;

const Form = styled.form`
  z-index: 1;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: green;
  height: 450px;
  width: 400px;
  background: white;
  position: relative;
  overflow: hidden;
`;

const Title = styled.span`
  font-size: 2.5rem;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  padding: 20px 0px;
  color: #272425;
  text-align: center;
`;

const Input = styled.input`
  width: 350px;
  height: 45px;
  margin-bottom: 15px;
  font-size: 1rem;
  background: #272425;
  border: none;
  color: white;
  padding-left: 7px;
  box-sizing: border-box;
`;

const InputTitle = styled.span`
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  color: #272425;
  width: 350px;
`;

const Msg = styled.span`
  font-size: 1.2rem;
  font-family: "Nunito", sans-serif;
  color: red;
  margin: 20px 0px;
`;

const ContainerBottom = styled.div`
  display: flex;
`;

const Button = styled.button`

`

const Login = ({ history }: RouterProps) => {
  // useState's()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const mutation = graphql`
    mutation LoginQuery($input: UserLoginWithEmailInput!) {
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

  return (
    <Container>
      <Header>
        <PlanetIcon className="fas fa-globe-americas" />
      </Header>
      <Form onSubmit={loginIn}>
        <RocketIcon className="fas fa-rocket" />
        <Title>Login</Title>
        <InputTitle>Email</InputTitle>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputTitle>Password</InputTitle>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ContainerBottom>
          <Button type="submit">login</Button>
          <Button onClick={() => history.push("/signup")}>registre</Button>
        </ContainerBottom>
      </Form>
      <Msg>{msg}</Msg>
    </Container>
  );
};

export default Login;
