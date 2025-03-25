import React, { useState } from 'react';

const Prediction = () => {
  const [formData, setFormData] = useState({
    N: '',
    P: '',
    K: '',
    temperature: '',
    humidity: '',
    pH: '',
    rainfall: ''
  });
  const [predictionResult, setPredictionResult] = useState('');
  const [insights, setInsights] = useState('');

  // Update local state as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePredict = (e) => {
    e.preventDefault();
    // Mock logic – replace with real backend call
    const result = mockPredict(formData);
    
    setPredictionResult(result);
    setInsights(`Why this crop is the best choice based on soil and climate conditions... 
(You could show more data-specific insights here.)`);
  };

  // Example mock function
  const mockPredict = () => {
    const possibleCrops = ['Wheat', 'Rice', 'Maize', 'Cotton', 'Soybean'];
    const randomIndex = Math.floor(Math.random() * possibleCrops.length);
    return possibleCrops[randomIndex];
  };

  const handleDownload = () => {
    // Mock "download" example. In a real app, you might generate a PDF or CSV, then download it.
    alert('Report downloaded (mock). You could generate a real PDF/CSV here.');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Smart Crop Prediction</h2>
      <p style={styles.description}>
        Enter your soil and environmental details, and our advanced AI model will suggest 
        the best crop for you. Ensuring sustainable agriculture and improved yield with 
        data-backed recommendations.
      </p>

      <form onSubmit={handlePredict} style={styles.form}>
        <label style={styles.label}>Nitrogen (N):
          <input
            type="number"
            name="N"
            value={formData.N}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>

        <label style={styles.label}>Phosphorus (P):
          <input
            type="number"
            name="P"
            value={formData.P}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>

        <label style={styles.label}>Potassium (K):
          <input
            type="number"
            name="K"
            value={formData.K}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>

        <label style={styles.label}>Temperature:
          <input
            type="number"
            step="0.01"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>

        <label style={styles.label}>Humidity:
          <input
            type="number"
            step="0.01"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>

        <label style={styles.label}>Soil pH:
          <input
            type="number"
            step="0.01"
            name="pH"
            value={formData.pH}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>

        <label style={styles.label}>Rainfall:
          <input
            type="number"
            step="0.01"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>

        <button type="submit" style={styles.button}>Predict</button>
      </form>

      {/* Output section */}
      {predictionResult && (
        <div style={styles.resultSection}>
          <h3>Predicted Crop: {predictionResult}</h3>
          <p style={styles.insights}>{insights}</p>
          <button onClick={handleDownload} style={styles.button}>
            Download Report
          </button>
        </div>
      )}

      {/* Call to Action */}
      {predictionResult && (
        <div style={styles.ctaContainer}>
          <button onClick={() => setPredictionResult('')} style={styles.button}>Predict Again</button>
          <a href="/" style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Home</button>
          </a>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#222',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
    textAlign: 'left'
  },
  label: {
    marginBottom: '1rem'
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.5rem'
  },
  button: {
    backgroundColor: '#6200ee',
    color: '#fff',
    border: 'none',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '1rem 0.5rem 0 0'
  },
  resultSection: {
    marginTop: '2rem'
  },
  insights: {
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  ctaContainer: {
    marginTop: '2rem'
  }
};

export default Prediction;
