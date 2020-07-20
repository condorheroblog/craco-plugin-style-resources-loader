# Craco styles-resources-loader

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This is a [craco](https://github.com/sharegate/craco) plugin to add [style-resources-loader](https://www.npmjs.com/package/style-resources-loader) with [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

Inspired by: https://github.com/tilap/craco-sass-resources-loader

## Installation

```bash
$ yarn add -D craco-styles-resources-loader

# OR

$ npm install craco-styles-resources-loader --save-dev
```

## Usage

`craco-styles-resources-loader` expect a `resources` option containing a string or an array of
string pointing the CSS files your want to load before any CSS/styles file.

```js
const stylesResourcesLoader = require('craco-styles-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: stylesResourcesLoader,
      options: {
        resources: './src/variables.css',
      },
    },
  ],
}
```

You can load multiple CSS resources files too:

```js
const stylesResourcesLoader = require('craco-styles-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: stylesResourcesLoader,
      options: {
        resources: [
          './src/global-variables.css',
          './src/theme-variables.css'
        ],
      },
    },
  ],
}
```