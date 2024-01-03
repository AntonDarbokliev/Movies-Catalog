export interface LoginData {
    name:string,
    password:string
  }
  
export interface RegisterData extends LoginData {
    email:string
  }

  export interface LocalStorageAuthInfo {
    email:string
    password:string
    token: string
    username: string
    __v: number
    _id: string
  }

  export interface UserData {
    _id:string,
    username:string
    email:string
    password:string
    __v:number
  }