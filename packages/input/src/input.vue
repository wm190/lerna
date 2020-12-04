<template>
  <div>
    <input :type="type" :value="value" @input="handleInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  name: 'LgInput',
  inheritAttrs: false,
  props: {
    value: String,
    type: {
      type: String,
      default: 'text'
    },
  },
  data () {
    return {
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'LgFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      parent && parent.$emit('validate')
    }
  }
}
</script>

<style lang='less' scoped>

</style>