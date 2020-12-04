import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

// {}外加() 表示返回一个对象，若不加 () 会被当成代码块
export const Text = () => ({
  components: { LgInput },
  template: '<lg-input v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input type="password" v-model="value"></lg-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})