import {fetchVideInfo, fetchVideoList} from "@/api";

export default {
    state: {
        videos: [],
        totalResults: 0
    },
    mutations: {
        updateVideos(state, videos) {
            state.videos = videos
        },
        updateTotalResults(state, totalResults) {
            state.totalResults = totalResults
        }
    },
    actions: {
        async fetchSearchData(ctx, payload) {
            const data = await fetchVideoList(payload)
            const totalResults = data.pageInfo.totalResults || 0
            const ids = data.items.map(i => i.id.videoId)
            const videosData = await fetchVideInfo(ids)
            const videos = videosData.map(video => {
                const { channelTitle, title, publishedAt } = video.snippet
                const { viewCount, likeCount, commentCount } = video.statistics
                return {
                    id: video.id,
                    channelTitle,
                    title,
                    publishedAt,
                    viewCount,
                    likeCount,
                    commentCount
                }
            })
            ctx.commit('updateVideos', videos)
            ctx.commit('updateTotalResults', totalResults)
        }
    },
    getters: {
        videos(state) {
            return state.videos
        },
        totalResults(state) {
            return state.totalResults
        }
    }
}