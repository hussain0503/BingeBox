import { useState } from "react";
function SignUp(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [ContactNumber,setContactNumber] = useState('')

    return( 
    <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form">
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
                type="number"
                value={ContactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter Contact Number.."
                required
            />
                        <p>Already have an Account?<a href="/LogIn">Log In</a></p>

            <button className="btn">Submit</button>
        </form>
    </div>
);
}
export default SignUp;