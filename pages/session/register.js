import styles from '../../styles/Register.module.css'
import UserForm from '../../components/UserForm'
import { useEffect } from 'react'
import router from 'next/router'
import useUser from '../../hooks/useUser'
export default function Register(){
    const {register, verifyUser, isLogged} = useUser()

    useEffect(()=> {
        if(isLogged) router.push('/')
    }, [isLogged])

    const onCHangeUser = async ({username}) =>{
        return await verifyUser({username})
    }

    const inputs = [{
        type: "text",
        placeholder: "Username...",
        name: "username",
        onChange: onCHangeUser,
    },{
        type: "Password",
        placeholder: "Password...",
        name: "password",
    }]

    return (
    <main className={styles.main}>

        <UserForm btnText="Register" onSubmit={register} inputs={inputs}></UserForm>

    </main>
    )
}