import Context from "../context/UserContext"
import postFetch from "../utils/postFetch"
import { useCallback, useContext } from "react"

export default function useUser(){
    const {jwt, setJwt} = useContext(Context)
    
    const login = useCallback(({username, password}) =>{
        return new Promise((resolve, reject)=>{
            postFetch('/api/session/login',{username, password})
            .then(({success}) => {
                if(success){
                    console.log("hola")
                    window.localStorage.setItem('jwt', 'true')
                    setJwt(true)
                    resolve()
                } else {
                    window.localStorage.removeItem('jwt')
                    reject()
                }
            })
            .catch(e => reject())
        })
    },[setJwt])

    const register = useCallback(({username, password}) => {
        return new Promise((resolve, reject)=>{
            postFetch('/api/session/register', {username, password})
            .then(async ({success}) => {
                if(success) {
                    console.log("bien")
                    await login({username, password})
                    resolve()
                } else {
                    reject()
                }
            })
            .catch(e => reject())
        })

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
        return postFetch('/api/session/verifyUser', {username})
        .then(({success}) => {return success})
        .catch(e => {return false})
    },[])

    return{
        isLogged: Boolean(jwt),
        login,
        logout,
        register,
        verifyUser,
    }
}