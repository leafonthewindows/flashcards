import Button from '../UI/Button/Button'
import styles from "./Determination.module.css"


export default function Determination() {
return(
    <div className={styles.determination}>
        <Button>
            Don't know it
        </Button>
        <Button>
            Know it
        </Button>
    </div>
  )
}