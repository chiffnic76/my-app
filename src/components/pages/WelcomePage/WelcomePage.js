/* src/components/pages/WelcomePage/WelcomePage.js */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');  // Redirige vers la page de connexion
  };

  return (
    <div className="welcome-wrapper">
      <h1 className="title">Bienvenue sur Notre Application</h1>
      <button className="button" onClick={goToLogin}>Se connecter</button>
    </div>
  );
};

export default WelcomePage;
