import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Hpage from './Hpage';
import AboutMe from './AboutMe';
import ForgotPassword from './ForgotPassword'; 
import Footer from './Footer';
import BingeBox from './BingeBox.jpg'; 
import FeedbackPage from './FeedbackPage';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const NavBar = () => {
    return (
        <nav>
            <div className="nav-content">
                <img src={BingeBox} alt="BingeBox Logo" className="logo" />
                <ul>
                    <li><Link to="/">Shows</Link></li>
                    <li><Link to="/login">LogIn</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/Feedback">FeedBack</Link></li>
                </ul>
            </div>
        </nav>
    );
};

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Hpage />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/feedBack" element={<FeedbackPage />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} /> 
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />


                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
