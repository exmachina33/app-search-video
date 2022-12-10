<template>
  <div class="favorites-view">
    <h1 class="favorites-view__title">Избранное</h1>
    <AppFavoritesList/>
    <BasePopup :show="false">

    </BasePopup>
  </div>
</template>
<script>
import AppFavoritesList from "@/components/AppFavoritesList";
import BasePopup from "@/components/UI/BasePopup";
export default {
  components: {BasePopup, AppFavoritesList},
}
</script>

<style lang="scss" scoped>
.favorites-view__title {
  color: #272727;
  font-size: 28px;
  margin: 40px 0;
}
</style>