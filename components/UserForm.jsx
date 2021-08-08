import styles from '../styles/UserForm.module.css'
import {useState, useCallback, useEffect} from 'react'
import Loading from './Loading';
export default function UserForm({btnText = "Enviar", inputs, onSubmit}){
    const [inputValues, setInputValue] = useState({})
    const [clickButton, setClickButton] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!validateForm(inputValues)) {
            return alert("Llena el formulario antes de enviar")
        }
        setClickButton(true)
    }

    const validateForm = useCallback((inputValues) =>{
        for(let i = 0; i<inputs.length; i++){
            let name = inputs[i].name
            if(!inputValues[name]) return false 
        }
        return true
    },[inputs])

    const handleInputChange = useCallback( e =>{
        e.preventDefault()
        const {value, name} = e.target
        setInputValue({...inputValues, [name]: value})
        if(clickButton === true) setClickButton(false)
    },[inputValues, clickButton, setClickButton])

    const getInputs = useCallback(inputs=>{
        return inputs.map((input, i) => {
            const {type, placeholder, name, onChange} = input
            return (<div className={styles.rowInput} key={i}>
                        <input name={name} className={styles.input} value={inputValues[name] || ""} type={type} onChange={handleInputChange} placeholder={placeholder}/>
                        {inputValues[name] && onChange && <Loading promise={onChange} params={{[name]: inputValues[name]}} spinnerSize = "2rem" spinnerColor = "orange"/>}
                    </div>)
        })
    },[ handleInputChange, inputValues])

return(
    <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            {getInputs(inputs)}
        </div>
        {clickButton?<Loading promise={onSubmit} params={inputValues}/>:<button className={styles.submit} type="submit">{btnText}</button>}
    </form>
)   
}   