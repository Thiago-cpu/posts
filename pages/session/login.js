import styles from '../../styles/Login.module.css'
import UserForm from '../../components/UserForm'
import router from 'next/router'
import useUser from '../../hooks/useUser'
import { useEffect } from 'react'

export default function Login(){
    const {login, isLogged} = useUser()

    useEffect(()=> {
        if(isLogged) router.push('/')
    }, [isLogged])
    
    const inputs = [{
        type: "text",
        placeholder: "Username...",
        name: "username",
    },{
        type: "Password",
        placeholder: "Password...",
        name: "password",
    }]
    const onSubmit = async ({username, password}) => {
        return await login({username, password})
    }
    return (
        <main className={styles.main}>
            <UserForm btnText="Login" inputs={inputs} onSubmit={onSubmit}/>
        </main>
    )
}