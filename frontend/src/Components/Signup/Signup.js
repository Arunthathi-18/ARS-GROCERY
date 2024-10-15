import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../Signup/Signup.css'


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
    
        // Check if email and password fields are not empty
        if (email === '' || password === '') {
            alert("Please enter both email and password");
            return;
        }
    
        try {
            await axios.post("http://localhost:9000/signup", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists")
                } else if (res.data === "notexist") {
                    history("/login", { state: { id: email } })
                }
            })
            .catch(e => {
                alert("wrong details")
                console.log(e);
            })
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" /><br/>
    <input type="submit" onClick={submit} value="Submit" disabled={!email || !password} />
</form>
            <br />
            <p>OR</p>
            <br />

            <Link to="/login">Login Page</Link>

        </div>
    )
}

export default Login

