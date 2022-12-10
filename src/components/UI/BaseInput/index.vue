<template>
  <label class="base-input">
    <span
        v-if="required"
        class="base-input__required"
        v-text="`*`"/>
    <span
        v-if="label"
        class="base-input__label"
        v-text="label"
    />
    <component
        :is="localType"
        v-model="modelValue"
        :type="type"
        :before-icon="beforeIcon"
        :after-icon="afterIcon"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :error="error"
        :error-text="errorText"
    >
      <template v-slot:before>
        <slot name="before"/>
      </template>
      <template v-slot:after>
        <slot name="after"/>
      </template>
    </component>
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  components: {
    inputPassword: () => import('./InputPassword.vue'),
    inputDefault: () => import('./InputDefault.vue')
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      required: false
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
  computed: {
    localType() {
      switch (this.type) {
        case 'password':
          return 'inputPassword';
        default:
          return 'inputDefault';
      }
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
}
</script>

<style lang="scss" scoped>
.base-input {
  display: block;

  &__required {
    color: #ed161f;
    margin-right: 5px;
    line-height: 22px;
  }

  &__label {
    font-size: 16px;
    line-height: 22px;
    color: #272727;
  }
}
</style>