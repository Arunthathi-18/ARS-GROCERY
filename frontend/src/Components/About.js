import React from 'react';
import './About.css'

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          We are an online grocery store dedicated to providing fresh and quality groceries
          directly to your doorstep. Our mission is to make grocery shopping easy, fast, and
          convenient for everyone.
        </p>

        <h3>Core Values</h3>
        <ul>
          <li>Quality</li>
          <li>Customer Service</li>
          <li>Sustainability</li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          Address:Chettinad college,Puliyur,Karur
          <br />
          Phone:8667282744 
          <br />
          Email: <a href="arunthathiramasamy1811@gmail.com">arunthathiramasamy1811@gmail.com</a>
        </p>

        <h3>Find Us</h3>
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838235115465!2d-122.08405108438764!3d37.38534807932542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425a6d9f%3A0x6c296c66619367e0!2sGoogleplex%2C+1600+Amphitheatre+Parkway%2C+Mountain+View%2C+CA+94043!5e0!3m2!1sen!2sus!4v1562585972616!5m2!1sen!2sus"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;