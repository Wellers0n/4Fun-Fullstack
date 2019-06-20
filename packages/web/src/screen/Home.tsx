import * as React from "react";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
import styled from "styled-components";
import ButtonDetail from "./../components/Button";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { Home_planets } from "./__generated__/Home_planets.graphql";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Add, Navigation } from "@material-ui/icons";
import {
  Icon,
  Fab,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const Button = styled(Fab)`
  && {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #272425;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;

const ContainerCard = styled.div`
  width: 400px;
  height: 500px
`



type Props = {
  planets: Home_planets;
  history: any;
};

const Home = ({ history, planets }: Props) => {
  // const classes = useStyles();

  const RenderItem = ({ value }: any) => {
    return (
      <Card  style={{marginBottom: '10px'}} onClick={() => history.push(`detail/${value._id}`)}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Planet"
            width="50"
            height="150"
            image={value.img}
            title="planet"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {value.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {value.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  return (
      <Container>
        <ContainerCard>
        {planets.map((value, i) => (
          <RenderItem value={value} key={i} />
        ))}
        </ContainerCard>
      <Button color="primary" onClick={() => history.push("/create")}>
        <Add />
      </Button>
    </Container>
  );
};

const FragmentContainerHome = createFragmentContainer(Home, {
  planets: graphql`
    fragment Home_planets on Planets @relay(plural: true) {
      _id
      name
      description
      img
    }
  `
});

const HomeQueryRender = createQueryRenderer(FragmentContainerHome, Home, {
  query: graphql`
    query HomeQuery {
      planets {
        ...Home_planets
      }
    }
  `
});

export default HomeQueryRender;

// <QueryRenderer
//   environment={Environment}
//   variables={{}}
//   query={graphql`
//     query HomeQuery {
//       planets {
//         ...Home_planets
//       }
//     }
//   `}
//   render={({ error, props }) => {
//     if (error) {
//       return <div>Error!</div>;
//     }
//     if (!props) {
//       return <div>Loading...</div>;
//     }
//     return (
//       <div>
//         <FragmentContainerHome planets={props.planets} {...props} />
//       </div>
//     );
//   }}
// />
