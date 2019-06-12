import * as React from 'react';
import {
    createFragmentContainer,
    graphql,
    QueryRenderer
} from 'react-relay';
import Environment from './../relay/environment';
// import createQueryRenderer from './../relay/createQueryRenderer';
import { Login_planets } from './__generated__/Login_planets.graphql'

type PostProps = {
    planets: Login_planets
}
const Login = ({ planets }: PostProps) => (
    <div>
        <span>{planets.map((v, i) => <div key={i}>{v.name}</div>)}</span>
    </div>
);
const FragmentContainer = createFragmentContainer(
    Login, {
        planets: graphql`
        fragment Login_planets on Planets @relay(plural: true) {
        name
        description
      },
    `,
    });

const AppQR = () => (
    <QueryRenderer
        variables={{}}
        environment={Environment}
        query={graphql`
         query LoginQuery {
             planets {
                ...Login_planets
             }
         } 
        `}
        render={({ error, props }) => {
            if (error) {
                return <div>Error!</div>;
            }
            if (!props) {
                return <div>Loading...</div>;
            }
            return (
                <div>
                    <FragmentContainer
                        planets={props.planets} />
                </div>

            );
        }}
    />
)

export default AppQR