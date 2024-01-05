import styles from './Nav.module.css'

export default function Nav () {
    return(
        <nav className={styles.navigation}>
            <div>
                <p>Cool Logo</p>
            </div>
            {/* if not logged in  */}
            <div>
                <p>Login</p>
            </div>
            <div>
                <p>Sign Up</p>
            </div>
            {/* if logged in */}
            <div>
                <p>User Icon</p>
                {/* opens dropdown with user info */}
            </div>
            <div>
                <p>Logout</p>
            </div>
        </nav>
    )
}