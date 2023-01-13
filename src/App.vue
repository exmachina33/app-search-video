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
  components: {AppLayout, IconList}
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
</style>
