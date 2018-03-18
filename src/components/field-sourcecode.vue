<template>
  <div>
    <codemirror v-model="value" :options="cmOptions" ref="editor"></codemirror>
  </div>
</template>

<script>
import "codemirror/mode/vue/vue.js";

import VueFormGenerator from "vue-form-generator";

import { codemirror } from "vue-codemirror";
require("codemirror/lib/codemirror.css");
require("codemirror/theme/eclipse.css");

export default {
  mixins: [VueFormGenerator.abstractField],
  components: {
    codemirror
  },

  data() {
    return {
      cmOptions: {
        // codemirror options
        taPbSize: 4,
        mode: "text/x-vue",
        theme: "eclipse",
        lineNumbers: true,
        line: true
      }
    };
  },

  mounted() {
    setTimeout(() => {
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
