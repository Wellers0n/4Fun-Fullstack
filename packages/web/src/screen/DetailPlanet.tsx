import * as React from "react";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
// import styled from "styled-components";
import Environment from "./../relay/environment";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { DetailPlanet_planet } from "./__generated__/DetailPlanet_planet.graphql";
import { RouteComponentProps } from "react-router";

type Props = {
  planet: DetailPlanet_planet;
  history: any;
};

type PropsRouter = {
  id: string;
};

const DetailPlanet = ({ history, planet }: Props) => {
  return (
    <div>
      <div>
        <img src={planet.img} alt="planet" width={200} height={200} />
      </div>
      <h1>{planet.name}</h1>
      <div>{planet.description}</div>
      <button onClick={() => history.push("/home")}>back</button>
    </div>
  );
};

const FragmentContainerDetail = createFragmentContainer(DetailPlanet, {
  planet: graphql`
    fragment DetailPlanet_planet on Planets {
      name
      description
      img
    }
  `
});

const DetailQueryRender = createQueryRenderer(
  FragmentContainerDetail,
  DetailPlanet,
  {
    query: graphql`
      query DetailPlanetQuery($id: ID!) {
        planet(id: $id) {
          ...DetailPlanet_planet
        }
      }
    `,
    queriesParams: ({ match }: RouteComponentProps<PropsRouter>) => ({
      id: match.params.id
    })
  }
);

export default DetailQueryRender;
