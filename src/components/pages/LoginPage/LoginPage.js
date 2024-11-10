/* src/components/pages/LoginPage/LoginPage.js */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../services/FirebaseConfig';
import CloseButton from '../../ui/buttons/CloseButton';
import LoginButton from '../../ui/buttons/LoginButton';
import { FaMicrosoft } from "react-icons/fa6";
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const goToWelcomePage = () => {
    navigate('/'); // Redirect to the welcome page
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard'); // Redirect to the main page after login
    } catch (err) {
      setError("Erreur d'authentification : " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/tickets'); // Redirect to the main page after login
    } catch (err) {
      setError("Erreur d'authentification : " + err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleLogin}>
        <CloseButton onClose={goToWelcomePage} />
        <h2>Connexion</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton type="submit" label="Se connecter" />
      </form>
      <form className="login-form" onSubmit={handleLogin}>
        <LoginButton type="submit" label="Se connecter avec Microsoft" onClick={handleGoogleLogin}>
          <FaMicrosoft size={40} color="blue" />
        </LoginButton>
      </form>
      <Link to="/subscribe">Créer un compte</Link>
    </div>
  );
};

export default LoginPage;