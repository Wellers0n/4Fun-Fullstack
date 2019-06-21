/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SingUpMutationInput = {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type SignupMutationVariables = {
    readonly input: SingUpMutationInput;
};
export type SignupMutationResponse = {
    readonly singUpMutation: {
        readonly msg: string | null;
        readonly userExist: string | null;
    } | null;
};
export type SignupMutation = {
    readonly response: SignupMutationResponse;
    readonly variables: SignupMutationVariables;
};



/*
mutation SignupMutation(
  $input: SingUpMutationInput!
) {
  singUpMutation(input: $input) {
    msg
    userExist
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "SingUpMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "singUpMutation",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input",
                    "type": "SingUpMutationInput!"
                }
            ],
            "concreteType": "SingUpMutationPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "msg",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "userExist",
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
            "name": "SignupMutation",
            "type": "MutationType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "SignupMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "SignupMutation",
            "id": null,
            "text": "mutation SignupMutation(\n  $input: SingUpMutationInput!\n) {\n  singUpMutation(input: $input) {\n    msg\n    userExist\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'b2113868fb4e9efc13571c2db0c455b8';
export default node;
