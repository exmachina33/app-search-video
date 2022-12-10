<template>
  <button
      :class="classes"
      :disabled="disabled"
      @click="click"
  >
    <slot name="before">
      <BaseIcon v-if="beforeIcon" :name="beforeIcon"/>
    </slot>
    <span v-if="label" class="base-btn__label" v-text="label"/>
    <slot name="after">
      <BaseIcon v-if="afterIcon" :name="afterIcon"/>
    </slot>
  </button>
</template>

<script>
import BaseIcon from "@/components/UI/BaseIcon";
export default {
  name: "BaseBtn",
  components: {BaseIcon},
  props: {
    label: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      required: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    beforeIcon: {
      type: String,
      required: false
    },
    afterIcon: {
      type: String,
      required: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    pressed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes(){
      const classes = ['base-btn']
      if(this.outline) {
        classes.push('base-btn--outline')
      }
      if(this.rounded) {
        classes.push('base-btn--rounded')
      }
      if(this.color) {
        classes.push(`base-btn--${this.color}`)
      }
      if(this.flat) {
        classes.push('base-btn--flat')
      }
      if(this.dense) {
        classes.push('base-btn--dense')
      }
      if(this.pressed) {
        classes.push('base-btn--pressed')
      }
      if(this.disabled) {
        classes.push('base-btn--disabled')
      }
      return classes
    }
  },
  methods: {
    click(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0);
  gap: 10px;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  color: rgba(23, 23, 25, 0.3);

  &__label {
    margin: 0 14px;
  }

  &--primary {
    background-color: #1390E5;
    border-color: #1390E5;
    color: #ffffff;
  }

  &--outline {
    background-color: inherit;
  }
  &--rounded {
    border-radius: 50%;
  }
  &--flat {
    background-color: rgba(0,0,0,0);
    border-color: rgba(0,0,0,0);
  }
  &--dense {
    height: auto;
    padding: 0;
  }
  &--pressed {
    color: #272727;
  }
  &--disabled {
    cursor: auto;
    background-color: #c9c9c9;
    border-color: #c9c9c9;
  }
}
.base-btn--primary.base-btn--outline,
.base-btn--primary.base-btn--flat {
  color: #1390E5;
}
</style>