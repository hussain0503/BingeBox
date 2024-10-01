import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password,
            });
            
            alert(response.data.message); // Alert the user with a success message
            
            // Redirect to the home page (e.g., '/')
            navigate('/home'); // Change this if your home route is different
        } catch (error) {
            alert(error.response?.data.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Log In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
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
                <p>Don't have an Account?<a href="/signup">SignUp</a></p> 
                <p><a href="/forgot-password">Forgot Password?</a></p> 
                <button type="submit" className="btn">Log In</button>
            </form>
        </div>
    );
}

export default LogIn;
