<template>
  <div>
    <ul class="favorites-list">
      <li
          v-for="item in favorites"
          :key="item.id"
          class="favorites-list__item">
        <AppFavoritesItem :item="item" @changeFavorite="changeFavorite"/>
      </li>
    </ul>
    <BasePopup :show="show" title="Изменить запрос">
      <AppFavoritesForm
          :item="changeableItem"
          type="change"
          @cancel="togglePopup"
      />
    </BasePopup>
  </div>
</template>

<script>
import AppFavoritesItem from "@/components/AppFavoritesList/AppFavoritesItem";
import {mapActions, mapGetters} from "vuex";
import BasePopup from "@/components/UI/BasePopup";
import AppFavoritesForm from "@/components/AppFavoritesForm";
export default {
  name: "AppFavoritesList",
  components: {AppFavoritesForm, BasePopup, AppFavoritesItem},
  computed: {
    ...mapGetters({
      favorites: 'favorites',
      user: 'user'
    })
  },
  data() {
    return {
      show: false,
      changeableItem: null
    }
  },
  methods: {
    ...mapActions({
      fetchFavorites: 'fetchFavorites'
    }),
    changeFavorite(item) {
      this.show = true
      this.changeableItem = item
    },
    togglePopup() {
      this.show = !this.show
      this.changeableItem = null
    }
  },
  async created() {
    await this.fetchFavorites(this.user.uid)
  }

}
</script>

<style lang="scss" scoped>
.favorites-list {
  list-style: none;
  padding: 0;
}
</style>