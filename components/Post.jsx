import styles from '../styles/Post.module.css'
import { FaThumbtack, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go"
import { useEffect, useRef, useState } from 'react';
export default function Post({likes = 0, title = "", getData = null, description = "", publishedAt = "today", contentEditable = false}) {
    const [values, setValues] = useState({
        title,
        description,
    })
    
    const $title = useRef(null)
    const $description = useRef(null)

    useEffect(()=>{
        console.log($title)
        $title.current.textContent = values.title
        $description.current.textContent = values.description
        if(getData) getData(values)
    },[values, getData])
    
    return (
        <div className={styles.post}>
            <div className={styles.Header}>
                <div className={styles.likes}>
                    <GoTriangleUp/>
                    <p>{likes}</p>
                    <GoTriangleDown/>
                </div>
                <h1 ref={$title} onInput={(e)=>{setValues({...values,title: e.target.innerText})}} name="title" contentEditable={contentEditable}></h1>
                <FaThumbtack className={styles.Pin} />
            </div>
            <p ref={$description} onInput={(e)=>{setValues({...values,description: e.target.innerText})}} name="description" contentEditable={contentEditable}></p>
            <div className={styles.Footer}>
                <time dateTime="timeExample">{publishedAt}</time>
            </div>
        </div>)
}