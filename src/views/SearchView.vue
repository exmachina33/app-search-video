<template>
  <div :class="classes">
    <h1 class="search-view__title">Поиск видео</h1>
    <AppSearch @change="updateVideoList"/>
    <AppVideoList :show="videoIsShow"/>
  </div>
</template>

<script>

import AppVideoList from "@/components/AppVideoList";
import AppSearch from "@/components/AppSearch";
import {mapActions} from "vuex";
import BaseRangePicker from "@/components/UI/BaseRangePicker";
import BaseSelect from "@/components/UI/BaseSelect";
import BasePopup from "@/components/UI/BasePopup";
import AppFavoritesForm from "@/components/AppFavoritesForm";
export default {
  name: 'HomeView',
  components: {AppFavoritesForm, BasePopup, BaseSelect, BaseRangePicker, AppSearch, AppVideoList},
  computed: {
    videoIsShow() {
      return 'search' in this.$route.query
    },
    classes() {
      const classes = ['search-view']
      if(this.videoIsShow) {
        classes.push(`search-view--list-show`)
      }
      return classes
    }
  },
  methods: {
    ...mapActions({
      fetchSearchData: 'fetchSearchData'
    }),
    async updateVideoList(searchData) {
      await this.fetchSearchData(searchData.data)
    }
  },
}
</script>

<style lang="scss" scoped>
.search-view {
  text-align: center;

  &--list-show {
    text-align: left;
  }
  &--list-show .search-view__title {
    margin: 20px 0 20px 0;
  }

  &__title {
    color: #272727;
    font-size: 28px;
    margin: 120px 0 20px 0;
  }
}
@media (min-height: 750px) {
  .search-view {
    &--list-show .search-view__title {
      margin: 20px 0 20px 0;
    }
    &__title {
      margin: 220px 0 20px 0;
    }
  }
}
</style>
