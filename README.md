# [craco-plugin-style-resources-loader](https://github.com/condorheroblog/craco-plugin-style-resources-loader) 🤡

![craco-plugin-style-resources-loader](https://github.com/condorheroblog/craco-plugin-style-resources-loader/blob/master/index.jpg)


[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[![craco-plugin-style-resources-loader](https://img.shields.io/badge/craco--plugin--style--resources--loader-v1.0.0-brightgreen)](https://www.npmjs.com/package/craco-plugin-style-resources-loader)


If you want to automatically import files (for colors, variables, mixins...) in you project, you can use the `craco-plugin-style-resources-loader` . *in fact introduce css global variables is useful in you project*.


> This is a [craco](https://github.com/sharegate/craco) plugin to add [Style Resources Loader](https://github.com/yenshih/style-resources-loader) with [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

Inspired by: [craco-sass-resources-loader](https://github.com/tilap/craco-sass-resources-loader) 、 [style-resources-loader](https://github.com/spacedawwwg/craco-style-resources-loader#readme) and [vue-cli Working with CSS](https://cli.vuejs.org/guide/css.html)

## Introduction

Add style-resources-loader to your react project easier.

## Installation

```bash
$ yarn add -D craco-plugin-style-resources-loader

# OR

$ npm install craco-plugin-style-resources-loader --save-dev
```

## Usage

`craco-plugin-style-resources-loader` expect a `resources` option containing a string or an array of
string pointing the `scss/sass/css/less` files your want to load before any `scss/sass/css/less` file.


## Examples

e.g. `use less processor`

If you only use one less file：

```js
const cracoPluginStyleResourcesLoader = require('craco-plugin-style-resources-loader');
const path = require('path');

module.exports = {
    plugin: cracoLessResourcesLoader,
    options: {
        patterns: path.join(__dirname, 'src/less/common.less'),
        /* 
            Please enter supported CSS processor type
            1. if u use css processor，please type css string
            2. if u use less processor，please type less string
            3. if u use sass or scss processor，please type sass or scss string，Choose one of the two
            4. if u use stylus processor，please type stylus string
        */
        styleType: 'less'
    }
};
```

You can load multiple `scss/sass/css/less` resources files too:

```js
const cracoPluginStyleResourcesLoader = require('craco-plugin-style-resources-loader');
const path = require('path');

module.exports = {
    plugin: cracoLessResourcesLoader,
    options: {
        patterns: [
			path.join(__dirname, 'src/less/common.less'),
			path.join(__dirname, 'src/less/global.less')
		],
        /* 
            Please enter supported CSS processor type
            1. if u use css processor，please type css string
            2. if u use less processor，please type less string
            3. if u use sass or scss processor，please type sass or scss string，Choose one of the two
            4. if u use stylus processor，please type stylus string
        */
        styleType: 'less'
    }
};
```


Learn more about the configuration of **options** ，Please click on the link 👉 [style-resources-loader](https://www.npmjs.com/package/style-resources-loader)
