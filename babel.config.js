module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],

  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "react-hot-loader/babel"
  ]
}