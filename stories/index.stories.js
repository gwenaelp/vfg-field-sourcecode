import { storiesOf } from "@storybook/vue";

// Add more stories here to live develop your components
storiesOf("field-sourcecode", module).add("story as a template", () => {
  return {
    data: function() {
      return {
        model: {
          source: `<template>
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
`
        },
        schema: {
          fields: [
            {
              type: "sourcecode",
              label: "source code",
              model: "source"
            }
          ]
        }
      };
    },

    template: `<vue-form-generator :schema="schema" :model="model"></vue-form-generator>`
  };
});
