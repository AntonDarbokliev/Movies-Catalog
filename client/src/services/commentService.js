import {requestFactory} from "./requester.js";


export const commentFactory = () => {
    const request = requestFactory()
    const baseUrl = "http://localhost:3000/movie/comment";

    return {
        get : () => request.get(baseUrl),
        post : (commentData) => request.post(baseUrl,commentData)
    }
}