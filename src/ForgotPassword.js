import { useState } from "react";


function ResetPassword(){
    const [confirmpass,setconfirmpass] = useState('')
    const [password,setPassword] = useState('')
    return(
        
        <div className="login-container">
        <h1 className="login-title">Reset Password</h1>
        <form className="login-form">
            <label>New Password</label>
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
            <label>Confirm Password</label>
            <input
                type="password"
                value={confirmpass}
                onChange={(e) => setconfirmpass(e.target.value)}
                placeholder="Confirm Password.."
            />
            <button className="btn">Change Password</button>
        </form>
        
        </div>
        
        
  
);
}
export default ResetPassword;