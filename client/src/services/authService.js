import { requestFactory } from "./requester.js";

const baseUrl = 'http://localhost:3000/user'

export const authServiceFactory = () => {
    const request = requestFactory()    //TODO: Add token parameter to requestFactory

    return {
        login : (data) => request.post(`${baseUrl}/login`,data),
        register : (data) => request.post(`${baseUrl}/register`,data),
        logout : () => request.get(`${baseUrl}/logout`)
    }
}