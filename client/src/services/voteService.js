import { requestFactory } from "./requester.js"

export const voteFactory = () => {
    const request =  requestFactory()
    const baseUrl = 'http://localhost:3000/movie/vote'
    return {
        getAll: () => request.get(baseUrl),
        get : (movieId) => request.get(baseUrl + `/${movieId}`),
        post : (movieId,ownerId,vote) => request.post(baseUrl,{movieId,ownerId,vote})
    }
}