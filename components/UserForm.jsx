import styles from '../styles/UserForm.module.css'
import {useState} from 'react'
import Spinner from './Spinner'
export default function UserForm({btnText = "Enviar", inputs, onSubmit}){
    const [inputValues, setInputValue] = useState({})
    const [dataForm, setDataForm] = useState({isLoading: false, error: false})
    const handleSubmit = async (e) =>{
        setDataForm({isLoading: true, error: false})
        e.preventDefault()
        if(!validateForm()) return alert("Llena el formulario antes de enviar")
        if(onSubmit ){ 
            if(!await onSubmit(inputValues)){
                setDataForm({isLoading: false, error: true})
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
        if(onChange) onChange({[name]:value})
    }

    const getInputs = ()=>{
        return inputs.map((input, i) => {
            const {type, placeholder, name, onChange} = input
            return <input key={i} name={name} value={inputValues[name]?inputValues[name]:""} type={type} onChange={(e)=>{handleChange(e, onChange)}} placeholder={placeholder}/>
        })
    }
return(
    <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            {getInputs()}
        </div>
        {dataForm.isLoading && !dataForm.error
        ?<Spinner/>
        :<button className={styles.submit} type="submit">{btnText}</button>
        }
        
    </form>
)
}