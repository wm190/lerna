import Button from './src/button.vue'

Button.install = vue => {
  Vue.component(Button.name, Button)
}

export default Button