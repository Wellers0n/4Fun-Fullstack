/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type SingUpUserLoginWithEmailInput = {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly clientMutationId?: string | null;
};
export type SignupMutationVariables = {
    readonly input: SingUpUserLoginWithEmailInput;
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
  $input: SingUpUserLoginWithEmailInput!
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
            "type": "SingUpUserLoginWithEmailInput!",
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
                    "type": "SingUpUserLoginWithEmailInput!"
                }
            ],
            "concreteType": "SingUpUserLoginWithEmailPayload",
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
            "text": "mutation SignupMutation(\n  $input: SingUpUserLoginWithEmailInput!\n) {\n  singUpMutation(input: $input) {\n    msg\n    userExist\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '3186729c27259fbbc864a3469753bfea';
export default node;
