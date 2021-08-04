import styles from '../styles/UserForm.module.css'
import {useState, useCallback, useEffect} from 'react'
import Spinner from './Spinner'
import { FaCheck, FaCross } from 'react-icons/fa';
export default function UserForm({btnText = "Enviar", inputs, onSubmit}){
    const [inputValues, setInputValue] = useState({})
    const [isInputLoading, setisInputLoading] = useState({})
    const [dataForm, setDataForm] = useState({isFormLoading: false, error: false})

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!validateForm()) {
            return alert("Llena el formulario antes de enviar")
        }

        if(onSubmit ){ 
            setDataForm({isFormLoading: true, error: false})
            onSubmit(inputValues)
            .then(res => {
                setDataForm({isFormLoading: false, error: false})
            })
            .catch (e => {
                setDataForm({isFormLoading: false, error: true})
            })
        }
    }

    const validateForm = () =>{
        for(let i = 0; i<inputs.length; i++){
            let name = inputs[i].name
            if(!inputValues[name]) return false 
        }
        return true
    }

    const handleChange = useCallback((e, onChange) =>{
        e.preventDefault()
        const {value, name} = e.target
        setInputValue({...inputValues, [name]: value})
        if(onChange) {
            setisInputLoading({...isInputLoading, [name]: {loading: true, success: false}})
            onChange({[name]:value})
            .then(res=>{
                
                if(res) return setisInputLoading({...isInputLoading, [name]: {loading: false, success: true}})

                setisInputLoading({...isInputLoading, [name]: {loading: false, success: false}})
            })
        }
    },[inputValues, isInputLoading])

    const getInputStatus = useCallback(({loading, success}) =>{
        if(loading) return <Spinner size="30px" color="blue"/>
        if(success) return <FaCheck className={styles.icon} fill="green"/>
        if(success === false) return <FaCross className={styles.icon} fill="red"/>
        return null
    },[])

    const getInputs = useCallback(inputs=>{
        return inputs.map((input, i) => {
            const {type, placeholder, name, onChange} = input
            return (<div className={styles.rowInput} key={i}>
                        <input name={name} className={styles.input} value={inputValues[name]?inputValues[name]:""} type={type} onChange={(e)=>{handleChange(e, onChange)}} placeholder={placeholder}/>
                        {isInputLoading[name]
                        ?getInputStatus(isInputLoading[name])
                        :null
                 }
                    </div>)
        })
    },[getInputStatus, handleChange, inputValues, isInputLoading])

    const spinnerOrBtn = useCallback(({isFormLoading, error}) => {

        if(isFormLoading && !error){
            console.log("spinner time")
            return <Spinner size="60px" color="red"/>
        }else {    
            console.log("button time")
        return <button className={styles.submit} type="submit">{btnText}</button>
        }
    },[btnText])

return(
    <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            {getInputs(inputs)}
        </div>
        {spinnerOrBtn(dataForm)}
        
    </form>
)
}