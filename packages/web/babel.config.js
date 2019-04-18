module.exports = {
    "presets": [
        "@babel/env",
        "@babel/preset-react",
        "@babel/preset-typescript"
       
    ],
    "plugins": [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread",
        "@babel/plugin-transform-runtime",
        "react-hot-loader/babel",
        [
            'relay',
            {
              schema: './data/schema.json',
            },
        ],
    ]
}