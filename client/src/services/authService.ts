import { requestFactory } from "./requester.js";
import { LoginData,RegisterData} from '../types/AuthData.js'

const baseUrl = `${import.meta.env.VITE_BASE_URL}/user`

export const authServiceFactory = () => {
    const request = requestFactory()    //TODO: Add token parameter to requestFactory

    return {
        login : (data: LoginData) => request.post( `${baseUrl}/login`, data),
        register : (data: RegisterData) => request.post(`${baseUrl}/register`,data),
        logout : () => request.get(`${baseUrl}/logout`),
        getUser : (id:string) => request.get(`${baseUrl}/${id}`)
    }
}