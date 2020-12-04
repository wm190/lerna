import Form from './src/form.vue'

Form.install = vue => {
  Vue.component(Form.name, Form)
}

export default Form