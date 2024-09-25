import React from 'react';
import melanie from './images/melanie.jpg';
import hussain from './images/hussain.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>BingeBox</h1>
        <p>Your ultimate destination for endless entertainment.</p>
      </header>

      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          At BingeBox, we are dedicated to bringing you the best in entertainment. Our mission is to provide a vast library of movies, TV shows, and exclusive content, ensuring that you always have something exciting to watch. We strive to offer a seamless streaming experience with high-quality content and user-friendly features.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src= {hussain} alt="hussain" />
          <h3>Hussain Mantri</h3>
        </div>
        <div className="team-member">
          <img src= {melanie} alt="melanie" />
          <h3>Melanie Fernandes</h3>
        </div>
      </section>

      <section className="about-us-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We’d love to hear from you! Reach out to us at:
        </p>
        <p>
          <strong>Email:</strong> hussainzmantri@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> (+91) 9820918181
        </p>
        <p>
          <strong>Address:</strong> 4 Bungalows, Andheri (West)
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
