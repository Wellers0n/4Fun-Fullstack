/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Home_planets$ref = any;
export type HomeQueryVariables = {};
export type HomeQueryResponse = {
    readonly planets: ReadonlyArray<{
        readonly " $fragmentRefs": Home_planets$ref;
    } | null> | null;
};
export type HomeQuery = {
    readonly response: HomeQueryResponse;
    readonly variables: HomeQueryVariables;
};



/*
query HomeQuery {
  planets {
    ...Home_planets
    id
  }
}

fragment Home_planets on Planets {
  _id
  name
  description
  img
}
*/

const node: ConcreteRequest = ({
    "kind": "Request",
    "fragment": {
        "kind": "Fragment",
        "name": "HomeQuery",
        "type": "QueryType",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "planets",
                "storageKey": null,
                "args": null,
                "concreteType": "Planets",
                "plural": true,
                "selections": [
                    {
                        "kind": "FragmentSpread",
                        "name": "Home_planets",
                        "args": null
                    }
                ]
            }
        ]
    },
    "operation": {
        "kind": "Operation",
        "name": "HomeQuery",
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "planets",
                "storageKey": null,
                "args": null,
                "concreteType": "Planets",
                "plural": true,
                "selections": [
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "_id",
                        "args": null,
                        "storageKey": null
                    },
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                    },
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
                    },
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "img",
                        "args": null,
                        "storageKey": null
                    },
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "id",
                        "args": null,
                        "storageKey": null
                    }
                ]
            }
        ]
    },
    "params": {
        "operationKind": "query",
        "name": "HomeQuery",
        "id": null,
        "text": "query HomeQuery {\n  planets {\n    ...Home_planets\n    id\n  }\n}\n\nfragment Home_planets on Planets {\n  _id\n  name\n  description\n  img\n}\n",
        "metadata": {}
    }
} as any);
(node as any).hash = '6f509daddb42cd8447dec4409e78c3c2';
export default node;
