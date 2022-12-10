<template>
  <div class="app-layout">
    <AppHeader class="app-layout__header"/>
    <main class="app-layout__content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
export default {
  name: "AppLayout",
  components: {AppHeader}
}
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header {
    padding: 0 calc(50% - 560px);
    margin: 0 8px;
  }

  &__content {
    padding: 0 calc(50% - 560px);
    margin: 0 8px;
  }
}
@media (min-width: 450px) {
  .app-layout__content {
    margin: 0 40px;
  }
  .app-layout__header {
    margin: 0 40px;
  }
}

</style>