import React, { useState } from "react";
import { graphql, commitMutation } from "react-relay";
import Environment from "../relay/environment";
import { RouterProps } from "react-router";
import Input from "../components/Input";
// import MsgError from "../components/MsgError";
import Button from "../components/Button";
import { CreateMutationResponse } from "./__generated__/CreateMutation.graphql";
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
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  // const [msg, setMsg] = useState("");
  // const [exist, setExist] = useState("");

  // mutation
  const mutation = graphql`
    mutation CreateMutation($input: createPlanetMutationInput!) {
      createPlanetMutation(input: $input) {
        success
        error
      }
    }
  `;

  const registrePlanet = async (e: any) => {
    e.preventDefault();

    commitMutation(Environment, {
      mutation,
      variables: { input: { name, description, img } },
      onCompleted: (response: CreateMutationResponse, errors: any) => {
        if (errors) return console.log(errors);
        const success = response.createPlanetMutation.success;

        if (success) {
          console.log("success");
          return setTimeout(() => {
            history.push("/home");
          }, 800);
        }
        return console.log("error");
      },
      onError: (err: string) => console.error(err)
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
      <Form onSubmit={registrePlanet}>
        <Title>Registre Planet</Title>
        <InputTitle>Name</InputTitle>
        <Input
          iconName="fas fa-globe-americas"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e: onChangeValue) => setName(e.target.value)}
        />
        <InputTitle>Description</InputTitle>
        <Input
          iconName="fas fa-align-left"
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e: onChangeValue) => setDescription(e.target.value)}
        />
        <InputTitle>Link image</InputTitle>
        <Input
          iconName="fas fa-images"
          type="text"
          name="img"
          placeholder="Image"
          value={img}
          onChange={(e: onChangeValue) => setImg(e.target.value)}
        />
        <ContainerBottom>
          <Button onClick={() => history.push("/home")} name="Back" />
          <Button verse type="submit" name="Registre" />
        </ContainerBottom>
      </Form>
    </Container>
  );
};

export default Signup;
