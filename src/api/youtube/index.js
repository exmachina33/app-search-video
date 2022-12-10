import {get} from "@/api/config";

const apiKey = 'AIzaSyBFT4Ez073LY53UTN_HAZtBQfE3weLiN80'
export async function getVideoList(data) {
    const params =  {
        part: null,
        key: apiKey,
        type: 'video',
        q: data.queryValue,
        maxResults: data.maxResults,
        order: data.sort ? data.sort.value : 'relevance'
    }
    const response = await get('https://www.googleapis.com/youtube/v3/search',  params)
    return response.data
}
export async function getVideoInfo(ids) {
    const params =  {
        part: "snippet,statistics",
        id: ids.join(','),
        key: apiKey,
    }
    const response = await get('https://www.googleapis.com/youtube/v3/videos',  params)
    const { data: { items } } = response
    return items
}
