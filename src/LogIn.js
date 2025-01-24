import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(''); // Reset error state
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password,
            });
            
            alert(response.data.message); 
            navigate('/home'); 
        } catch (error) {
            setError(error.response?.data.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Log In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                {error && <p className="error-message">{error}</p>}
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username..."
                    aria-label="Enter Username"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password..."
                    aria-label="Enter Password"
                    required
                />
                <p>Don't have an Account? <a href="/signup">Sign Up</a></p>
                <p><a href="/forgot-password">Forgot Password?</a></p>
                <button type="submit" className="btn">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;
