import Vue from "vue";
import FieldSourcecode from "../field-sourcecode";
import "../../testUtils/selectionPolyfill";

describe("field-sourcecode.vue", () => {
  const Constructor = Vue.extend(FieldSourcecode);
  const vm = new Constructor({
    propsData: {
      value: "test",
      schema: {},
      model: {},
      disabled: false,
      options: {}
    }
  }).$mount();
  test("should render correct contents", () => {
    expect(vm.$el.querySelector(".CodeMirror").textContent !== null).toEqual(
      true
    );
  });
  test("should match the snapshot", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
