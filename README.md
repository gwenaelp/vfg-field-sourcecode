# vfg-field-sourcecode

![Rollup badge](https://img.shields.io/badge/Rollup-^0.53.3-ff69b4.svg)
![Jest](https://img.shields.io/badge/Jest-^22.0.4-blue.svg)
![Vue](https://img.shields.io/badge/Vue-^2.5.13-brightgreen.svg)
![Storybook](https://img.shields.io/badge/Storybook-^3.3.3-ff70a3.svg)
![Commitizen](https://img.shields.io/badge/Commitizen-enabled-brightgreen.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Npm badge](https://img.shields.io/npm/v/vfg-field-sourcecode.svg)
[![Build Status](https://travis-ci.org/gwenaelp/vfg-field-sourcecode.svg?branch=master)](https://travis-ci.org/gwenaelp/vfg-field-sourcecode)

> A source code field for vue-form-generator

> Generated using [vue-cli-template-library](https://github.com/julon/vue-cli-template-library).

## Installation
```
npm install vfg-field-sourcecode
```
vfg-field-sourcecode can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vfg-field-sourcecode will register all the components to vue by itself.</p>

### ES6
```js
//
// You can register a component manually
//
import { FieldSourcecode } from 'vfg-field-sourcecode';

export default {
  ...
  components: {
    'field-sourcecode': FieldSourcecode
  },
  ...
};

//
// or register the whole module with vue
//
import ModuleLibrary from 'vfg-field-sourcecode';

// Install this library
Vue.use(ModuleLibrary);
```

### CommonJS
```js
//
// You can register a component manually
//
var Vue = require('vue');
var ModuleLibrary = require('vfg-field-sourcecode');

var YourComponent = Vue.extend({
  ...
  components: {
    'field-sourcecode': ModuleLibrary.FieldSourcecode
  },
  ...
});

//
// or register the whole module with vue
//
var Vue = require('vue');
var ModuleLibrary = require('vfg-field-sourcecode');

// Install this library
Vue.use(ModuleLibrary);
```

### Browser

```html
<script src="path/to/vue/vue.min.js"></script>
<script src="path/to/vfg-field-sourcecode/dist/vfg-field-sourcecode.min.js"></script>
<!-- Components are registered globally -->
```

### After that, you can use it with Vue Form Generator:

```json
  schema: {
    fields: [
      {
        type: "sourcecode",
        label: "source code",
        model: "source"
      }
    ]
  }
```

## Changelog

See the GitHub [release history](https://github.com/gwenaelp/vfg-field-sourcecode/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).
