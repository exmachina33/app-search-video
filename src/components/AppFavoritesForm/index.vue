<template>
  <form @submit.prevent class="favorite-form">
    <BaseInput
        v-model="queryValue"
        :disabled="searchFieldIsDisabled"
        label="Запрос"
    />
    <BaseInput
        v-model="title"
        label="Название"
        required
        :error="titleError"
        error-text="Поле не должно быть пустым"
    />
    <BaseSelect
        v-model="sort"
        label="Сортировать по"
        placeholder="Без сортировки"
        :options="sortOptions"
    />
    <BaseRangePicker v-model="maxResults" label="Максимальное колличество" />
    <div class="favorite-form__actions">
      <BaseBtn :label="cancelBtn" color="primary" outline  @click="cancel"/>
      <BaseBtn :label="acceptBtn" color="primary" @click="save"/>
    </div>
  </form>
</template>

<script>
import BasePopup from "@/components/UI/BasePopup";
import BaseInput from "@/components/UI/BaseInput";
import BaseSelect from "@/components/UI/BaseSelect";
import BaseRangePicker from "@/components/UI/BaseRangePicker";
import BaseBtn from "@/components/UI/BaseBtn";
import {createFavorite} from "@/api";
import {mapActions, mapGetters} from "vuex";

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: "AppFavoritesForm",
  components: {BaseBtn, BaseRangePicker, BaseSelect, BaseInput, BasePopup},
  props: {
    item: {
      type: Object,
      required: false,
    },
    type: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      queryValue: '',
      title: '',
      sort: '',
      maxResults: 12,
      sortOptions: [
          { label: 'По релевантности', value: 'relevance' },
          { label: 'По дате загрузки', value: 'date' },
          { label: 'По числу просмотров', value: 'viewCount' },
          { label: 'По рейтенгу', value: 'rating' }
      ],
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      title: {required, $autoDirty: true}
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    }),
    titleError() {
      return this.v$.title.$dirty && this.v$.title.required.$invalid
    },

    acceptBtn() {
      if(this.type === 'creation') return 'Сохранить'
      return 'Изменить'
    },
    cancelBtn() {
      if(this.type === 'creation') return 'Не сохранять'
      return 'Не изменять'
    },
    searchFieldIsDisabled() {
      return this.type === 'creation' ? true : false
    }
  },
  methods: {
    ...mapActions({
      fetchFavorites: 'fetchFavorites',
      updateFavorite: 'updateFavorite'
    }),
    blur() {
      console.log('blur')
    },
    cancel() {
      this.$emit('cancel')
    },

    async create() {
      const data = {
        queryValue: this.queryValue,
        title: this.title,
        sort: this.sort,
        maxResults: this.maxResults,
        order: this.sort ? this.sort.value : 'relevance',
        userId: this.user.uid
      }
      await createFavorite(data)
      await this.fetchFavorites(data.userId)
      this.$emit('cancel')
    },

    async update() {
      const data = {
        data: {
          queryValue: this.queryValue,
          title: this.title,
          sort: this.sort,
          maxResults: this.maxResults,
          userId: this.user.uid
        },
        key: this.item.key
      }
      await this.updateFavorite(data)
      this.$emit('cancel')
    },

    async save() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      if(this.type === 'creation') {
        await this.create()
        return
      }
      await this.update()
    }
  },
  watch: {
    item(val) {
      if(!val) return
      const item = this.item.data
      this.queryValue = item.queryValue || ''
      this.title = item.title || ''
      this.sort = item.sort || ''
      this.maxResults = +item.maxResults || 12
    }
  }
}
</script>

<style scoped lang="scss">
.favorite-form {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 24px;
  &__actions {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    button {
      width: 100%;
    }
  }
}

</style>
