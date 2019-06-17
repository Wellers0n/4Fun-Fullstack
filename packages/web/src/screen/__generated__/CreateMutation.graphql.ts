/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type createPlanetMutationInput = {
    readonly name: string;
    readonly description: string;
    readonly img: string;
    readonly clientMutationId?: string | null;
};
export type CreateMutationVariables = {
    readonly input: createPlanetMutationInput;
};
export type CreateMutationResponse = {
    readonly createPlanetMutation: {
        readonly success: string | null;
        readonly error: string | null;
    } | null;
};
export type CreateMutation = {
    readonly response: CreateMutationResponse;
    readonly variables: CreateMutationVariables;
};



/*
mutation CreateMutation(
  $input: createPlanetMutationInput!
) {
  createPlanetMutation(input: $input) {
    success
    error
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "createPlanetMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "createPlanetMutation",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "createPlanetMutationInput!"
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
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "CreateMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "CreateMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "CreateMutation",
            "id": null,
            "text": "mutation CreateMutation(\n  $input: createPlanetMutationInput!\n) {\n  createPlanetMutation(input: $input) {\n    success\n    error\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'ea0edcc3c1ab341024364585b23eed80';
export default node;
