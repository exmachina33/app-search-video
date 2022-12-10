<template>
  <section v-if="show">
    <div class="result-panel">
      <div class="result-panel__details">
        <p>
          Видео по запросу
          <span class="result-panel__details__search-value" v-text="`«${this.$route.query.search}»`"/>
        </p>
        <span class="result-panel__details__amount" v-text="formattedTotalResults"/>
      </div>
      <BaseGroupBtn
          v-model="mode"
          :options="modes"
      />
    </div>
    <BaseListTemplate
        :list="videos"
        :mode="mode"
    >
      <template v-slot:default="{item}">
        <AppCardVideo :video="item" :mode="mode"/>
      </template>
    </BaseListTemplate>
  </section>
</template>

<script>
import BaseGroupBtn from "@/components/UI/BaseGroupBtn";
import BaseListTemplate from "@/components/UI/BaseListTemplate";
import AppCardVideo from "@/components/AppCardVideo";
import {mapGetters} from "vuex";
export default {
  name: "AppVideoList",
  components: {AppCardVideo, BaseListTemplate, BaseGroupBtn},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modes: [
        { value: 'grid', icon: 'grid' },
        { value: 'list', icon: 'list' }
      ],
      mode: 'list',
    }
  },
  computed: {
    ...mapGetters({
      videos: 'videos',
      totalResults: 'totalResults'
    }),
    formattedTotalResults() {
      switch (true) {
        case (this.totalResults < 10000):
          return this.totalResults;
        case (this.totalResults < 1000000):
          return `${(this.totalResults / 1000).toFixed(1)} тыс.`;
        case (this.totalResults >= 1000000):
          return `${(this.totalResults / 1000000).toFixed(1)} млн.`;
        default:
          return this.totalResults;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.result-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 10px 0;

  &__details {
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    color: #272727;
    gap: 5px 15px;

    &__search-value {
      font-weight: bold;
    }

    &__amount {
      color: #c9c9c9;
    }
  }
}
@media (min-width: 450px) {
  .result-panel__details {
    font-size: 16px;
  }
}
</style>