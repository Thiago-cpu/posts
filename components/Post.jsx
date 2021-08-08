import styles from '../styles/Post.module.css'
import { FaThumbtack, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go"
export default function Post({likes, title, description, publishedAt}) {
    return (
        <div className={styles.post}>
            <div className={styles.Header}>
                <div className={styles.likes}>
                    <GoTriangleUp/>
                    <p>{likes}</p>
                    <GoTriangleDown/>
                </div>
                <h1>{title}</h1>
                <FaThumbtack className={styles.Pin} />
            </div>
            <p>{description}</p>
            <div className={styles.Footer}>
                <time dateTime="timeExample">{publishedAt}</time>
            </div>
        </div>)
}