import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onSignIn(email, password);
    if (!success) {
      setErrorMsg('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Join BioSense – Smart Farming Starts Here!</h2>
      <p style={styles.subText}>
        Already have an account? Log in to access your dashboard.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {errorMsg && <p style={styles.error}>{errorMsg}</p>}

        <button type="submit" style={styles.button}>Sign In</button>
      </form>

      <p style={styles.forgotPassword}>Forgot Password?</p>

      <p style={styles.callToAction}>
        New here? <Link to="/signup" style={styles.link}>Sign Up Now!</Link>
      </p>
      <p style={styles.callToAction}>
        Get Started with AI-powered Farming!
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#222',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  subText: {
    marginBottom: '2rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px'
  },
  input: {
    marginBottom: '1rem',
    padding: '0.5rem',
    fontSize: '1rem'
  },
  button: {
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#6200ee',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    marginBottom: '1rem'
  },
  forgotPassword: {
    marginTop: '1rem'
  },
  callToAction: {
    marginTop: '1rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'underline'
  }
};

export default SignIn;
