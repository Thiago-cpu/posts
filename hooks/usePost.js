import router from "next/router";
import postFetch from "../utils/postFetch";
import useUser from "./useUser";

export default function usePost(){
    const {isLogged} = useUser()
    
    const createPost = (postData) =>{
        if (!isLogged) return router.push("/session/login")
        return postFetch({url: "/api/post/crud", params: postData})
    }
    const getMyPost = () =>{
        return postFetch({url: "/api/post/crud",method:"GET"})
    }
    const getAllPost = () =>{
        return postFetch({url: "/api/post/getAll",method:"GET"})
    }
    const deletePost = (postId) => {
        return postFetch({url: "/api/post/crud",method:"DELETE", params: postId})
    }
    const updatePost = ({postId, title, description}) => {
        return postFetch({url: "/api/post/crud",method:"PUT", params: {postId, title, description}})
    }
    return {
        createPost,
        getMyPost,
        getAllPost,
        deletePost,
        updatePost,
    }
}