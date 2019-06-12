/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Login_planets$ref = any;
export type LoginQueryVariables = {};
export type LoginQueryResponse = {
    readonly planets: ReadonlyArray<{
        readonly " $fragmentRefs": Login_planets$ref;
    } | null> | null;
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
query LoginQuery {
  planets {
    ...Login_planets
    id
  }
}

fragment Login_planets on PlanetsType {
  name
  description
}
*/

const node: ConcreteRequest = ({
    "kind": "Request",
    "fragment": {
        "kind": "Fragment",
        "name": "LoginQuery",
        "type": "Planets",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "planets",
                "storageKey": null,
                "args": null,
                "concreteType": "PlanetsType",
                "plural": true,
                "selections": [
                    {
                        "kind": "FragmentSpread",
                        "name": "Login_planets",
                        "args": null
                    }
                ]
            }
        ]
    },
    "operation": {
        "kind": "Operation",
        "name": "LoginQuery",
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "planets",
                "storageKey": null,
                "args": null,
                "concreteType": "PlanetsType",
                "plural": true,
                "selections": [
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
        "name": "LoginQuery",
        "id": null,
        "text": "query LoginQuery {\n  planets {\n    ...Login_planets\n    id\n  }\n}\n\nfragment Login_planets on PlanetsType {\n  name\n  description\n}\n",
        "metadata": {}
    }
} as any);
(node as any).hash = 'd9656da4a2b30f1bd9e15cd9f1f34886';
export default node;
