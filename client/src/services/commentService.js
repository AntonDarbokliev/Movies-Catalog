import {requestFactory} from "./requester.js";


export const commentFactory = () => {
    const request = requestFactory()
    const baseUrl = `${import.meta.env.VITE_BASE_URL}/movie/comment`;

    return {
        get : () => request.get(baseUrl),
        post : (commentData) => request.post(baseUrl,commentData)
    }
}