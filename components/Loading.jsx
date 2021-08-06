import Spinner from "./Spinner"
import { FaCheck, FaTimes } from "react-icons/fa"
import useFetch from "../hooks/useFetch"
import styles from "../styles/Loading.module.css"
export default function Loading({promise, params, spinnerSize = "3rem", spinnerColor = "green", clearDataOnLoad = false}){
    const {isLoading, data, error} = useFetch({loadOnMount: true,fetchFn: promise, params, clearDataOnLoad})
    const status = () =>{
        if (isLoading) return <Spinner size={spinnerSize} color={spinnerColor}/>
        if (data) return <FaCheck className={styles.icon} fill="green"/>
        if (error)return <FaTimes className={styles.icon} fill="red"/>
        return null
    }

    return(
        status()
    )
}