/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type LoginQueryVariables = {};
export type LoginQueryResponse = {
    readonly signInMutation: {
        readonly token: string | null;
    } | null;
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
mutation LoginQuery {
  signInMutation(input: {email: "lucas@hotmail.com", password: "123456"}) {
    token
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "signInMutation",
            "storageKey": "signInMutation(input:{\"email\":\"lucas@hotmail.com\",\"password\":\"123456\"})",
            "args": [
                {
                    "kind": "Literal",
                    "name": "input",
                    "value": {
                        "email": "lucas@hotmail.com",
                        "password": "123456"
                    },
                    "type": "UserLoginWithEmailInput!"
                }
            ],
            "concreteType": "UserLoginWithEmailPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "token",
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
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": [],
            "selections": (v0 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "LoginQuery",
            "argumentDefinitions": [],
            "selections": (v0 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "LoginQuery",
            "id": null,
            "text": "mutation LoginQuery {\n  signInMutation(input: {email: \"lucas@hotmail.com\", password: \"123456\"}) {\n    token\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '27ed9beafdfed17b0edd5c9f3a6f10a8';
export default node;
