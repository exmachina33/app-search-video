<template>
  <svg :style="getStyle" @click="click">
    <use :xlink:href="`#${name}`"/>
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      required: false
    },
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    getStyle() {
      const style = {
        height: `${this.size}px`,
        width: `${this.size}px`,
        'min-width': `${this.size}px`,
        'min-height': `${this.size}px`
      }
      if(this.color) {
        style.color = this.color
      }
      return style
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>