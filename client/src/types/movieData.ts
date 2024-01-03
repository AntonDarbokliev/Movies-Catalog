import { UserData } from "./AuthData";

export interface MovieData {
    name: string;
    director: string;
    year: number;
    topCast: string[];
    moviePoster: string;
    movieImages: { movieImage: string }[];
    description: string;
    genres: string[];
    movieTrailer: string;
    _id?: string;
    owner?: { id: string; username: string };
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

export interface Vote {
    movieId: string;
    ownerId: string;
    vote: "upvote" | "downvote";
}

export interface ExtendedMovieData {
    userId?: string;
    movieData?: MovieData;
    movieId?: string;
    vote?: Vote;
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
