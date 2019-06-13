import * as React from "react";
import * as hoistStatics from "hoist-non-react-statics";
import { QueryRenderer } from "react-relay";

import { GraphQLTaggedNode, Variables } from "relay-runtime";

import Environment from "./../relay/environment";

type Config = {
  query: GraphQLTaggedNode;
  queriesParams?: (props: Object) => Object;
  variables?: Variables;
  hideSplash?: boolean;
};

export default function createQueryRenderer<P>(
  FragmentComponent: any,
  Component: React.ComponentType<P>,
  config: Config
) {
  const { query, queriesParams } = config;

  class QueryRendererWrapper extends React.Component<{}> {
    render() {
      const variables = queriesParams
        ? queriesParams(this.props)
        : config.variables;

      return (
        <QueryRenderer
          environment={Environment}
          query={query}
          variables={variables || {}}
          render={({ error, props }) => {
            if (error) {
              return <span>{error.toString()}</span>;
            }

            if (props) {
              
              return <FragmentComponent {...this.props} {...props} />;
            }

            return <span>loading</span>;
          }}
        />
      );
    }
  }

  return hoistStatics(QueryRendererWrapper, Component);
}
