/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type appQueryVariables = {
    readonly name: string;
};
export type appQueryResponse = {
    readonly company: ({
        readonly name: string | null;
        readonly img: string | null;
        readonly id: string;
        readonly _id: string | null;
        readonly product: ReadonlyArray<({
            readonly name: string | null;
            readonly _id: string | null;
            readonly price: number | null;
            readonly idCompany: string | null;
        }) | null> | null;
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
    img
    id
    _id
    product {
      name
      _id
      price
      idCompany
    }
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
    ], v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any), v2 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
    } as any), v3 = [
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
                (v1 /*: any*/),
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "img",
                    "args": null,
                    "storageKey": null
                },
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                },
                (v2 /*: any*/),
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "product",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "products",
                    "plural": true,
                    "selections": [
                        (v1 /*: any*/),
                        (v2 /*: any*/),
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "price",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "idCompany",
                            "args": null,
                            "storageKey": null
                        }
                    ]
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
            "selections": (v3 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "appQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v3 /*: any*/)
        },
        "params": {
            "operationKind": "query",
            "name": "appQuery",
            "id": null,
            "text": "query appQuery(\n  $name: String!\n) {\n  company(name: $name) {\n    name\n    img\n    id\n    _id\n    product {\n      name\n      _id\n      price\n      idCompany\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '07ef55ebec208080cab67561b3c1ed5e';
export default node;
