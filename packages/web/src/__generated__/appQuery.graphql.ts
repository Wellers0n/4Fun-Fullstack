/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type appQueryVariables = {
    readonly name: string;
};
export type appQueryResponse = {
    readonly company: ({
        readonly name: string | null;
    }) | null;
};
export type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
};



/*
query appQuery(
  $name: String!
) {
  company(name: $name) {
    name
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "name",
            "type": "String!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "company",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "name",
                    "variableName": "name",
                    "type": "String!"
                }
            ],
            "concreteType": "Company",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
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
            "name": "appQuery",
            "type": "Companies",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "appQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "query",
            "name": "appQuery",
            "id": null,
            "text": "query appQuery(\n  $name: String!\n) {\n  company(name: $name) {\n    name\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '95bd578ad25022af8b39adc9e08c4b11';
export default node;
