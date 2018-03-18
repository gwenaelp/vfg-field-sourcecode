import FieldSourcecode from "./components/field-sourcecode";

const LibraryModule = {
  FieldSourcecode,

  install(Vue) {
    // Register components with vue
    Vue.component("field-sourcecode", FieldSourcecode);
  }
};

// Export library
export default LibraryModule;

// Export components
export { FieldSourcecode };
