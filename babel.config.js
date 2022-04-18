"use strict";

module.exports = environmentVariables => {
  if (environmentVariables.env('test')) {
    return {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        '@babel/preset-typescript'
      ],
      "plugins": [
        "@babel/plugin-transform-runtime"
      ]
    }
  }
  else {
    return {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        '@babel/preset-typescript'
      ]
    }
  }
}