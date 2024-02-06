import Link from 'next/link'

import styles from './Nav.module.css'

export default function Nav () {
    return(
        <nav className={styles.navigation}>
            <div className={styles.home}>
                <Link href='/'>FlashCRUDs</Link>
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
        </nav>
    )
}