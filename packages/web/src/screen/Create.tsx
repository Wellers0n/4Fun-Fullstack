import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import Environment from "./../relay/environment";
import { RouterProps } from "react-router";

const Signup = ({ history }: RouterProps) => {
  // useState's
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [msg, setMsg] = useState("");
  const [exist, setExist] = useState("");

  // mutation
  const mutation = graphql`
    mutation CreateMutation($input: createPlanetMutationInput!) {
        createPlanetMutation(input: $input) {
        success
        error
      }
    }
  `;

  const registrePlanet = () => {
    commitMutation(Environment, {
      mutation,
      variables: { input: { name, description, img } },
      onCompleted: (response, errors) => {
        if (errors) return console.log(errors);
        const success = response.createPlanetMutation.success;
        const error = response.createPlanetMutation.error;
        if (success) {
          setMsg(success);
          return setTimeout(() => {
            history.push("/home");
          }, 800);
        }

        return setExist(error);
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
          placeholder="name planet"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="description planet"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="link img, ex: https://pixelsquid.com/planets.jpg"
          name="img"
          value={img}
          onChange={e => setImg(e.target.value)}
        />
        <button onClick={registrePlanet}>registre planet</button>
        <button onClick={() => history.push('/home')}>back</button>

        <div>{(msg && msg) || (exist && exist)}</div>
      </span>
    </div>
  );
};

export default Signup;
