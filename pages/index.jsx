import styles from '../styles/Home.module.css'
import Post from '../components/Post';
import PostForm from '../components/PostForm'
import usePost from '../hooks/usePost';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';

export default function Home() {
  const {getAllPost} = usePost()
  const {isLoading, data: res, error} = useFetch({loadOnMount: true, fetchFn: getAllPost})

  return (
    <main className={styles.main}>
      <PostForm/>
      
      <div className={styles.postContainer}>
      {isLoading && <Spinner/>}
      {!isLoading && res?.data && (
        res.data.map(post => {
          return <Post key={post._id} {...post} ></Post>
        }
      ))}
      </div>
    </main>
  )
}
