import React, { useState } from "react";

function Login({setUser}) {
    const [formData, setFormData] = useState([]);

    let formElements = [{
        label: "Username",
        key: 'username',
        type: 'text'
    }, {
        label: "Password",
        key: 'password',
        type: 'text'
    }, {
        label: "Password Confirmation",
        key: 'password_confirmation',
        type: 'text'
    }]

    const handleChange = (value, key) => {
        setFormData({ ...formData, [key]: value })
    }

    const login = async (e) => {
        e.preventDefault()

    }

    const register = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        setUser(data)
    }

    return (
            <form>
                {formElements.map(formElement => {
                    return <div>
                        {formElement.label}
                        <input type={formElement.type} value={formData[formElement.key]} onChange={(e) => { handleChange(e.target.value, formElement.key) }} />
                    </div>
                })}
                <button onClick={login}>Login</button>
                <button onClick={register}>Register</button>
            </form>
    )
}

export default Login
