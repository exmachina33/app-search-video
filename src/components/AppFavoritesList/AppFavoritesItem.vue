<template>
  <div
      class="favorites-item"
      @mouseenter="changeItemHover"
      @mouseleave ="changeItemHover"
      @click="selectSearchRequest"
  >
    <span class="favorites-item__title" v-text="item.data.title"/>
    <div v-show="hover" class="favorites-item__control">
      <BaseBtn
          label="Изменить"
          class="favorites-item__control__btn favorites-item__control__btn-change"
          @click.stop="changeFavorite"
      />
      <BaseBtn
          label="Удалить"
          class="favorites-item__control__btn favorites-item__control__btn-delete"
          @click.stop="deleteFavorite(item)"
      />
    </div>
  </div>
</template>

<script>
import BaseBtn from "@/components/UI/BaseBtn";
import {mapActions, mapMutations} from "vuex";
export default {
  name: "AppFavoritesItem",
  components: {BaseBtn},
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      hover: false
    }
  },
  methods:{
    ...mapActions({
      deleteFavorite: 'deleteFavorite'
    }),
    ...mapMutations({
      addSearchRequest: "addSearchRequest"
    }),
    changeItemHover() {
      this.hover = !this.hover
    },
    changeFavorite() {
      this.$emit('changeFavorite', this.item)
    },
    selectSearchRequest() {
      this.$router.push('/search')
      this.addSearchRequest(this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.favorites-item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 46px;

  &:hover {
    background-color: #E5E5E5;
    border-bottom: 1px solid #F1F1F1;
  }

  &__title {
    font-size: 16px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    margin: 0 20px;
  }

  &__control {
    display: flex;
    align-items: center;

    &__btn {
      font-size: 14px;
      height: 46px;
      padding: 0;

      &-change {
        color: #1390E5;
      }

      &-delete {
        color: #ed161f;
      }
    }
  }
}
</style>