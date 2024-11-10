// src/components/ui/inputs/UserDataInput/UserDataInput.js
import React from 'react';
import styles from './UserDataInput.module.css';

const UserDataInput = ({
  type = 'text',       // Type de l'input (texte, email, mot de passe, etc.)
  label = '',          // Label pour l'input
  placeholder = '',    // Placeholder du champ
  value = '',          // Valeur initiale
  onChange = () => {}, // Fonction pour gérer les changements de valeur
  required = false,    // Si le champ est requis ou non
  className = '',
  maxLength = null,    // Longueur maximale
  minLength = null,    // Longueur minimale
  errorMessage = '',   // Message d'erreur en cas de validation
  validate = null
}) => {
  const [error, setError] = React.useState('');

  // Gérer le changement de valeur et la validation
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (validate) {
      const validationError = validate(newValue);
      setError(validationError ? errorMessage : '');
    }
    onChange(newValue);
};
return (
  <div>
    {label && <label>{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required={required}
      className={styles.UserDataInput}
      maxLength={maxLength}
      minLength={minLength}
      aria-invalid={error ? "true" : "false"}
    />
    {error && <span className="error-message">{error}</span>}
  </div>
  );
}
export default UserDataInput;