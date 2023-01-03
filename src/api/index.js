import {getVideoInfo, getVideoList} from "@/api/youtube";
import {saveFavorite, authUser, getFavorites, setFavorite, removeFavorite, registrUser} from "@/api/firebase";

export const createUser = data => registrUser(data)
export const loginUser = data => authUser(data)
export const fetchVideoList = data => getVideoList(data)
export const fetchVideInfo = data => getVideoInfo(data)
export const createFavorite = data => saveFavorite(data)
export const fetchFavorites = data => getFavorites(data)
export const updateFavorite = data => setFavorite(data)
export const deleteFavorite = data => removeFavorite(data)
