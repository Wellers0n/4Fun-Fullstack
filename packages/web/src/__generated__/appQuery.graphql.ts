/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type appQueryVariables = {};
export type appQueryResponse = {
    readonly companies: ReadonlyArray<({
        readonly name: string | null;
    }) | null> | null;
};
export type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
};



/*
query appQuery {
  companies {
    name
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
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
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "appQuery",
            "type": "Companies",
            "metadata": null,
            "argumentDefinitions": [],
            "selections": (v0 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "appQuery",
            "argumentDefinitions": [],
            "selections": (v0 /*: any*/)
        },
        "params": {
            "operationKind": "query",
            "name": "appQuery",
            "id": null,
            "text": "query appQuery {\n  companies {\n    name\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '4af591049d2a5eaec22294d6aa734138';
export default node;
