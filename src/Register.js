import react, { useState } from 'react'

export const Register = (props) => {
    const [fio, setFio] = useState('');
    const [phone, setPhone] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "fio"){
            setFio(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
        if(id === "year"){
            setYear(value);
        }
        if(id === "gender"){
            setGender(value);
        }

    }

    return(
    <div className='auth-form-container'>
        <h2>Register</h2>
        <form classname="register-form" onSubmit={handleSubmit}>
            <label> ФИО: </label>
            <input value={fio} type="text" id="fio" onChange = {(e) => handleInputChange(e)} placeholder="ФИО"/>
            <label> Номер телефона: </label>
            <input value={phone} type="number" id="phone" onChange = {(e) => handleInputChange(e)} placeholder="Номер телефона"/>
            <label> Год рождения: </label>
            <input value={year} type="number" id="year" onChange = {(e) => handleInputChange(e)} placeholder="Год рождения"/>
            <label> Ваш пол: </label>
            <input value={gender} type="text" id="gender" onChange= {(e) => handleInputChange(e)} placeholder="Пол"/>
            <button type="button" onClick="register()">Register here</button>
        </form>
        <button classname="link-btn" onClick={() => props.onFormSwitch('register')}>Don`t have an account? Register now</button> 
    </div>
    )      
        
}

export default Register;