import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Hpage from './Hpage';
import AboutMe from './AboutMe';
import ForgotPassword from './ForgotPassword'; 
import Footer from './Footer';
import BingeBox from './images/BingeBox.jpg'; 
import FeedbackPage from './FeedbackPage';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import Logout from './Logout'; 

const NavBar = () => {
    const location = useLocation();

    
    const hideLinks = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/forgot-password' || location.pathname === '/terms-of-service' || location.pathname === '/privacy-policy';

    return (
        <nav>
            <div className="nav-content">
                <img src={BingeBox} alt="BingeBox Logo" className="logo" />
                {!hideLinks && (
                    <ul>
                        <li><Link to="/home">Shows</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/feedback">Feedback</Link></li>
                        <li><Link to="/logout">Logout</Link></li> 
                    </ul>
                )}
            </div>
        </nav>
    );
};

const AppContent = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/home" element={<Hpage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/forgot-password" element={<ForgotPassword />} /> 
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/logout" element={<Logout />} /> 
            </Routes>
            <Footer />
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;

