import { useCallback, useState, useRef, useEffect } from 'react'
import styles from '../styles/PostForm.module.css'
import postStyles from '../styles/Post.module.css'
import { FaThumbtack} from "react-icons/fa";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go"
import usePost from "../hooks/usePost"

export default function PostForm({loadData}){
    const [values, setValues] = useState({})
    const {createPost} = usePost()
    const $title = useRef(null)
    const $description = useRef(null)

    useEffect(()=>{
        $title.current.textContent = values.title
        $description.current.textContent = values.description
    },[values])

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(values)
        .then(e => {
            if(loadData) loadData()
        })
    }

    const handleInput = (e) => {
        e.preventDefault()
        const name = e.target.attributes['name'].value
        if(name === 'title' && e.target.innerText.length > 13) return setValues({...values})
        setValues({...values, [name]: e.target.innerText})
    }

    return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
        <h2>Create Post</h2>
        <div className={postStyles.post}>
            <div className={postStyles.Header}>
                <div className={postStyles.likes}>
                    <GoTriangleUp/>
                    <p>0</p>
                    <GoTriangleDown/>
                </div>
                <h1 ref={$title} onInput={handleInput} placeholder="Title..." name="title" contentEditable="true"/>
                <FaThumbtack className={postStyles.Pin} />
            </div>
            <p ref={$description} onInput={handleInput} placeholder="Description..." name="description" contentEditable="true"/>
            <div className={postStyles.Footer}>
                <time dateTime="timeExample">today</time>
            </div>
        </div>
        <div className={styles.formFooter}>
            <button type="submit">Create Post</button>
        </div>
        
    </form>)
}