<template>
  <div
      class="base-tooltip"
      @mouseenter="changeTooltipHover"
      @mouseleave ="changeTooltipHover"
  >
    <slot/>
    <div v-show="showContent" class="base-tooltip__content-wrap">
      <div class="base-tooltip__content">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hover: false
    }
  },
  computed: {
    showContent() {
      return this.visible && this.hover
    }
  },
  methods: {
    changeTooltipHover() {
      this.hover = !this.hover
    }
  }
}
</script>

<style lang="scss" scoped>
.base-tooltip {
  position: relative;

  &__content-wrap {
    padding-top: 25px;
    z-index: 999999999;
    position: absolute;
    left: -98px;
    top: 20px;
  }

  &__content {
    width: 220px;
    padding: 15px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  }
}
</style>