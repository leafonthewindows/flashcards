import styles from './page.module.css'
import Card from '../../components/Card/Card'
import Determiation from '../../components/Determination/Determination'
import Determination from '../../components/Determination/Determination'

export default function quiz() {
    return (
      <main className={styles.main}>
        {/*Quiz and Tag List Link*/}
        {/*Pass Data into Card component */}
        <Card>
          <p>This is a card!</p>
        </Card>
        <Determination>
        </Determination>
        {/*Quiz Options Component*/}
        {/*Determination Component*/}
        {/* */}
      </main>
    )
  } 