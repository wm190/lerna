<template>
  <div>
    <button @click.prevent="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  data () {
    return {
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}

</script>

<style lang='less' scoped>

</style>
