import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Perform logout logic here (e.g., clear user data, tokens, etc.)
        localStorage.removeItem('user'); // Example: removing user data from local storage

        // Redirect to login page after logout
        navigate('/');
    }, [navigate]);

    return (
        <div>
            <h1>Logging you out...</h1>
            <p>Please wait a moment.</p>
        </div>
    );
};

export default Logout;
