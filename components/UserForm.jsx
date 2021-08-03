import styles from '../styles/UserForm.module.css'
import {useState} from 'react'
import Spinner from './Spinner'
import { FaCheck, FaCross } from 'react-icons/fa';
export default function UserForm({btnText = "Enviar", inputs, onSubmit}){
    const [inputValues, setInputValue] = useState({})
    const [isInputLoading, setisInputLoading] = useState({})
    const [dataForm, setDataForm] = useState({isFormLoading: false, error: false})
    const handleSubmit = async (e) =>{
        setDataForm({isFormLoading: true, error: false})
        e.preventDefault()
        if(!validateForm()) return alert("Llena el formulario antes de enviar")
        if(onSubmit ){ 
            if(!await onSubmit(inputValues)){
                setDataForm({isFormLoading: false, error: true})
            }
        }
        setInputValue({})
    }
    const validateForm = () =>{
        for(let i = 0; i<inputs.length; i++){
            let name = inputs[i].name
            if(!inputValues[name]) return false 
        }
        return true
    }
    const handleChange = (e, onChange) =>{
        e.preventDefault()
        const {value, name} = e.target
        setInputValue({...inputValues, [name]: value})
        if(onChange) {
            setisInputLoading({...isInputLoading, [name]: {status: true, success: false}})
            onChange({[name]:value})
            .then(res=>{
                
                if(res) return setisInputLoading({...isInputLoading, [name]: {status: false, success: true}})

                setisInputLoading({...isInputLoading, [name]: {status: false, success: false}})
            })
        }
    }

    const getInputs = ()=>{
        return inputs.map((input, i) => {
            const {type, placeholder, name, onChange} = input
            return (<div className={styles.rowInput} key={i}>
                        <input name={name} className={styles.input} value={inputValues[name]?inputValues[name]:""} type={type} onChange={(e)=>{handleChange(e, onChange)}} placeholder={placeholder}/>
                        {isInputLoading[name]?.status
                        ?<Spinner size="30px" color="blue"/>
                        :isInputLoading[name]?.success
                        ?<FaCheck className={styles.icon} fill="green"/>
                        :isInputLoading[name]?.success === false
                        ?<FaCross className={styles.icon} fill="red"/>
                        :null
                        }
                    </div>)
        })
    }
return(
    <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            {getInputs()}
        </div>
        {dataForm.isFormLoading && !dataForm.error
        ?<Spinner/>
        :<button className={styles.submit} type="submit">{btnText}</button>
        }
        
    </form>
)
}