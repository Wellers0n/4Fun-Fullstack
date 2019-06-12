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
        }
    ]
} as any);
(node as any).hash = 'c27704b415fff1caba8c541d4b83597c';
export default node;
