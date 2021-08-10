import styles from '../styles/Post.module.css'
import { FaTimes } from "react-icons/fa";
import useUser from '../hooks/useUser';
import usePost from '../hooks/usePost';
import useTimeAgo from '../hooks/useTimeAgo';
import { useState, useRef, useEffect } from 'react';

export default function Post({ title = "",_id: postId, getData = null, description = "", publishedAt = null, userId}) {
    const timeAgo = useTimeAgo(new Date(publishedAt))
    const {user} = useUser()
    const {updatePost, deletePost} = usePost() 
    const contentEditable = user?.id === userId
    const $post = useRef(null)
    const $title = useRef(null)
    const $description = useRef(null)

    useEffect(()=>{
        $title.current.textContent = title
        $description.current.textContent = description
    })
    const handleTitleInput = (e) => {
        if(e.keyCode === 13) e.preventDefault()
        if(e.target.innerText.length > 13) e.target.innerText = e.target.innerText.substring(0,13)
    }

    const handleBlur = (e)=>{
        const values = {postId, title: $title.current.textContent , description: $description.current.textContent}
        updatePost(values)
        .catch(e=>{
            console.error(e)
        })
    }

    const handleDelete = (e) =>{
        e.preventDefault()

        $post.current.style.display = "none"
        deletePost({postId})
        .catch(err => console.log(err))
    }

    return (
        <div ref={$post} className={styles.post}>
            <div className={styles.Header}>
                <h1 ref={$title} onBlur={handleBlur} onKeyDown={handleTitleInput} name="title" contentEditable={contentEditable}/>
                {contentEditable && <FaTimes onClick={handleDelete} className={styles.Delete} fill="red"/>}    
            </div>
            <p ref={$description} onBlur={handleBlur} name="description" contentEditable={contentEditable}/>
            <div className={styles.Footer}>
                <time dateTime="timeExample">{timeAgo}</time>
            </div>
        </div>)
}