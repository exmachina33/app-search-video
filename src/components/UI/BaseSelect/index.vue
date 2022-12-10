<template>
  <div class="base-select">
    <BaseInput
        :value="visibleValue"
        :label="label"
        :placeholder="placeholder"
        class="base-select__control"
    >
      <template v-slot:after>
        <div class="base-select__control__actions">
          <BaseBtn
              v-if="value"
              flat
              dense
              after-icon="close"
              @click="clearValue"
              class="base-select__control__actions__btn"
          />
          <BaseBtn
              flat
              dense
              after-icon="arrow"
              class="base-select__control__actions__btn toggle-btn"
              :class="{ 'rotate-180': showOptions }"
              @click="toggleOptions"
          />
        </div>

      </template>
    </BaseInput>
    <ul v-if="showOptions" class="base-select__options">
      <li
          v-for="(option, index) in options"
          class="option-item"
          :key="index"
      >
        <input
            :id="`option_${index}`"
            :checked="isChecked(option)"
            type="radio"
            name="option"
            class="option-item__control"
            @change="changeHandler(option)"
        />
        <label
            :for="`option_${index}`"
            class="option-item__label"
            v-text="option.label"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput";
import BaseBtn from "@/components/UI/BaseBtn";
export default {
  name: "BaseSelect",
  components: {BaseBtn, BaseInput},
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: [Number, String, Object],
      default: ''
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      default: () => ([])
    },
    keyValue: {
      type: String,
      default: 'value',
    },
    keyLabel: {
      type: String,
      default: 'label',
    },
  },
  data() {
    return {
      showOptions: false,
    }
  },
  computed: {
    visibleValue() {
      if (typeof this.value !== 'object') return this.value;
      return this.value[this.keyLabel];
    }
  },
  methods: {
    toggleOptions() {
      this.showOptions = !this.showOptions
    },
    changeHandler(option) {
      this.$emit('change', option);
      this.toggleOptions();
    },
    isChecked(option) {
      if (typeof this.value !== 'object') {
        return this.value === option;
      }
      return this.value[this.keyValue] === option[this.keyValue];
    },
    clearValue() {
      this.$emit('change', '');
    }
  }
}
</script>

<style lang="scss" scoped>
.base-select {
  position: relative;
  &__control {
    position: relative;
    z-index: 20;
  }
  &__control__actions {
    margin-right: 14px;
    display: flex;
    gap: 14px;

    &__btn {
      color: #1390E5;
    }
  }
  &__options {
    overflow: hidden;
    position: absolute;
    width: 100%;
    background: #ffffff;
    z-index: 10;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 7px 0 0;
    margin: -7px 0 0;
    border: 1px solid rgba(23, 23, 25, 0.2);
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
.option-item {
  position: relative;
  display: flex;
  &__control {
    position: absolute;
    display: none;
  }
  &__control:checked + &__label {
    color: #1390E5;
  }
  &__label {
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    font-size: 20px;
    padding: 14px;
    transition: all 0.3s;
    color: rgba(39, 39, 39, 0.7);
  }
  &__label:hover {
    background: rgba(197, 228, 249, 0.5);
  }
}
.toggle-btn {
  transition: all 0.3s;
}
.rotate-180 {
  rotate: 180deg;
}

</style>
