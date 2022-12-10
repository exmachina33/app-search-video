<template>
  <ul :class="classes">
    <li
        v-for="(item, index) in list"
        :key="index"
        class="template__item"
    >
      <slot :item="item"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BaseListTemplate",
  props: {
    list: {
      type: [Array, Number],
      default: () => ([])
    },
    mode: {
      type: String,
      default: 'list'
    }
  },
  computed: {
    classes() {
      return ['template', `template--${this.mode}`]
    }

  }
}
</script>

<style lang="scss" scoped>
.template {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(216px, 1fr));
  justify-content: center;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  flex-wrap: wrap;

  &--list {
    gap: 32px;
    max-width: 687px;
    display: flex;
    flex-direction: column;
  }
  &--grid .template__item {
    flex-grow: 1;
    width: auto;
    min-width: 216px;
  }
  &--list .template__item {
    width: 100%;
  }
}


</style>