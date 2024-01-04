import { UserData } from "./AuthData";

export interface Owner {
    id?: string; 
    _id?: string; 
    username: string 
}

export interface MovieData {
    name: string;
    director: string;
    year: number;
    topCast: string[];
    moviePoster: string;
    movieImages: { movieImage: string, _id?:string }[];
    description: string;
    genres: string[];
    movieTrailer: string;
    _id?: string;
    owner?: Owner;
    __v?: number;
}

export interface RawMovieData {
    name: string;
    director: string;
    year: string;
    topCast: string;
    moviePoster: string;
    movieImagesOne: string;
    movieImagesTwo: string;
    movieImagesThree: string;
    movieTrailer: string;
    description: string;
    genres: string;
}
 
export type VoteType =  "upvote" | "downvote"

export interface Vote {
    movieId: string;
    ownerId: string;
    vote: VoteType;
}


export interface ExtendedMovieData {
    userId?: string;
    movieData?: MovieData;
    movieId?: string;
    vote?: VoteType;
    ownerId?: string;
}

export interface Comment {
    _id: string;
    movieId: string;
    text: string;
    title: string;
    __v:number;
    owner: UserData;
}

export interface RawComment {
    movieId:string;
    owner: string;
    text:string;
    title:string;
}
