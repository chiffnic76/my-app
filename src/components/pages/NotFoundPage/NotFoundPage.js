/* src/components/pages/NotFoundPage/NotFoundPage.js */
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="notfound-wrapper">
      <h1>404 - Page Not Found</h1>
      <p>Oops! La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="back-home-link">Retour à l'accueil</Link>
    </div>
  );
};

export default NotFoundPage;