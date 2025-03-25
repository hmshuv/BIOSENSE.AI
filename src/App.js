import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Prediction from './pages/Prediction';
import NavBar from './components/NavBar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = (email, password) => {
    // Mock sign-in logic
    if (email && password) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleSignUp = (name, email, password) => {
    // Mock sign-up logic
    if (name && email && password) {
      // In real app, you'd create a user in your backend
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route
          path="/signin"
          element={
            isAuthenticated 
              ? <Navigate to="/prediction" />
              : <SignIn onSignIn={handleSignIn} />
          }
        />
        
        <Route
          path="/signup"
          element={
            isAuthenticated
              ? <Navigate to="/prediction" />
              : <SignUp onSignUp={handleSignUp} />
          }
        />

        <Route
          path="/prediction"
          element={
            isAuthenticated
              ? <Prediction />
              : <Navigate to="/signin" />
          }
        />
        
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
