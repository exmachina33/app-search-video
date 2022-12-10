<template>
  <div v-show="show" class="outside">
    <div class="content">
      <section class="base-popup">
        <header class="base-popup__header" v-text="title" />
        <slot />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePopup',
  model: {
    prop: 'show',
    event: 'close'
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.outside {
  position: absolute;
  z-index: 50;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.content {
  padding: 0 calc(50% - 560px);
  display: flex;
  justify-content: center;
}
.base-popup {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  padding: 36px 40px;
  height: 100vh;
  &__header {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 450px) {
  .base-popup {
    margin-top: 15vh;
    border-radius: 10px;
    width: 510px;
    box-shadow: 0 10px 50px rgba(19, 144, 229, 0.8);
    height: auto;
  }
}
</style>
