/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Home_planets$ref = any;
export type Home_planets = ReadonlyArray<{
    readonly _id: string | null;
    readonly name: string | null;
    readonly description: string | null;
    readonly img: string | null;
    readonly " $refType": Home_planets$ref;
}>;



const node: ReaderFragment = {
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
      "name": "_id",
      "args": null,
      "storageKey": null
    },
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
};
(node as any).hash = '89f1d2045192ade8a835915c7a01212f';
export default node;
