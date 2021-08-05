import styles from '../styles/UserForm.module.css'
import {useState, useCallback, useEffect} from 'react'
import Spinner from './Spinner'
import { FaCheck, FaCross, FaTimes } from 'react-icons/fa';
export default function UserForm({btnText = "Enviar", inputs, onSubmit}){
    const [inputValues, setInputValue] = useState({})
    const [isInputLoading, setisInputLoading] = useState({})
    const [buttonState, setButtonState] = useState("default")

    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(!validateForm(inputValues)) {
            return alert("Llena el formulario antes de enviar")
        }

        if(onSubmit ){ 
            setButtonState("loading")
            onSubmit(inputValues)
            .then(res => {
                setButtonState("success")
            })
            .catch (e => {
                setButtonState("failure")
            })
        }
    }

    const validateForm = useCallback((inputValues) =>{
        for(let i = 0; i<inputs.length; i++){
            let name = inputs[i].name
            if(!inputValues[name]) return false 
        }
        return true
    },[inputs])

    const handleChange = useCallback((e, onChange) =>{
        e.preventDefault()
        const {value, name} = e.target
        setInputValue({...inputValues, [name]: value})
        if(buttonState === "failure") setButtonState("default")
        if(onChange) {
            setisInputLoading({...isInputLoading, [name]: {loading: true, success: false}})
            onChange({[name]:value})
            .then(res=>{
                
                if(res) return setisInputLoading({...isInputLoading, [name]: {loading: false, success: true}})

                setisInputLoading({...isInputLoading, [name]: {loading: false, success: false}})
            })
        }
    },[inputValues, isInputLoading, setButtonState, buttonState])

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
    
    
   
    const getElementFor = useCallback(buttonState => {
        const buttonStates = {
            "loading": <Spinner size="3rem" color="red"/>,
            "success": <FaCheck className={styles.icon} fill="green"/>,
            "failure": <FaTimes className={styles.icon} fill="red" />,
            "default": <button className={styles.submit} type="submit">{btnText}</button>
        } 
        return buttonStates[buttonState]
    },[btnText])

return(
    <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            {getInputs(inputs)}
        </div>
        {getElementFor(buttonState)}
        
    </form>
)
}