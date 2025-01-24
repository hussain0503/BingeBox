import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username,
                email,
                password,
                ContactNumber,
            });
            alert(response.data.message);
            navigate('/'); 
        } catch (error) {
            alert(error.response?.data.message || 'Registration failed');
        }
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Sign Up</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
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
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email.."
                    required
                />
                <label>Contact Number</label>
                <input
                    type="text"
                    value={ContactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="Enter Contact Number.."
                    required
                />
                <p>Already have an Account? <a href="/">Log In</a></p>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;
