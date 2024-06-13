import React from "react";
import './Register.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
        axios.post('/adduser', {
            data : {
                username : username,
                email : email,
                password : password
            }
        })
    };

    return (
        <div className="login-container">
            <div className="login-box">
            <h2 className="log_title">Register</h2>
            <div className="input-group">
                <FontAwesomeIcon icon={faUser} className="icon" color="white"/>
                <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="input-group">
                <FontAwesomeIcon icon={faEnvelope} className="icon" color="white"/>
                <input
                type="email"
                placeholder="Email"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-group">
                <FontAwesomeIcon icon={faLock} className="icon" color="white"/>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-group">
                <FontAwesomeIcon icon={faLock} className="icon" color="white"/>
                <input
                type="password"
                placeholder="Confirm password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <a href="/login"><p className="reg_req">Already registered? Login now!</p></a>
            <button className="log_btn" onClick={handleRegister}>Register</button>
            </div>
        </div>
        );
};
