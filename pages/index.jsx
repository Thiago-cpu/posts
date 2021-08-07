import styles from '../styles/Home.module.css'
import {FaThumbtack, FaThumbsUp, FaThumbsDown}  from "react-icons/fa";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.postContainer}>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <div className={styles.likes}>
              <GoTriangleUp/>
                <p>0</p>
              <GoTriangleDown/> 
            </div>
            <h1>Titlexample</h1>
            <FaThumbtack className={styles.postPin} />
          </div>
          <p>descripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostextodescripcionexamplemuchostexto</p>

          <div className={styles.postFooter}>
            <time dateTime="timeExample">timeExample</time>
          </div>
         

        </div>
      </div>
    </main>
  )
}
