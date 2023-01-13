<template>
  <div id="app">
    <router-view/>
    <IconList/>
  </div>
</template>

<script>
import IconList from "@/components/UI/BaseIcon/IconList";

export default {
  components: {IconList}
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
</style>
