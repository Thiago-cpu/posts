import Context from "../context/UserContext"
import postFetch from "../utils/postFetch"
import { useCallback, useContext } from "react"

export default function useUser() {
    const { jwt, setJwt } = useContext(Context)

    const login = useCallback(({ username, password }) => {
        return postFetch({ url: '/api/session/login', params: { username, password } })
            .then(res => {
                window.localStorage.setItem('jwt', JSON.stringify({username, id: res.id}))
                setJwt({username, id: res.id})
                return res
            })
            .catch(e => {
                window.localStorage.removeItem('jwt')
                throw new Error
            })

    }, [setJwt])

    const register = useCallback(({ username, password }) => {
        return postFetch({ url: '/api/session/register', params: { username, password } })
            .then(async res => {
                await login({ username, password })
                return res
            })
            .catch(e => {throw new Error})
        

    }, [login])

    const logout = useCallback(async () => {
        postFetch({ url: '/api/session/logout' })
            .then(data => {
                setJwt(null)
                window.localStorage.removeItem('jwt')
            })
            .catch(data => {
                console.log(data)
            })
    }, [setJwt])

    const verifyUser = useCallback(async ({ username }) => {
        return postFetch({ url: '/api/session/verifyUser', params: { username } })
            .then(res => {
                return res
            })
            .catch(e => {throw new Error})

    }, [])
    return {
        user: jwt,
        isLogged: Boolean(jwt),
        login,
        logout,
        register,
        verifyUser,
    }
}