import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Use your global CSS

// Import your two background images:
import introBg from '../assets/introBg.jpg';
import featuresBg from '../assets/featuresBg.jpg';

function Home() {
  return (
    <div className="home-container">
      
      {/* INTRO + ABOUT Section (first background) */}
      <div 
        className="intro-about-bg"
        style={{
          backgroundImage: `url(${introBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="intro-section animate-fade-in-down">
          <h1>Welcome to BioSense – Smart Farming for a Sustainable Future</h1>
          <h2>Sensing Nature, Growing the Future</h2>
          <p>
            A Machine Learning-driven solution to help farmers make data-driven 
            crop choices, ensuring higher yield and sustainable agriculture.
          </p>
        </div>

        <div className="info-card animate-scale-in about-card">
          <h3>About BioSense</h3>
          <p>
            BioSense leverages AI to analyze soil and environmental conditions, 
            recommending the best crops to grow. Built on reliable ICAR data, 
            our system considers soil nutrients (N, P, K), temperature, 
            humidity, pH, and rainfall for precise predictions.
          </p>
          <p>
            Our goal is to empower farmers with data-driven decisions, 
            leading to eco-friendly farming and optimized productivity.
          </p>
        </div>
      </div>

      {/* KEY FEATURES + CTA Section (second background) */}
      <div 
        className="features-cta-bg"
        style={{
          backgroundImage: `url(${featuresBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="info-card animate-scale-in features-card">
          <h3>Key Features</h3>
          <ul>
            <li>✅ AI-powered crop prediction</li>
            <li>✅ Real-time environmental insights</li>
            <li>✅ Sustainable and data-driven recommendations</li>
            <li>✅ Easy-to-use interface for farmers</li>
          </ul>
        </div>

        <div className="cta-cards-wrapper">
          <div className="cta-card animate-fade-in-down">
            <p>Enter your farm data to see which crop is best for your field.</p>
            <Link to="/prediction">
              <button>Try Our Crop Prediction Tool Now!</button>
            </Link>
          </div>

          <div className="cta-card animate-fade-in-down">
            <p>Sign up to access more features like saving predictions.</p>
            <Link to="/signup">
              <button>Sign Up to Access More Features!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
