/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Login_planets$ref = any;
export type Login_planets = ReadonlyArray<{
    readonly name: string | null;
    readonly description: string | null;
    readonly " $refType": Login_planets$ref;
}>;



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "Login_planets",
    "type": "PlanetsType",
    "metadata": {
        "plural": true
    },
    "argumentDefinitions": [],
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
        }
    ]
} as any);
(node as any).hash = '59658e1bd5e3d88bdaaaa5eacaf6b622';
export default node;
