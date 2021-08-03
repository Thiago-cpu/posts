import styles from '../../styles/Register.module.css'
import UserForm from '../../components/UserForm'
import postFetch from '../../utils/postFetch'
import router from 'next/router'
import useUser from '../../hooks/useUser'
export default function Register(){
    const {register, verifyUser} = useUser()
    const onChange = async ({username}) =>{
        if(!username) return
        const isVerify = await verifyUser({username})
        if(isVerify) return console.log("usuario válido")
        console.log("usuario no válido")
    }
    const inputs = [{
        type: "text",
        placeholder: "Username...",
        name: "username",
        onChange,
    },{
        type: "Password",
        placeholder: "Password...",
        name: "password",
    }]
    const onSubmit = async ({username, password}) => {
        const isRegister = await register({username, password})
        if(isRegister) return router.push('/session/login')
        console.log("Ha ocurrido un error o el usuario ya existe")
    }
    return (
    <main className={styles.main}>

        <UserForm btnText="Register" onSubmit={onSubmit} inputs={inputs}></UserForm>

    </main>
    )
}