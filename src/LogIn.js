import { useState } from "react";

function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className="login-container">
            <h1 className="login-title">Log In</h1>
            <form className="login-form">
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username.."
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password.."
                    required
                />
                <p><a href="/forgot-password">Forgot Password?</a></p> 
                <button className="btn">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;
