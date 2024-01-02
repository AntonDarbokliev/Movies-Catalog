import { requestFactory } from "./requester"

export const voteFactory = () => {
    const request =  requestFactory()
    const baseUrl = `${import.meta.env.VITE_BASE_URL}/movie/vote`
    return {
        getAll: () => request.get(baseUrl),
        get : (movieId) => request.get(baseUrl + `/${movieId}`,{movieId}),
        post : (movieId,ownerId,vote) => request.post(baseUrl,{movieId,ownerId,vote})
    }
}