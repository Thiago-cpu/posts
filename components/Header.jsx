import styles from '../styles/Header.module.css'
import MyLink from './MyLink'
import useUser from '../hooks/useUser'

export default function Header(){
    const {user, logout, isLogged} = useUser()
    return (
        <header className={styles.headerContainer}>
            <nav className={styles.sitesContainer}>
                <MyLink to="/">Home</MyLink>
                {isLogged && <MyLink to='/myPosts'>myPosts</MyLink>}
            </nav>
            <nav className={styles.userContainer}>
                {isLogged && user
                ?(<>
                <MyLink to='/session/profile'>{user.username}</MyLink>
                <MyLink to='/'><a onClick={logout}>logout</a></MyLink>
                </>)
                :<>
                <MyLink to='/session/login' >Login</MyLink>
                <MyLink to='/session/register'>Register</MyLink>
                </>}
            </nav>
        </header>
    )
}