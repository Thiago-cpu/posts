import styles from '../styles/Header.module.css'
import MyLink from './MyLink'
import useUser from '../hooks/useUser'

export default function Header(){
    const {logout} = useUser()
    return (
        <header className={styles.headerContainer}>
            {/* {createNavBar()} */}
            <nav className={styles.sitesContainer}>
                    <MyLink to="/">Home</MyLink>
                    <MyLink to='/myPosts' needLogged>myPosts</MyLink>
                </nav>
                <nav className={styles.userContainer}>
                    <MyLink to='/session/login' needLogout >Login</MyLink>
                    <MyLink to='/session/register' needLogout>Register</MyLink>
                    <MyLink to='/' needLogged ><a onClick={logout}>logout</a></MyLink>
            </nav>
        </header>
    )
}