<template>
  <div>
    <BaseInput
        v-model="modelSearch"
        class="app-search"
        placeholder="Что хотите посмотреть"
    >
      <template v-slot:after>
        <div class="app-search__action">
          <AppSearchSaveBtn v-if="showSaveBtn" :visible-message="visibleMessage" @click="saveFavoriteHandler"/>
          <BaseBtn
              class="app-search__btn"
              label="Найти"
              color="primary"
              @click="searchHandler"
          />
        </div>
      </template>
    </BaseInput>
    <BasePopup :show="popupIsOpen" title="Сохранить запрос">
      <AppFavoritesForm
          ref="favoriteForm"
          type="creation"
          :item="searchData"
          @cancel="togglePopup"
      />
    </BasePopup>
  </div>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput";
import BaseBtn from "@/components/UI/BaseBtn";
import AppSearchSaveBtn from "@/components/AppSearch/AppSearchSaveBtn";
import BasePopup from "@/components/UI/BasePopup";
import AppFavoritesForm from "@/components/AppFavoritesForm";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "AppSearch",
  components: {AppFavoritesForm, BasePopup, AppSearchSaveBtn, BaseBtn, BaseInput},
  props: {
    clickHandler: {
      type: Function,
      required: false
    }
  },
  data() {
    return {
      search: '',
      maxResults: 12,
      popupIsOpen: false,
      order: 'relevance',
    }
  },
  computed: {
    ...mapGetters({
      searchRequest: 'searchRequest',
      favorites: 'favorites',
      user: 'user'
    }),
    visibleMessage() {
      return this.favorites.some(f => f.data.queryValue.toUpperCase() === this.search.toUpperCase())
    },
    showSaveBtn() {
      return !!this.search.length
    },
    searchData(){
      return {
        data: {
          queryValue: this.search,
          maxResults: this.maxResults,
          sort: this.searchRequest ? this.searchRequest.data.sort : '',
          order: this.order
        },
        key: this.searchRequest ? this.searchRequest.key : null,
      }
    },
    modelSearch: {
      get() {
        return this.search
      },
      set(value) {
         this.search = value
       }
    },
    searchBtnIsShow() {
      return 'search' in this.$route.query
    }
  },
  methods: {
    ...mapActions({
      fetchFavorites: 'fetchFavorites'
    }),
    async saveFavoriteHandler() {
      this.maxResults = 12
      this.togglePopup()
    },
    togglePopup() {
      this.popupIsOpen = !this.popupIsOpen
    },
    setQueryParams() {
      const data = this.searchData.data
      const params = {
        search: data.queryValue,
        order: data.order,
        maxResults: data.maxResults
      }
      if(this.$route.query === params) return
      this.$router.push({query: params})
    },
    emitSearch() {
      this.$emit('change', this.searchData)
    },
    searchHandler() {
      this.$router.push('./search')
      this.setQueryParams()
      this.emitSearch()
    },
    initSearch() {
      if(this.searchRequest) {
        this.setQueryParams()
        this.emitSearch()
        return;
      }
      const params = this.$route.query
      if(!('search' in params)) return
      this.search = params.search
      this.order = params.order
      this.maxResults = +params.maxResults
      this.emitSearch()
    },
    async addInFavorites() {
      if (!this.clickHandler) return false
      await this.clickHandler()
    }
  },
  async created() {
    await this.fetchFavorites(this.user.uid)
  },
  mounted() {
    if(this.searchRequest) {
      const data = this.searchRequest.data
      this.search = data.queryValue
      this.maxResults = data.maxResults
      this.order = data.order
    }
    this.initSearch()
  },
}
</script>

<style lang="scss" scoped>
.app-search {

  &__action {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  &__btn {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
}
</style>