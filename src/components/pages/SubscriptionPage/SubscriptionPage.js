// /* src/components/pages/SubscriptionPage/SubscriptionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../../services/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import CloseButton from '../../ui/buttons/CloseButton';
import LoginButton from '../../ui/buttons/LoginButton';
import UserDataInput from '../../ui/inputs/UserDataInput';
import './SubscriptionPage.css';

function SubscriptionPage () {
  const navigate = useNavigate();
  const goToWelcomePage = () => {
    navigate('/');  // Redirige vers la page de connexion
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [error, setError] = useState('');
  
  const handleFirstNameChange = (value) => { 
    setFirstName(value); 
  };
  const validateFirstName = (value) => {
    return value.length < 5;
  };
  const handleLastNameChange = (value) => { 
    setLastName(value); 
  };
  const validateLastName = (value) => {
    return value.length < 5;
  };
  const handleEmailChange = (value) => { 
    setEmail(value); 
  };
  const validateEmail = (value) => {
    return value.length < 5;
  };
  const handlePasswordChange = (value) => { 
    setPassword(value); 
  };
  const validatePassword = (value) => {
    return value.length < 5;
  };
  const handleConfirmPasswordChange = (value) => { 
    setConfirmPassword(value); 
  };
  const validateConfirmPassword = (value) => {
    return value.length < 5;
  };
  
  const handleSubscription = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      // Créer un utilisateur avec email et mot de passe dans Firebase
      //const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      //const user = userCredential.user;
      await createUserWithEmailAndPassword(auth, email, password);
      if (profilePhoto) {
        //const photoRef = storage.ref(`profilePhotos/${user.uid}`);
        //await photoRef.put(profilePhoto);
        //const photoURL = await photoRef.getDownloadURL();

        // Save user details to Firestore
        //await db.collection('users').doc(user.uid).set({ firstName, lastName, photoURL, email });
      }
      navigate('/login');  // Redirige vers la page principale après inscription
    } catch (err) {
      setError("Erreur d'inscription : " + err.message);
    }
  };

  return (
    <div className="subscription-wrapper">
       <form className="subscription-form" onSubmit={handleSubscription}>
        <CloseButton onClose={goToWelcomePage} />
        <h2>Inscription</h2>
        {error && <p className="error-message">{error}</p>}
        <UserDataInput type="text" label="First Name" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} required className="UserDataInput" />
        <UserDataInput type="text" label="Last Name" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} required className="UserDataInput" />
        <UserDataInput type="email" label="Email" placeholder="Email" value={email} onChange={handleEmailChange} required className="UserDataInput" />
        <UserDataInput type="password" label="Password" placeholder="Password" value={password} onChange={handlePasswordChange} required className="UserDataInput" />
        <UserDataInput type="password" label="Confirm Password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required className="UserDataInput" />
        <UserDataInput className="UserDataInput" type="file" onChange={(e) => setProfilePhoto(e.target.files[0])} accept="image/*" />
        <LoginButton type="submit" label="S'inscrire" />
      </form>
    </div>
  );
};

export default SubscriptionPage;