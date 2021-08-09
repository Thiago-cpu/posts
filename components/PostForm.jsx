import { useCallback, useState } from 'react'
import styles from '../styles/PostForm.module.css'
import Post from "./Post"
export default function PostForm(){
    const [values, setValues] = useState({
        title: "title...",
        description: "description...",
    })
    const getData = useCallback((fromPost) => {
        setValues(fromPost)
    }, [setValues])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`title: ${values.title}, description: ${values.description}`)
    }


    return (
    <form className={styles.createPost} onSubmit={handleSubmit}>
        <h2>Create Post</h2>
        <Post contentEditable = "true" title="Title..." getData={getData} description="description..."/>
        <button type="submit">Create Post</button>
    </form>)
}