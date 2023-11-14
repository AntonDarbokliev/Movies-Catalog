import { useState } from "react"

export const useLocalStorage = (key,initialValue) => {

    const [state,setState] = useState(() => {
        const currentValue = localStorage.getItem(key)
        if(currentValue){
            const persistedValue = JSON.parse(currentValue)
            return persistedValue
        }

        return initialValue
    })

    const setLocalStorageState = (value) => {
        setState(value)

        localStorage.setItem('auth',JSON.stringify(value))
    }

    return [
        state,
        setLocalStorageState
    ]

}