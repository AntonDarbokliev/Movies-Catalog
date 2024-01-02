import { useState } from "react"

interface localStorageStateType {
    email:string,
    password:string,
    token:string,
    username:string,
    __v?: number,
    _id?: string
}

export const useLocalStorage = (key:string) => {

    const [state,setState] = useState<localStorageStateType>(() => {
        const currentValue = localStorage.getItem(key)
        if(currentValue){
            const persistedValue:localStorageStateType = JSON.parse(currentValue)
            return persistedValue
        }

        return {
            email:'',
            password:'',
            token:'',
            username:'',
        }
    })

    const setLocalStorageState = (value:localStorageStateType) => {
        setState(value)

        localStorage.setItem('auth',JSON.stringify(value))
    }

    return [
        state,
        setLocalStorageState
    ] as const  //Telling TS that i want this arr to be a fixed tuple 

}