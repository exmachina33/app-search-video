import {deleteFavorite, fetchFavorites, updateFavorite} from "@/api";

export default {
    state: {
        favorites: [],
        searchRequest: null
    },
    mutations: {
        setFavorites(state, favorites) {
            state.favorites = favorites
        },
        updateFavorites(state, item) {
            state.favorites.forEach(f => {
                if (f.key === item.key ) {
                    f.data = {...item.data}
                }
            })
        },
        deleteFavorite(state, item) {
            state.favorites = state.favorites.filter(f => f.key !== item.key)
        },
        addSearchRequest(state, item) {
            state.searchRequest = {...item}
        }
    },
    actions: {
        async fetchFavorites(ctx,userId) {
            const favorites = await fetchFavorites(userId)
            ctx.commit('setFavorites', favorites)
        },
        async updateFavorite(ctx, item) {
            await updateFavorite(item)
            ctx.commit('updateFavorites', item)
        },
        async deleteFavorite(ctx, item) {
            await deleteFavorite(item)
            ctx.commit('deleteFavorite', item)
        }
    },
    getters: {
        favorites(state) {
            return state.favorites
        },
        searchRequest(state) {
            return state.searchRequest
        }
    }
}