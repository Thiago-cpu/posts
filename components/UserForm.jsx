import styles from '../styles/UserForm.module.css'
import {useState} from 'react'
export default function UserForm({btnText = "Enviar", inputs, onSubmit}){
    const [inputValues, setInputValue] = useState({})
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!validateForm()) return alert("Llena el formulario antes de enviar")
        if(onSubmit) return onSubmit(inputValues)
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
        <button className={styles.submit} type="submit">{btnText}</button>
    </form>
)
}