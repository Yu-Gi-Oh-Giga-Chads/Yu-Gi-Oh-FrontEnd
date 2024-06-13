import React from "react";
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useUserStore from "../../store/userStore";
import axios from "axios";

interface User {
    username : string,
    password : string,
}

export default function Login() {

    const setUser = useUserStore((state) => state.setUser);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      const user = {
        username : username,
        password : password
      }

      const allUsers : Array<User> = await (await axios.get('/getloginusers')).data;

      if(allUsers.includes(user)) {
        const curUser : User = await (await axios.get(`/getuser/${user.username}`)).data;
        setUser(curUser);
        window.location.href = "http://localhost:3000"
      }
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
