import styles from './Nav.module.css'

export const Nav = () => {
    return(
        <nav className={styles.navigation}>
            <div>
                <p>Cool Logo</p>
            </div>
            <div>
                <p>Login</p>
                <p>Sign Up</p>
            </div>
        </nav>
    )
}