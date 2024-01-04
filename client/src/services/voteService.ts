import { UserVote } from "../components/User/UserRatings/UserRatings"
import { Vote, VoteType } from "../types/movieData"
import { requestFactory } from "./requester"

export const voteFactory = () => {
    const request =  requestFactory()
    const baseUrl = `${import.meta.env.VITE_BASE_URL}/movie/vote`
    return {
        getAll: ():Promise<Vote> => request.get(baseUrl),
        get : (movieId:string) => request.get(baseUrl + `/${movieId}`,{movieId}),
        post : (movieId:string,ownerId:string,vote:VoteType):Promise<Vote> => request.post(baseUrl,{movieId,ownerId,vote}),
        getUserRatings: (userId:string):Promise<UserVote[]> => request.get(`${baseUrl}/user/${userId}`)
    }
}