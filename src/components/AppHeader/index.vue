<template>
  <header class="app-header">
    <router-link to="/search">
      <BaseIcon name="logo" :size="28"/>
    </router-link>
    <nav class="app-header__navigation-menu">
      <router-link
          v-for="item in navigationList"
          :key="item.id"
          class="app-header-link"
          :to="item.path">
        <div class="app-header__navigation-menu__item">
          <span v-text="item.text"/>
        </div>
      </router-link>
    </nav>
    <BaseBtn
        class="app-header__logout-btn"
        label="Выйти"
        color="primary"
        flat
        @click="logout"
    />
  </header>
</template>

<script>
import BaseIcon from "@/components/UI/BaseIcon";
import BaseBtn from "@/components/UI/BaseBtn";
export default {
  name: "AppHeader",
  components: {BaseBtn, BaseIcon},
  data() {
    return {
      navigationList: [
        {
          text: 'Поиск',
          path: './search',
          id: 1
        },
        {
          text: 'Избранное',
          path: './favorites',
          id: 2
        }
      ]
    }
  },
  methods: {
    logout() {
      this.$router.push('/login')
      localStorage.removeItem('user')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #F1F1F1;
  font-size: 18px;

  &__logout-btn {
    font-size: 18px;
  }

  &__navigation-menu {
    display: flex;
    height: 100%;
    width: 100%;
    gap: 20px;
    padding: 0 20px;

    .router-link-active {
      border-bottom: 2px solid #1390E5;
      color: #1390E5;
    }

    &__item {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 5px;
    }
  }
}
.app-header-link {
  text-decoration: none;
  color: rgba(39, 39, 39, 0.3);
}

</style>