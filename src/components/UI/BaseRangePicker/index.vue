<template>
  <div class="base-range-picker">
    <input
        v-model="modelValue"
        :style="styles"
        type="range"
        :min="min"
        :max="max"
        class="base-range-picker__control"
    />
    <output v-text="modelValue" class="base-range-picker__output"/>
  </div>
</template>

<script>
export default {
  name: "BaseRangePicker",
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 50
    },
    value: {
      type: Number,
      default: 1
    },
    title: {

    }
  },
  computed: {
    modelValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', +val)
      }
    },
    backgroundSize() {
      return (this.value - this.min) * 100 / (this.max - this.min) + '% 100%'
    },
    styles() {
      return { backgroundSize: this.backgroundSize }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-range-picker {
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;

  &__control::-moz-range-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border: 2px solid #1390E5;
    border-radius: 50%;
    background: #ffffff;
    cursor: ew-resize;
  }

  &__control::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border: 2px solid #1390E5;
    border-radius: 50%;
    background: #ffffff;
    cursor: ew-resize;
  }
  &__control::-ms-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border: 2px solid #1390E5;
    border-radius: 50%;
    background: #ffffff;
    cursor: ew-resize;
  }

  &__control {
    width: 100%;
    -webkit-appearance: none;
    height: 6px;
    background: rgba(23, 23, 25, 0.2);
    border-radius: 5px;
    background-image: linear-gradient(rgba(19, 144, 229, 0.8), rgba(19, 144, 229, 0.8));
    background-repeat: no-repeat;

  }

  &__output {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 48px;
    border: 1px solid rgba(23, 23, 25, 0.2);
    border-radius: 10px;
    font-size: 20px;
  }
}
</style>
