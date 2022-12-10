import {loginUser} from "@/api";


export default {
    state: {
      user: null
    },
    mutations: {
      saveUser(state, user) {
          state.user = user
      }
    },
    actions: {
      async loginUser(ctx, payload) {
           const user = await loginUser(payload)
           ctx.commit('saveUser', user)
           return user
       }
    },
    getters: {
       user(state) {
           return state.user
       }
    }
}