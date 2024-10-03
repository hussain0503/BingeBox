import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('user'); 

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
