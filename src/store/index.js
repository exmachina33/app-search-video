import Vue from 'vue'
import Vuex from 'vuex'
import Videos from "@/store/modules/Videos";
import AuthUser from "@/store/modules/AuthUser";
import Favorites from "@/store/modules/Favorites";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Videos, AuthUser, Favorites
  }
})
