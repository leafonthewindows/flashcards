import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        Hello, World!
      </p>
      <Link href="/quiz">Quiz me now!</Link>
    </main>
  )
}
