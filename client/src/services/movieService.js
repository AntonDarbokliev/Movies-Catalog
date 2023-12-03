import { requestFactory } from "./requester.js"

export const movieFactory = () => {
    const request = requestFactory()
    const baseUrl = `${import.meta.env.VITE_BASE_URL}/movie`;

    return {
        get: (additionToPath) => request.get(additionToPath ? baseUrl + additionToPath : baseUrl),
        post: (movieData) => request.post(baseUrl,movieData),
        delete: (movieId,userId) => request.delete(`${baseUrl}/${movieId}`,{userId}),
        put : (movieId,movieData,userId) => request.put(`${baseUrl}/${movieId}`,{movieData,userId})
    }
} 