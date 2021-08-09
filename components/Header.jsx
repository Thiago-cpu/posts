import styles from '../styles/Header.module.css'
import MyLink from './MyLink'
import useUser from '../hooks/useUser'
import {useRouter} from 'next/router'
import { useEffect } from 'react'

const PagesNeedLogged = ["/myPosts", "/session/profile"]

export default function Header(){
    const {user, logout, isLogged} = useUser()

    const router = useRouter()
    
    useEffect(()=>{
        if(PagesNeedLogged.includes(router.pathname) && !isLogged) router.push('/session/login')
    })
    
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.sitesContainer}>
                <MyLink to="/">Home</MyLink>
                {isLogged && <MyLink to='/myPosts'>myPosts</MyLink>}
            </nav>
            <nav className={styles.userContainer}>
                {isLogged
                ?<>
                <MyLink to='/session/profile'>{user}</MyLink>
                <MyLink to='/'><a onClick={logout}>logout</a></MyLink>
                </>
                :<>
                <MyLink to='/session/login' >Login</MyLink>
                <MyLink to='/session/register'>Register</MyLink>
                </>}
            </nav>
        </header>
    )
}