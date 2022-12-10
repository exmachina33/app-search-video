<template>
  <div id="app">
    <router-view/>
    <IconList/>
  </div>
</template>

<script>

import axios from "axios";
import {authUser, createUser} from "@/api";
import IconList from "@/components/UI/BaseIcon/IconList";
import AppLayout from "@/layouts/AppLayout";

export default {
  components: {AppLayout, IconList},
  methods: {
    getVideos() {
      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: null,
          key: 'AIzaSyBFT4Ez073LY53UTN_HAZtBQfE3weLiN80',
          type: 'video',
          q: 'мипонегерой'
        }
      })
    }
  },
  mounted() {
    // authUser({email: 'test@gmail.com', password: '123456'})
    // this.getVideos()
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
</style>
