import { requestFactory } from "./requester.js"

export const movieFactory = () => {
    const request = requestFactory()
    const baseUrl = "http://localhost:3000/movie";

    return {
        get: () => request.get(baseUrl),
        post: (movieData) => request.post(baseUrl,movieData),
        delete: (movieId) => request.delete(`${baseUrl}/${movieId}`)
    }
} 