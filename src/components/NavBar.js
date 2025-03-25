import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ isAuthenticated, onSignOut }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.leftSection}>
        <Link to="/" style={styles.logoText}>BIOSENSE</Link>
      </div>
      <div style={styles.rightSection}>
        {isAuthenticated ? (
          <button onClick={onSignOut} style={styles.button}>
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/signin">
              <button style={styles.button}>Sign In</button>
            </Link>
            <Link to="/signup">
              <button style={styles.button}>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111',
    padding: '1rem'
  },
  leftSection: {
    marginLeft: '1rem'
  },
  rightSection: {
    marginRight: '1rem'
  },
  logoText: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#6200ee',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '4px',
    marginLeft: '0.5rem'
  }
};

export default NavBar;
