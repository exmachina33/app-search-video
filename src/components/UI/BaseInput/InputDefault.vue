<template>
  <div :class="classes">
    <span
        v-if="error && errorText"
        class="input-default__error-text"
        v-text="errorText"
    />
    <div class="input-default__slot slot-before">
      <slot name="before" :focus="focus">
        <BaseIcon
            v-if="beforeIcon"
            class="slot-before__icon"
            :name="beforeIcon"
        />
      </slot>
    </div>
   <input
       v-model="modelValue"
       class="input-default__control"
       :placeholder="placeholder"
       :disabled="disabled"
       :type="type"
       @focus="focusHandler"
       @blur="blurHandler"
   >
    <div class="input-default__slot slot-after">
      <slot name="after" :focus="focus">
        <BaseIcon
            v-if="afterIcon"
            class="slot-after__icon"
            :name="afterIcon"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/UI/BaseIcon";
export default {
  name: "InputDefault",
  components: {BaseIcon},
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    beforeIcon: {
      type: String,
      required: false
    },
    afterIcon: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    error: {
      type: Boolean,
      required: false
    },
    errorText: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      focus: false
    }
  },
  computed: {
    classes() {
      const classes = ['input-default'];
      if(this.focus) {
        classes.push('input-default--focus')
      }
      if(this.disabled) {
        classes.push('input-default--disabled')
      }
      if(this.error) {
        classes.push('input-default--error')
      }
      return classes;
    },
    modelValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    focusHandler(event) {
      this.focus = true
      this.$emit('focus', event)
    },
    blurHandler(event) {
      this.focus = false
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-default {
  height: 52px;
  display: flex;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  width: 100%;
  border: 1px solid rgba(23, 23, 25, 0.2);
  color: #c9c9c9;
  border-radius: 10px;
  position: relative;

  &--error {
    border-color: #ed161f;
  }

  &--disabled {
    background-color: #e5e5e5;
  }

  &--focus {
    border-color: #1390E5;
    color: #272727;
    background-color: rgba(197, 228, 249, 0.3);
  }
  &--focus .input-default__slot {
    color: #1390E5;
  }
  &__error-text {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: #ed161f;
    font-size: 14px;
  }

  &__control {
    margin: 0 14px;
    outline: none;
    border: none;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    font-size: 20px;
    width: 100%;
  }
}
.slot-after__icon {
  margin-right: 14px;
}
.slot-before__icon {
  margin-left: 14px;
}
::placeholder {
  color: rgba(23, 23, 25, 0.2)
}
</style>