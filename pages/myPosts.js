import styles from '../styles/Home.module.css'
import Post from '../components/Post';
import PostForm from '../components/PostForm'
import usePost from '../hooks/usePost';
import useFetch from '../hooks/useFetch';
import Spinner from '../components/Spinner';

export default function MyPosts() {

    const {getMyPost} = usePost()
    const {isLoading, data: res, loadData} = useFetch({loadOnMount: true, fetchFn: getMyPost})

    return (
        <main className={styles.main}>
        <PostForm loadData={loadData}/>
        {isLoading && <Spinner/>}
        <div className={styles.postContainer}>
        {!isLoading && res?.data && (
            res.data.map(post => {
            return <Post key={post._id} {...post} ></Post>
            }
        ))}
        </div>
        </main>
    )
}