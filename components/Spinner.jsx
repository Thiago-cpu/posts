import styles from '../styles/Spinner.module.css'
export default function Spinner({size="50px", color="red"}){
    return <div className={styles.spinner} style={{width: size, height: size, borderLeftColor: color}}></div>

}