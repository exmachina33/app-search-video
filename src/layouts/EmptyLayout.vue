<template>
  <div class="app-layout">
    <main class="app-layout__content">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout"
}
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  &__content {
    padding: 0 calc(50% - 520px);
  }
}
</style>