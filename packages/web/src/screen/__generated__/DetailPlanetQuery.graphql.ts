/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type DetailPlanet_planet$ref = any;
export type DetailPlanetQueryVariables = {
    readonly id: string;
};
export type DetailPlanetQueryResponse = {
    readonly planet: {
        readonly " $fragmentRefs": DetailPlanet_planet$ref;
    } | null;
};
export type DetailPlanetQuery = {
    readonly response: DetailPlanetQueryResponse;
    readonly variables: DetailPlanetQueryVariables;
};



/*
query DetailPlanetQuery(
  $id: ID!
) {
  planet(id: $id) {
    ...DetailPlanet_planet
    id
  }
}

fragment DetailPlanet_planet on Planets {
  name
  description
  img
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "id",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "DetailPlanetQuery",
            "type": "QueryType",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "planet",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Planets",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "FragmentSpread",
                            "name": "DetailPlanet_planet",
                            "args": null
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "DetailPlanetQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "planet",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Planets",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                        },
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "description",
                            "args": null,
                            "storageKey": null
                        },
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
                        }
                    ]
                }
            ]
        },
        "params": {
            "operationKind": "query",
            "name": "DetailPlanetQuery",
            "id": null,
            "text": "query DetailPlanetQuery(\n  $id: ID!\n) {\n  planet(id: $id) {\n    ...DetailPlanet_planet\n    id\n  }\n}\n\nfragment DetailPlanet_planet on Planets {\n  name\n  description\n  img\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'e24e9a76e27b87b60217c702062e6a59';
export default node;
