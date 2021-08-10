import router from "next/router";
import { useCallback } from "react";
import postFetch from "../utils/postFetch";
import useUser from "./useUser";

export default function usePost(){
    const {isLogged} = useUser()
    
    const createPost = useCallback((postData) =>{
        if (!isLogged) return router.push("/session/login")
        return postFetch({url: "/api/post/crud", params: postData})
    },[isLogged])
    
    const getMyPost = useCallback(() =>{
        return postFetch({url: "/api/post/crud",method:"GET"})
    },[])

    const getAllPost = useCallback(() =>{
        return postFetch({url: "/api/post/getAll",method:"GET"})
    },[])

    const deletePost = useCallback((postId) => {
        return postFetch({url: "/api/post/crud",method:"DELETE", params: postId})
    },[])

    const updatePost = useCallback(({postId, title, description}) => {
        return postFetch({url: "/api/post/crud",method:"PUT", params: {postId, title, description}})
    },[])

    return {
        createPost,
        getMyPost,
        getAllPost,
        deletePost,
        updatePost,
    }
}