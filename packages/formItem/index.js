import FormItem from './src/formItem.vue'

FormItem.install = vue => {
  Vue.component(FormItem.name, FormItem)
}

export default FormItem