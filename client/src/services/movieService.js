import { requestFactory } from "./requester.js"

export const movieFactory = () => {
    const request = requestFactory()
    const baseUrl = "http://localhost:3000/movie";

    return {
        get: (additionToPath) => request.get(additionToPath ? baseUrl + additionToPath : baseUrl),
        post: (movieData) => request.post(baseUrl,movieData),
        delete: (movieId) => request.delete(`${baseUrl}/${movieId}`),
        put : (movieId,movieData) => request.put(`${baseUrl}/${movieId}`,movieData)
    }
} 