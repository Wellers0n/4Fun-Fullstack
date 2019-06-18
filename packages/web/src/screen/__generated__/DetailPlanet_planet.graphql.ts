/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type DetailPlanet_planet$ref = any;
export type DetailPlanet_planet = {
    readonly name: string | null;
    readonly description: string | null;
    readonly img: string | null;
    readonly " $refType": DetailPlanet_planet$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "DetailPlanet_planet",
    "type": "Planets",
    "metadata": null,
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
(node as any).hash = 'd73c4992b6fed68f8a468cf496397277';
export default node;
