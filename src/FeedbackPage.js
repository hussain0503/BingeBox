import React, { useState } from 'react';

const FeedbackPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., sending data to a server
        console.log('Feedback submitted:', formData);
        alert('Thank you for your feedback!');
        setFormData({
            name: '',
            email: '',
            feedback: ''
        });
    };

    return (
        <div className="feedback-container">
            <h1 className="feedback-title">We Value Your Feedback</h1>
            <form onSubmit={handleSubmit} className="feedback-form">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="feedback">Feedback:</label>
                <textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>
                <button type="submit" className="feedback-button">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackPage;
