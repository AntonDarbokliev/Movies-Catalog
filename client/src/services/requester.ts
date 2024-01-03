import { LoginData, RegisterData } from "../types/AuthData";
import { MovieData, ExtendedMovieData } from "../types/movieData";

type RequestParameters = [
  method:'GET' | 'POST' | 'PUT' | 'DELETE',
  url?:string,
  data? : LoginData | RegisterData | MovieData | ExtendedMovieData
]

//{userId:string,movieData?:MovieData}

interface OptionsValues {
  method?:string;
  headers?:{
    "Content-Type": "application/json"
  };
  body?:string;

}

const request = async (method:RequestParameters[0],url:RequestParameters[1],data?:RequestParameters[2]) => {
  const options:OptionsValues = {};
  
  if (method !== "GET") {

    options.method = method;

    if (data) {
      options.headers = {
        "Content-Type": "application/json",
      };
      options.body = JSON.stringify(data);
    }
  }  
  
  const response = await fetch(url!, options);
  
  if (!response.ok) {
    const result = await response.json()
    throw result;
  }
  
  if (response.status === 204) {
  return {};
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error(response.statusText);
  }

};

export const requestFactory = () => {
    return {
        get: request.bind(null, "GET"),
        post: request.bind(null,"POST"),
        put: request.bind(null, "PUT"),
        delete: request.bind(null, "DELETE"),
    }
};
