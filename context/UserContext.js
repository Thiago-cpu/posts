import { useState, createContext, useEffect } from "react";

const Context = createContext({})

export function UserContextProvider({children}){
    const [jwt, setJwt] = useState(null)
    useEffect(()=>{
        setJwt(window.localStorage.getItem('jwt'))
    },[])

    return <Context.Provider value={{jwt, setJwt}}>
        {children}
    </Context.Provider>

}

export default Context