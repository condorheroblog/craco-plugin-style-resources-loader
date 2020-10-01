# [craco-plugin-style-resources-loader](https://github.com/condorheroblog/craco-plugin-style-resources-loader) 🤡

<p align="center">
    <a href="https://github.com/condorheroblog/craco-plugin-style-resources-loader"><img src="https://github.com/condorheroblog/craco-plugin-style-resources-loader/blob/master/index.jpg" alt="banner"></a>
</p>
<p align="center">
    <a href="https://github.com/condorheroblog/craco-plugin-style-resources-loader/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/craco-plugin-style-resources-loader" alt="MIT License"></a>
    <a href="https://www.npmjs.com/package/craco-plugin-style-resources-loader"><img src="https://img.shields.io/npm/v/craco-plugin-style-resources-loader" alt="npm version"></a>
    <a href="https://npmcharts.com/compare/craco-plugin-style-resources-loader?interval=7"><img src="https://img.shields.io/npm/dw/craco-plugin-style-resources-loader" alt="download"></a>
    <a><img src="https://img.shields.io/bundlephobia/min/craco-plugin-style-resources-loader?color=orange" alt="minified"><a>
    <a href="https://github.com/condorheroblog/craco-plugin-style-resources-loader/issues"><img src="https://img.shields.io/github/issues/condorheroblog/craco-plugin-style-resources-loader" alt="
GitHub issues"><a>
    <a href="https://github.com/condorheroblog/craco-plugin-style-resources-loader/fork"><img src="https://img.shields.io/github/forks/condorheroblog/craco-plugin-style-resources-loader" alt="GitHub forks"><a>
    <a><img src="https://img.shields.io/github/stars/condorheroblog/craco-plugin-style-resources-loader" alt="GitHub stars"><a>
</p>

If you want to automatically import files (for colors, variables, mixins...) in you project, you can use the `craco-plugin-style-resources-loader` . *in fact introduce css global variables is useful in you project*.


> This is a [craco](https://github.com/sharegate/craco) plugin to add [Style Resources Loader](https://github.com/yenshih/style-resources-loader) with [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

Inspired by: [craco-sass-resources-loader](https://github.com/tilap/craco-sass-resources-loader) 、 [craco-style-resources-loader](https://github.com/spacedawwwg/craco-style-resources-loader#readme) and [vue-cli Working with CSS](https://cli.vuejs.org/guide/css.html)

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

If you only use one less resources file，in `craco.config.js` file, you need to use this:

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
