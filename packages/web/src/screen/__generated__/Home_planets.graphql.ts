/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Home_planets$ref = any;
export type Home_planets = ReadonlyArray<{
    readonly name: string | null;
    readonly description: string | null;
    readonly img: string | null;
    readonly " $refType": Home_planets$ref;
}>;



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "Home_planets",
    "type": "Planets",
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
        },
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "img",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = '848d142c9302edb713bccf2479219d2d';
export default node;
