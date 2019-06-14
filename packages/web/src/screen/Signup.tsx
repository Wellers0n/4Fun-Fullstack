import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";
import { RouterProps } from "react-router";
import { SignupMutationResponse } from "./__generated__/SignupMutation.graphql";

const Signup = ({ history }: RouterProps) => {
  // useState's
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [exist, setExist] = useState("");

  // mutation
  const mutation = graphql`
    mutation SignupMutation($input: SingUpUserLoginWithEmailInput!) {
      singUpMutation(input: $input) {
        msg
        userExist
      }
    }
  `;

  const registre = () => {
    commitMutation(Environment, {
      mutation,
      variables: { input: { name, email, password } },
      onCompleted: (response: SignupMutationResponse, errors) => {
        if (errors) return console.log(errors);
        const msg = response.singUpMutation.msg;
        const userExist = response.singUpMutation.userExist;
        if (msg) {
          setMsg(msg);
          return setTimeout(() => {
            history.push("/");
          }, 1000);
        }

        return setExist(userExist);
      },
      onError: err => console.error(err)
    });
  };

  return (
    <div>
      <span>
        {/* {console.log(history)} */}
        <div>registre</div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
        <button onClick={registre}>registre</button>
        <div>{(msg && msg) || (exist && exist)}</div>
      </span>
    </div>
  );
};

export default Signup;
