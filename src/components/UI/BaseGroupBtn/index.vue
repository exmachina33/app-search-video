<template>
  <div class="group-btn">
      <BaseBtn
          v-for="option in options"
          class="group-btn__item"
          :key="option.value"
          :before-icon="option.icon"
          :label="option.label"
          :dense="dense"
          :pressed="option.value === value"
          @click="changeHandler(option)"
      />
  </div>
</template>

<script>
import BaseBtn from "@/components/UI/BaseBtn";
export default {
  name: "BaseGroupBtn",
  components: {BaseBtn},
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    options: {
      type: Array,
      default: () => ([])
    },
    keyValue: {
      type: String,
      default: 'value'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    dense: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    changeHandler(option) {
      const value = option[this.keyValue]
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.group-btn {
  display: flex;
  white-space: nowrap;

  &__item {
    padding: 5px;
  }
}
</style>