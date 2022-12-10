<template>
  <BaseTooltip
      :visible="visibleMessage"
  >
    <BaseBtn
        :before-icon="icon"
        dense
        flat
        color="primary"
        @click="saveHandler"
        @mouseenter=""
        @mouseleave=""
    />
    <template v-slot:content>
      <span class="tooltip__text">
            Поиск сохранён в разделе «Избранное»
          <router-link to="/favorites" class="tooltip__text-link">Перейти в Избранное</router-link>
      </span>
    </template>
  </BaseTooltip>
</template>

<script>
import BaseTooltip from "@/components/UI/BaseTooltip";
import BaseBtn from "@/components/UI/BaseBtn";
export default {
  name: "AppSearchSaveBtn",
  components: {BaseBtn, BaseTooltip},
  props: {
    show: {
      type: Boolean,
      default: false
    },
    visibleMessage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    icon() {
      return this.visibleMessage ? 'heart-fill' : 'heart'
    }
  },
  methods: {
    async saveHandler() {
      if(this.visibleMessage) return
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip__text {
  display: flex;
  flex-direction: column;
  line-height: 24px;
  size: 16px;
  gap: 10px;
  color: #c9c9c9;

  &-link {
    text-decoration: none;
    color: #1390E5;
  }
}
</style>