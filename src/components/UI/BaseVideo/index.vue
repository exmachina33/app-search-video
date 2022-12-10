<template>
  <div class="base-video">
    <iframe :src="link" class="base-video__content" frameborder="0" allowfullscreen/>
  </div>
</template>

<script>
export default {
  name: "BaseVideo",
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  computed: {
    link() {
      return `https://www.youtube.com/embed/${this.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
.base-video {
  width: 100%;
  position: relative;
  display: block;

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #1390E5;
    border-radius: 10px;
  }
}
.base-video:after {
  content: '';
  display: block;
  padding-top: 56%;
}
</style>