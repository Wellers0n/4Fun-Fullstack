/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type Companies_companies$ref = any;
export type appQueryVariables = {};
export type appQueryResponse = {
    readonly " $fragmentRefs": Companies_companies$ref;
};
export type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
};



/*
query appQuery {
  ...Companies_companies
}

fragment Companies_companies on Companies {
  companies {
    name
  }
}
*/

const node: ConcreteRequest = ({
    "kind": "Request",
    "fragment": {
        "kind": "Fragment",
        "name": "appQuery",
        "type": "Companies",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "FragmentSpread",
                "name": "Companies_companies",
                "args": null
            }
        ]
    },
    "operation": {
        "kind": "Operation",
        "name": "appQuery",
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "companies",
                "storageKey": null,
                "args": null,
                "concreteType": "Company",
                "plural": true,
                "selections": [
                    {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                    }
                ]
            }
        ]
    },
    "params": {
        "operationKind": "query",
        "name": "appQuery",
        "id": null,
        "text": "query appQuery {\n  ...Companies_companies\n}\n\nfragment Companies_companies on Companies {\n  companies {\n    name\n  }\n}\n",
        "metadata": {}
    }
} as any);
(node as any).hash = '38e96f50a2f282b9abe6f8d9e0bd168c';
export default node;
