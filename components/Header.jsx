import styles from '../styles/Header.module.css'
import MyLink from './MyLink'
import useUser from '../hooks/useUser'

export default function Header(){
    const {isLogged, logout} = useUser()
    const sessionHandler = () => {
        if(isLogged){
            return (
            <>
                <MyLink to='/myPosts'>myPosts</MyLink>
                <a className={styles.pointer} onClick={logout}>logout</a>
            </>
            )
        } else {
            return (
                <>
                    <MyLink to='/session/login'>Login</MyLink>
                    <MyLink to='/session/register'>Register</MyLink>
                </>)
        }
    }

    return (
        <header className={styles.headerContainer}>
            <nav className={styles.sitesContainer}>
                <MyLink to="/">Home</MyLink>
            </nav>
            <nav className={styles.userContainer}>
                {sessionHandler()}
            </nav>

        </header>
    )
}