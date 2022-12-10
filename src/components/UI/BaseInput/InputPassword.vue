<template>
  <InputDefault
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      :error="error"
      :error-text="errorText"
  >
    <template v-slot:after="{focus}">
      <BaseIcon
          class="input-password__btn"
          :name="iconBtn"
          @click="toggleVisiblePassword"
      />
    </template>
  </InputDefault>
</template>

<script>
import InputDefault from "@/components/UI/BaseInput/InputDefault";
import BaseBtn from "@/components/UI/BaseBtn";
import BaseIcon from "@/components/UI/BaseIcon";
export default {
  name: "InputPassword",
  components: {BaseIcon, BaseBtn, InputDefault},
  props: {
    value: {
      type: [String, Number],
      default: ''
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
    error: {
      type: Boolean,
      default: false
    },
    errorText: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      localType: 'password',
      visiblePassword: false
    }
  },
  computed: {
    type() {
      return this.visiblePassword ? 'text' : 'password';
    },
    iconBtn() {
      return this.visiblePassword ? 'eye-on' : 'eye-off';
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
    toggleVisiblePassword(event) {
      this.visiblePassword = !this.visiblePassword
    }
  }
}
</script>

<style lang="scss" scoped>
.input-password__btn {
  cursor: pointer;
  margin-right: 14px;
}
</style>