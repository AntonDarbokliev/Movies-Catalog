import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { movieFactory } from "../services/movieService";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useErrorContext } from "./ErrorContext";
import { useAuthContext } from "./AuthContext";
import { voteFactory } from "../services/voteService";

import { MovieData, RawMovieData, Vote, VoteType } from "../types/movieData";
import { LocalStorageAuthInfo } from "../types/AuthData";

interface MovieContext {
    movies: MovieData[],
    onMovieCreateSubmit: (data:RawMovieData) => void,
    searchMovie : (formValues: {genres: string;title: string;}) => Promise<MovieData[]>,
    onDelete: (id:string) => void,
    vote: (vote: VoteType, movieId: string, ownerId: string) => Promise<any>,
    extractYouTubeVideoId: (link: string) => string | null, 
    getLastThree: () => Promise<MovieData[]>,
    setMovies: React.Dispatch<React.SetStateAction<MovieData[]>>,
    edit: (values: MovieData, movieId: string) => Promise<void>
}

interface MovieProviderProps {
  children : ReactNode
}

const initialContextValue: MovieContext = {
  movies: [],
  onMovieCreateSubmit(){},
  searchMovie: async (_: { genres: string; title: string }) => [],
  onDelete(){},
  vote: async (_: VoteType, _1: string, _2: string):Promise<Vote>=>{
    const result: Vote = {
      movieId: _2,
      ownerId: _1,
      vote: _,
  };
  return Promise.resolve(result);

  },
  extractYouTubeVideoId: (_: string) => null,
  getLastThree: async()=>[],
  setMovies(){},
  edit:async (_:MovieData,_1:string)=>{}
}

export const MovieContext = createContext<MovieContext>(initialContextValue);

export const MovieProvider:React.FC<MovieProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const movieService = movieFactory();
  const navigate = useNavigate();
  const { setErrors } = useErrorContext();
  const { userId } = useAuthContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const voteService = voteFactory();

  const page = searchParams.get("page")
  const pageSize = searchParams.get("pageSize")
  const name = searchParams.get("name")
  const genres = searchParams.get("genres")
  
  useEffect(() => {
    movieService
      .get(`?page=${page}&pageSize=${pageSize}&name=${name}&genres=${genres}`)
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, [page,pageSize,name,genres]);

  const onDelete = async (id:string) => {
      await movieService.delete(id, userId);
      setMovies((state) => state.filter((x) => x._id !== id));
      navigate("/movie/catalog");
  };

  const  getLastThree = async () => {
    const lastMovies = await movieService.get('/latest')
    return lastMovies
  } 

  const vote = async (vote:VoteType, movieId:string, ownerId:string) => {
    try {
      const currentVote = await voteService.post(movieId,ownerId,vote)
      return currentVote
    } catch (err:any) {
      setErrors(err)
    }
  };
  
  const edit = async (values:MovieData,movieId:string) => {
    try {
      await movieService.put(movieId,values,userId)
      navigate(`/movie/${movieId}/details`)
  } catch (err:any) {
      setErrors(err)
  }
  }

  const onMovieCreateSubmit = async (movieData:RawMovieData) => {
    const {
      movieImagesOne,
      movieImagesTwo,
      movieImagesThree,
      year,
      genres,
      topCast,
      ...rest
    } = movieData;

    const combinedImages = [
      { movieImage: movieImagesOne },
      { movieImage: movieImagesTwo },
      { movieImage: movieImagesThree },
    ];

    const genresArr = genres.split(" ");

    const topCastArr = topCast.split(", ");

    let username : string;
    let _id : string;

    const authInfo = localStorage.getItem("auth") 

    if(authInfo){
      const authData:LocalStorageAuthInfo = JSON.parse(authInfo);
      username = authData.username
      _id = authData._id
    }else{
      throw Error('No auth info has been found')
    }


    const owner = {
      id: _id,
      username,
    };

    const result:MovieData = {
      ...rest,
      movieImages: combinedImages,
      year: Number(year),
      genres: genresArr,
      topCast: topCastArr,
      owner,
    };

    try {
      const movie = await movieService.post(result);
      setMovies((state) => [...state, movie]);
      navigate("/");
    } catch (err:any) {
      setErrors(err);
    }
  };

  const searchMovie = async (formValues: {genres:string,title:string}) => {
    const { genres, title } = formValues;

    const movies = await movieService.get(`?name=${title}&genres=${genres}&page=${page}&pageSize=${pageSize}`);
    setSearchParams({...searchParams,genres,title})
    navigate(`?name=${title}&genres=${genres}&page=${page}&pageSize=${pageSize}`)
    

    return movies;
  };

  const extractYouTubeVideoId = (link:string) => {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = link.match(regex);

    // If there is a match, return the video ID, otherwise return null or handle as needed
    return match ? match[1] : null;
  };

  const contextValues:MovieContext = {
    movies,
    onMovieCreateSubmit,
    searchMovie,
    onDelete,
    vote,
    extractYouTubeVideoId, 
    getLastThree,
    setMovies,
    edit
  };

  return (
    <MovieContext.Provider value={contextValues}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
