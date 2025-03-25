import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Assuming your global CSS is here

function Home() {
  return (
    <div className="home-container">
      
      {/* Title & Hero-like Intro */}
      <div className="intro-section animate-fade-in-down">
        <h1 className="intro-title">Welcome to BioSense – Smart Farming for a Sustainable Future</h1>
        <h2 className="intro-subtitle">Sensing Nature, Growing the Future</h2>
        <p className="intro-description">
          A Machine Learning-driven solution to help farmers make data-driven crop choices, 
          ensuring higher yield and sustainable agriculture.
        </p>
      </div>

      {/* Cards Container */}
      <div className="cards-wrapper">
        
        {/* About BioSense Card */}
        <div className="info-card animate-scale-in">
          <h3 className="card-title">About BioSense</h3>
          <p className="card-paragraph">
            BioSense leverages AI to analyze soil and environmental conditions, 
            recommending the best crops to grow. Built on reliable ICAR data, 
            our system considers soil nutrients (N, P, K), temperature, 
            humidity, pH, and rainfall for precise predictions.
          </p>
          <p className="card-paragraph">
            Our goal is to empower farmers with data-driven decisions, 
            leading to eco-friendly farming and optimized productivity.
          </p>
        </div>
        
        {/* Key Features Card */}
        <div className="info-card animate-scale-in">
          <h3 className="card-title">Key Features</h3>
          <ul className="features-list">
            <li>✅ AI-powered crop prediction</li>
            <li>✅ Real-time environmental insights</li>
            <li>✅ Sustainable and data-driven recommendations</li>
            <li>✅ Easy-to-use interface for farmers</li>
          </ul>
        </div>
      </div>

      {/* CTA Section in Cards */}
      <div className="cta-cards-wrapper">
        
        <div className="cta-card animate-fade-in-down">
          <p>Enter your farm data to see which crop is best for your field.</p>
          <Link to="/prediction">
            <button className="cta-button">Try Our Crop Prediction Tool Now!</button>
          </Link>
        </div>

        <div className="cta-card animate-fade-in-down">
          <p>Sign up to access more features like saving predictions and tracking farm insights.</p>
          <Link to="/signup">
            <button className="cta-button">Sign Up to Access More Features!</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;
