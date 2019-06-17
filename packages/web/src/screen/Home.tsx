import * as React from "react";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
// import styled from "styled-components";
import Environment from "./../relay/environment";
import createQueryRenderer from "./../relay/createQueryRenderer";
import { Home_planets } from "./__generated__/Home_planets.graphql";
// import { RouterProps } from "react-router";

type Props = {
  planets: Home_planets;
  history: any;
};

const Home = ({ history, planets }: Props) => {
  
  const RenderItem = ({ value }: any) => {
    return (
      <div>
        <div>
          <img src={value.img} alt="planet" width={200} height={200} />
        </div>
        <h1>{value.name}</h1>
        <div>{value.description}</div>
      </div>
    );
  };

  return (
    <div>
      {planets.map((value, i) => (
        <RenderItem value={value} key={i} />
      ))}
      <button onClick={() => history.push("/create")}>registre planet</button>
    </div>
  );
};

const FragmentContainerHome = createFragmentContainer(Home, {
  planets: graphql`
    fragment Home_planets on Planets @relay(plural: true) {
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
