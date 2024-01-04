import {requestFactory} from "./requester";
import { Comment, RawComment } from '../types/movieData'

export const commentFactory = () => {
    const request = requestFactory()
    const baseUrl = `${import.meta.env.VITE_BASE_URL}/movie/comment`;

    return {
        get : ():Promise<Comment[]> => request.get(baseUrl),
        post : (commentData:RawComment) => request.post(baseUrl,commentData)
    }
}