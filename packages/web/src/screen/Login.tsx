import React, { useState } from "react";
import {
  createFragmentContainer,
  graphql,
  QueryRenderer,
  commitMutation
} from "react-relay";
import Environment from "./../relay/environment";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { RouterProps } from "react-router";
import { LoginQueryResponse } from "./__generated__/LoginQuery.graphql";

const Login = ({ history }: RouterProps) => {
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

  const loginIn = () => {
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
    <div>
      <span>
        {/* {console.log(history)} */}
        <div>login</div>
        <input
          type="text"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={loginIn}>login</button>
        <button onClick={() => history.push('/signup')}>signUp</button>
        <div>{msg}</div>
      </span>
    </div>
  );
};

export default Login;
