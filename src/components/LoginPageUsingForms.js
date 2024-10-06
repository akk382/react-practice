import React from "react";
import { useState } from 'react'

const Login = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <form
            method="post"
            action="/"
            target="_self"
            autoComplete="on"
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const userName = formData.get('username');
                const passWord = formData.get('password');
                const rememberMe1 = formData.get('rememberme');
                // console.log(userName);
                // console.log(passWord);
                // console.log(rememberMe1);
                // console.log(username);
                // console.log(password);
                // console.log(rememberMe);
            }}>
            {/* <h4>Username: {username}</h4>
            <h4>Password: {password}</h4> */}
            <div className="login-form">
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        placeholder="Username" 
                        value={username} 
                        id="username"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="rememberme">
                    <input 
                        type="checkbox" 
                        id="checkbox" 
                        name="rememberme"
                        checked={rememberMe}
                        onChange={() => setRememberMe(prevVal => !prevVal)}/> 
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <input 
                    type="submit" 
                    value="Submit"
                    disabled={isDisabled} />
                <input 
                type="reset" 
                value="Reset" 
                onClick={() => {
                    setUsername("");
                    setPassword("");
                    setRememberMe(false);
                }}
                disabled={isDisabled} />
            </div>
        </form>
    );
}

export default Login;