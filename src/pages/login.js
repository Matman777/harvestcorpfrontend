import NavBar from "../components/nav";
import { useState } from "react";


export default function Login() {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // maj du state
        setInputs(values => ({...values, [name]: value}))
        console.log(event.target.name)
    }

    const handleSubmit = (event) => {
        // inputs.email
        setInputs(event.target.email.value)
        event.preventDefault()
        console.log('HANDLE SUBMIT')
        console.log(event.target)
        console.log('HANDLE SUBMIT')
        // -> call API
        fetch('http//:localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
            .then((response) => response.json())
            .then((data) => {
                
            })

        // return 200
        // 
    }
    return(
        <>
        <NavBar />
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <input onChange={handleChange} className="email" type="text" placeholder="Votre email" name="email"></input>
            <label htmlFor="motDePasse">MOT DE PASSE</label>
            <input onChange={handleChange} className="mot de passe" type="password" placeholder="Votre mot de passe" name="password"></input>
            <button className="validate" type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}