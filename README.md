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

## Example

![Preview](https://github.com/gwenaelp/vfg-field-sourcecode/blob/master/docs/preview.png)

```vue
<template>
  <vue-form-generator :schema="schema" :model="model"></vue-form-generator>
</template>
<script>
export default {
  data() {
    return {
      model: {
        source: `<template></template>`
      },
      schema: {
        fields: [{
          type: "sourcecode",
          label: "source code",
          model: "source",
          theme: 'eclipse',
          mode: {
            name: "javascript",
            json: true
          }
        }]
      }
    };
  }
};
</script>
```

## Installation
```
npm install vfg-field-sourcecode
```
vfg-field-sourcecode can be used as a module in both CommonJS and ES modular environments.

When in non-modular environment, vfg-field-sourcecode will register all the components to vue by itself.</p>

### ES6
```vue
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
```vue
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

```js
  schema: {
    fields: [
      {
        type: "sourcecode",
        label: "source code",
        model: "source",
        theme: 'monokai',
        mode: "ruby"
      }
    ]
  }
```

## CodeMirror Options

Any supported CodeMirror option can be passed in the `schema`. Available options are shown [here](http://codemirror.net/doc/manual.html#config).

### Special note about `mode` option

When setting the `mode` option in the schema, `vfg-field-sourcecode` will automatically load the JS for the specified mode. This currently only works if you set the mode by name, *not* by mime type. Mode can either by set as as string, eg: `mode: python`, or as an object, which is required if that mode supports options you want to set - eg: `mode: { name: 'javascript', json: true }`. See [here](http://codemirror.net/doc/manual.html#option_mode) for more details.

## Changelog

See the GitHub [release history](https://github.com/gwenaelp/vfg-field-sourcecode/releases).

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).

[![](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/images/0)](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/links/0)[![](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/images/1)](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/links/1)[![](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/images/2)](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/links/2)[![](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/images/3)](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/links/3)[![](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/images/4)](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/links/4)[![](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/images/5)](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/links/5)[![](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/images/6)](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/links/6)[![](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/images/7)](https://sourcerer.io/fame/gwenaelp/gwenaelp/vfg-field-sourcecode/links/7)
