<template>
  <article :class="classes">
    <BaseVideo :class="`base-video--${mode}`" :id="video.id"/>
    <div class="card-video__details-wrapper">
      <div class="card-video__details">
        <h3 class="card-video__details__name" v-text="video.title"/>
        <span class="card-video__details__chanel" v-text="video.channelTitle"/>
        <span class="card-video__details__views" v-text="views"/>
      </div>
    </div>
  </article>
</template>

<script>
import BaseVideo from "@/components/UI/BaseVideo";
export default {
  name: "AppCardVideo",
  components: {BaseVideo},
  props: {
    video: {
      default: () => ({})
    },
    mode: {
      type: String,
      default: 'grid'
    }
  },
  computed: {
    classes() {
      return ['card-video', `card-video--${this.mode}`]
    },
    views() {
      const viewCount = this.video.viewCount
      switch (true) {
        case (viewCount < 10000):
          return `${viewCount} просмотров`;
        case (viewCount < 1000000):
          return `${(viewCount/1000).toFixed(1)} тыс. просмотров`;
        case (viewCount >= 1000000):
          return `${(viewCount/1000000).toFixed(1)} млн. просмотров`;
        default:
          return `${viewCount} просмотров`;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.base-video--list {
  max-width: 157px;
  min-width: 120px;
  width: 50%;
}
.card-video {
  display: flex;
  height: 100%;
  flex-direction: column;


  &--list {
    flex-direction: row;
  }

  &--list .card-video__details-wrapper {
    width: 50%;
  }

  &--grid .card-video__details-wrapper {
    width: 100%;
    position: relative;
    display: block;

    &:after {
      content: '';
      display: block;
      padding-top: 37%;
    }
  }

  &--grid .card-video__details {
    font-size: 14px;
    padding: 8px 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &__name {
      font-size: 16px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: #c9c9c9;
    padding: 0 0 0 15px;

    &__name {
      overflow: hidden;
      max-height: 40px;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      white-space: normal;
      font-size: 14px;
      margin-bottom: 5px;
      color: #272727;
    }

    &__chanel, &views {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

@media (min-width: 450px) {
  .card-video__details {
    font-size: 16px;

    &__name {
      font-size: 16px;
    }
  }
  .card-video--grid .card-video__details {
    font-size: 14px;

    &__name {
      font-size: 14px;
    }
  }
}
</style>