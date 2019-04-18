/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type company_company$ref = any;
export type company_company = {
    readonly name: string | null;
    readonly " $refType": company_company$ref;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "company_company",
    "type": "Company",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
        {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
        }
    ]
} as any);
(node as any).hash = 'c359d27134f012867879f5b5c4732ab5';
export default node;
