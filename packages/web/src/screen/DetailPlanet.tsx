import * as React from "react";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
import styled from "styled-components";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { DetailPlanet_planet } from "./__generated__/DetailPlanet_planet.graphql";
import { RouteComponentProps } from "react-router";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

type Props = {
  planet: DetailPlanet_planet;
  history: any;
};

type PropsRouter = {
  id: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  background: #272425;
  height: 60px;
`;

const ButtonMain = styled(Button)`
  &&{
    // background:red
  }
`

const DetailPlanet = ({ history, planet }: Props) => {
  return (
    <Container>
      <Header>
        <ButtonMain onClick={() => history.push("/home")}>
          <ArrowBack />
        </ButtonMain>
      </Header>
      <div>
        <img src={planet.img} alt="planet" width={200} height={200} />
      </div>
      <h1>{planet.name}</h1>
      <div>{planet.description}</div>
      <button >back</button>
    </Container>
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
