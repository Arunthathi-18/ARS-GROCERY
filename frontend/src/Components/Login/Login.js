import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../Login/Login.css'

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adminUsername, setAdminUsername] = useState(''); // Add a state for admin username
    const [adminPassword, setAdminPassword] = useState(''); // Add a state for admin password

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:9000/", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    history("/", { state: { id: email } })
                } else if (res.data === "notexist") {
                    alert("User have not signed up")
                }
            })
            .catch(e => {
                alert("Password required")
                console.log(e);
            })

        } catch (e) {
            console.log(e);

        }

    }

    // Function to handle admin login
    async function adminLogin(e) {
        e.preventDefault();

        const adminUsernamePrompt = prompt("Enter admin username:");
        const adminPasswordPrompt = prompt("Enter admin password:");

        if (adminUsernamePrompt === "yogesh" && adminPasswordPrompt === "123") { // Replace with your admin username and password
            history("/admin"); // Navigate to admin page
        } else {
            alert("Invalid admin credentials");
        }
    }

    return (
        
        <div className="login">
            
            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  /><br/>
                <input type="submit" onClick={submit} />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

            <br />
            <button onClick={adminLogin}>Admin Login</button>

        </div>
    )
}

export default Login;

