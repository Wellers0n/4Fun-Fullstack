import React, { useEffect } from "react";
import {
  createFragmentContainer,
  graphql,
  QueryRenderer,
  commitMutation
} from "react-relay";
import Environment from "./../relay/environment";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { RouterProps } from "react-router";

const mutation = graphql`
  mutation LoginQuery {
    signInMutation(input: { email: "lucas@hotmail.com", password: "123456" }) {
      token
    }
  }
`;

const Login = ({ history }: RouterProps) => {
  useEffect(() => {
    commitMutation(Environment, {
      mutation,
      variables: {},
      onCompleted: (response, errors) => {
        console.log(response.signInMutation);
      },
      onError: err => console.error(err)
    });
  }, []);

  return (
    <div>
      <span>
        {console.log(history)}
        <div>login</div>
      </span>
    </div>
  );
};

export default Login;
