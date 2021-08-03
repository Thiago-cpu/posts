import Context from "../context/UserContext"
import postFetch from "../utils/postFetch"
import { useCallback, useContext } from "react"
export default function useUser(){
    const {jwt, setJwt} = useContext(Context)
    
    const login = useCallback(async ({username, password}) => {
        postFetch('/api/session/login',{username, password})
        .then( res => {
            if(!res.success || !res.data) return
            window.localStorage.setItem('jwt', res.data)
            setJwt(res.data)
        })
        .catch(e=>{
            window.localStorage.removeItem('jwt')
            console.error(e)
        })
    },[setJwt])

    const register = useCallback(async ({username, password}) => {
        const res = await postFetch('/api/session/register', {username, password})
        if(res.success)return true
        return false
    },[])

    const logout = useCallback(async ()=>{
        postFetch('/api/session/logout')
        .then(res => {
            if (!res.success) return
            setJwt(null)
            window.localStorage.removeItem('jwt')
        })
        
    },[setJwt])

    const verifyUser = useCallback(async ({username}) =>{
        const res = await postFetch('/api/session/verifyUser', {username})
        if(res.success) return true
        return false
    },[])

    return{
        isLogged: Boolean(jwt),
        login,
        logout,
        register,
        verifyUser,
    }
}