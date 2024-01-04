import { requestFactory } from "./requester"

import { MovieData } from '../types/movieData'

export const movieFactory = () => {
    const request = requestFactory()
    const baseUrl = `${import.meta.env.VITE_BASE_URL}/movie`;

    return {
        get: (additionToPath:string):Promise<MovieData[]> => request.get(additionToPath ? baseUrl + additionToPath : baseUrl),
        getOne: (id:string):Promise<MovieData> => request.get( baseUrl + `/${id}`),
        post: (movieData:MovieData) => request.post(baseUrl,movieData),
        delete: (movieId:string,userId:string) => request.delete(`${baseUrl}/${movieId}`,{userId}),
        put : (movieId:string,movieData:MovieData,userId:string) => request.put(`${baseUrl}/${movieId}`,{movieData,userId})
    }
} 