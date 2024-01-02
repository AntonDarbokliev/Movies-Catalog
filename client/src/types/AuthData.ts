export interface LoginData {
    name:string,
    password:string
  }
  
export interface RegisterData extends LoginData {
    email:string
  }