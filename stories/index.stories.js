import { storiesOf } from "@storybook/vue";

const egVueSource = `<template>
  <codemirror v-model="value" :options="cmOptions" ref="editor"></codemirror>
</template>

<script>
export default {
  mixins: [ VueFormGenerator.abstractField ],
  components: {
    codemirror
  },
  data () {
  },
};
</script>

<style>
.CodeMirror {
  width: 500px;
  height: 120px;
}
</style>
`;
const egJSONSource = `{
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
`;

const vfgOutput = `<vue-form-generator :schema="schema" :model="model"></vue-form-generator>`;
const debugOutput = `
    <h2>Model</h2>
    <pre style="white-space: pre-wrap;">{{ model }}</pre>

    <h2>Schema</h2>
    <pre style="white-space: pre-wrap;">{{ schema }}</pre>`;
const templateString = `<div>${vfgOutput}${debugOutput}</div>`;

//
// Add more stories here to live develop your components
//
storiesOf("field-sourcecode", module).add("Story as a template", () => {
  return {
    data: function() {
      return {
        model: {
          source: egVueSource
        },
        schema: {
          fields: [
            {
              type: "sourcecode",
              label: "source code",
              model: "source",
              codeMirrorOptions: {
                mode: "text/x-vue"
              }
            }
          ]
        }
      };
    },

    template: templateString
  };
});

storiesOf("field-sourcecode", module).add("Change mode to JSON", () => {
  return {
    data: function() {
      return {
        model: {
          source: egJSONSource
        },
        schema: {
          fields: [
            {
              type: "sourcecode",
              label: "source code",
              model: "source",
              codeMirrorOptions: {
                mode: "application/json"
              }
            }
          ]
        }
      };
    },

    template: templateString
  };
});

storiesOf("field-sourcecode", module).add("Use Monokai theme", () => {
  return {
    data: function() {
      return {
        model: {
          source: egVueSource
        },
        schema: {
          fields: [
            {
              type: "sourcecode",
              label: "source code",
              model: "source",
              codeMirrorOptions: {
                mode: "text/x-vue",
                theme: "monokai"
              }
            }
          ]
        }
      };
    },

    template: templateString
  };
});
