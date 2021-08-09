import styles from '../styles/Post.module.css'
import { FaThumbtack} from "react-icons/fa";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go"

export default function Post({likes = 0, title = "", getData = null, description = "", publishedAt = "today", contentEditable = false}) {
    return (
        <div className={styles.post}>
            <div className={styles.Header}>
                <div className={styles.likes}>
                    <GoTriangleUp/>
                    <p>{likes}</p>
                    <GoTriangleDown/>
                </div>
                <h1 contentEditable={contentEditable}>{title}</h1>
                <FaThumbtack className={styles.Pin} />
            </div>
            <p contentEditable={contentEditable}>{description}</p>
            <div className={styles.Footer}>
                <time dateTime="timeExample">{publishedAt}</time>
            </div>
        </div>)
}