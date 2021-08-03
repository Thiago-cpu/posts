import Context from "../context/UserContext"
import postFetch from "../utils/postFetch"
import { useCallback, useContext } from "react"
export default function useUser(){
    const {jwt, setJwt} = useContext(Context)
    
    const login = useCallback(async ({username, password}) => {
        const {success, data} = await postFetch('/api/session/login',{username, password})
        if(success && data){
            window.localStorage.setItem('jwt', data)
            setJwt(data)
            console.log("se envio true")
            return true
        } else {
            window.localStorage.removeItem('jwt')
            return false
        }
    },[setJwt])

    const register = useCallback(async ({username, password}) => {
        const {success} = await postFetch('/api/session/register', {username, password})
        if(success) {
            return await login({username, password})
        }
        return false
    },[login])

    const logout = useCallback(async ()=>{
        postFetch('/api/session/logout')
        .then(res => {
            if (!res.success) return
            setJwt(null)
            window.localStorage.removeItem('jwt')
        })
        
    },[setJwt])

    const verifyUser = useCallback(async ({username}) =>{
        const {success} = await postFetch('/api/session/verifyUser', {username})
        return success
    },[])

    return{
        isLogged: Boolean(jwt),
        login,
        logout,
        register,
        verifyUser,
    }
}