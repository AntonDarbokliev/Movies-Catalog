import { requestFactory } from "./requester.js"

export const movieFactory = () => {
    const request = requestFactory()
    const baseUrl = "http://localhost:3000/movie";

    return {
        get: (additionToPath) => request.get(additionToPath ? baseUrl + additionToPath : baseUrl),
        post: (movieData) => request.post(baseUrl,movieData),
        delete: (movieId,userId) => request.delete(`${baseUrl}/${movieId}`,{userId}),
        put : (movieId,movieData,userId) => request.put(`${baseUrl}/${movieId}`,{movieData,userId})
    }
} 