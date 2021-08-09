import router from "next/router";
import postFetch from "../utils/postFetch";
import useUser from "./useUser";

export default function usePost(){
    const {isLogged} = useUser()
    
    const createPost = (postData) =>{
        if (!isLogged) return router.push("/session/login")
        return postFetch({url: "/api/post/createPost", params: postData})
        .then(res => {return res})
        .catch (err => {throw new Error(err)})

    }
    return {
        createPost,
    }
}