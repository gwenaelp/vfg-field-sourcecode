<template>
  <div>
    <codemirror v-model="value" :options="codeMirrorOptions" ref="editor"></codemirror>
  </div>
</template>

<script>
import "codemirror/mode/vue/vue.js";

import VueFormGenerator from "vue-form-generator";

import { codemirror } from "vue-codemirror";
require("codemirror/lib/codemirror.css");

export default {
  mixins: [VueFormGenerator.abstractField],
  components: {
    codemirror
  },
  computed: {
    codeMirrorOptions() {
      // Allows setting of CodeMirror options, including setting theme
      // http://codemirror.net/doc/manual.html#config

      if (this.schema.hasOwnProperty("codeMirrorOptions")) {
        // Load theme css, if specified in codeMirrorOptions
        if (this.schema.codeMirrorOptions.hasOwnProperty("theme")) {
          require("codemirror/theme/" +
            this.schema.codeMirrorOptions.theme +
            ".css");
        }

        return this.schema.codeMirrorOptions;
      } else {
        return {};
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.$refs.editor && this.$refs.editor.codemirror)
        this.$refs.editor.codemirror.refresh();
    }, 1000);
  }
};
</script>

<style>
.CodeMirror {
  width: 500px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  font-size: 80%;
}
</style>
