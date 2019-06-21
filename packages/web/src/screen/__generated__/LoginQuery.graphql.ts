/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type singInMutationInput = {
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type LoginQueryVariables = {
    readonly input: singInMutationInput;
};
export type LoginQueryResponse = {
    readonly signInMutation: {
        readonly token: string | null;
        readonly error: string | null;
    } | null;
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
mutation LoginQuery(
  $input: singInMutationInput!
) {
  signInMutation(input: $input) {
    token
    error
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "singInMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "signInMutation",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "singInMutationInput!"
                }
            ],
            "concreteType": "singInMutationPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "token",
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
            "name": "LoginQuery",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "LoginQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "LoginQuery",
            "id": null,
            "text": "mutation LoginQuery(\n  $input: singInMutationInput!\n) {\n  signInMutation(input: $input) {\n    token\n    error\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '1f82617a2f2f60a359cb0a6777053bfe';
export default node;
