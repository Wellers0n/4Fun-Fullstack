/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type createPlanetMutationInput = {
    readonly name: string;
    readonly description: string;
    readonly img: string;
    readonly clientMutationId?: string | null;
};
export type CreatePlanetQueryVariables = {
    readonly input: createPlanetMutationInput;
};
export type CreatePlanetQueryResponse = {
    readonly createPlanetMutation: {
        readonly success: string | null;
        readonly error: string | null;
    } | null;
};
export type CreatePlanetQuery = {
    readonly response: CreatePlanetQueryResponse;
    readonly variables: CreatePlanetQueryVariables;
};



/*
mutation CreatePlanetQuery(
  $input: createPlanetMutationInput!
) {
  createPlanetMutation(input: $input) {
    success
    error
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createPlanetMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPlanetMutation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "createPlanetMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "error",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreatePlanetQuery",
    "type": "MutationType",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreatePlanetQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreatePlanetQuery",
    "id": null,
    "text": "mutation CreatePlanetQuery(\n  $input: createPlanetMutationInput!\n) {\n  createPlanetMutation(input: $input) {\n    success\n    error\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '1f318b6afc49d9f35b2002d5861796af';
export default node;
