/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Companies_companies$ref = any;
export type Companies_companies = {
    readonly companies: ReadonlyArray<({
        readonly name: string | null;
    }) | null> | null;
    readonly " $refType": Companies_companies$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "Companies_companies",
    "type": "Companies",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
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
        }
    ]
} as any);
(node as any).hash = '0595c57ef06a34ac85efe6491433ba0b';
export default node;
