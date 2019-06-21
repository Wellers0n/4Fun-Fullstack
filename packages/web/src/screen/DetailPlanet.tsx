import * as React from "react";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
import styled from "styled-components";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { DetailPlanet_planet } from "./__generated__/DetailPlanet_planet.graphql";
import { RouteComponentProps } from "react-router";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
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
  height: 100vh;
  background: #272425;

`;

const Header = styled.div`
  display: flex;
  background: #272425;
  height: 60px;
`;

const ButtonMain = styled(Button)`
  && {
    color: white;
  }
`;

const ContainerCard = styled.div`
  display: flex;
  margin: 20px 0px;
  justify-content:center;
`

const CardMain = styled(Card)`
  &&{
    width: 50%;
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
      <ContainerCard>
        <CardMain>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Planet"
              width="50"
              height="150"
              image={planet.img}
              title="planet"
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {planet.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {planet.description}
            </Typography>
          </CardContent>
        </CardMain>
      </ContainerCard>
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
