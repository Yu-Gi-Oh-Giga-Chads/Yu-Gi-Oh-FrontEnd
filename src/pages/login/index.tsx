import React from "react";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useUserStore from "../../store/userStore";

export default function Login() {

    const setUser = useUserStore((state) => state.setUser);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      const user = {
        username : username,
        email : '',
        password : password
      }
      setUser(user);
    };

    return (
        <div className="login-container">
            <div className="login-box">
            <h2 className="log_title">Login</h2>
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
                <FontAwesomeIcon icon={faLock} className="icon" color="white"/>
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <a href="/register"><p className="reg_req">No account? Register now!</p></a>
            <button className="log_btn" onClick={handleLogin}>Login</button>
            </div>
        </div>
        );
};
