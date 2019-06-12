import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import { Variables, GraphQLTaggedNode } from 'relay-runtime'
import Environment from './environment';


type Config = {
    query: GraphQLTaggedNode,
    queriesParams?: (props: object) => Variables,
    variables?: Variables,
    getFragmentProps: (fragmentProps: object) => object;
    loadingView?: React.ReactNode | null;
};

export default function createQueryRenderer(
    FragmentComponent: React.ComponentType,
    Component: React.ComponentType,
    config: Config,
) {
    const { query, queriesParams } = config;

    class QueryRendererWrapper extends React.Component<{}> {
        render() {
            const variables = queriesParams
                ? queriesParams(this.props) :
                config.variables;
            return (
                <QueryRenderer
                    environment={Environment}
                    query={query}
                    variables={variables}
                    render={({ error, props, retry }) => {
                        if (error) {
                            return (
                                <div>error</div>
                            );
                        }
                        if (props) {
                            const fragmentProps = config.getFragmentProps
                                ? config.getFragmentProps(props)
                                : { query: props };
                            return (
                                <FragmentComponent
                                    {...this.props}
                                    {...fragmentProps}
                                />
                            );
                        }
                        if (config.loadingView !== undefined) {
                            return config.loadingView;
                        }
                        return <div>loading...</div>
                    }}
                />
            )
        }
    }
}

